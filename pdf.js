
import puppeteer from 'puppeteer';

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Set viewport
  await page.setViewport({ width: 1280, height: 1024 });

  console.log("Navigating to page...");
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 60000 });

  console.log("Scrolling to trigger lazy loaded images...");
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
    window.scrollTo(0, 0);
  });

  await new Promise(r => setTimeout(r, 2000));

  console.log("Injecting PDF print styles for Dark Mode...");
  const documentStyles = `
    /* === RESET & VISIBILITY === */
    * { 
      -webkit-print-color-adjust: exact !important; 
      print-color-adjust: exact !important;
      content-visibility: visible !important;
      contain-intrinsic-size: auto !important;
    }
    
    /* Hide Navigation/UI */
    header, aside, button, .mobile-index-trigger, .scroll-to-top, .theme-toggle { 
      display: none !important; 
    }
    .fixed { display: none !important; }

    /* === FULL BLACK BACKGROUND (NO MARGINS) === */
    @page {
      margin: 0;
      size: A4;
      background-color: #050505; 
    }

    body {
      background-color: #050505 !important;
      color: #e5e5e5 !important;
      margin: 0 !important;
      /* Simulate margins via padding inside the body */
      padding: 2cm 1.5cm 2cm 1.5cm !important; 
      min-height: 100vh;
    }
    
    main {
      padding: 0 !important;
      max-width: 100% !important;
      margin: 0 !important;
    }

    section {
      margin-bottom: 40px !important;
      page-break-inside: auto;
    }

    /* === FIXED HEADER/FOOTER VIA CSS (Since we removed PDF margins) === */
    /* This will repeat on every page in Chrome/Puppeteer print */
    
    #print-header, #print-footer {
        position: fixed;
        left: 0;
        right: 0;
        text-align: center;
        color: #666; /* Subtle gray text */
        font-family: sans-serif;
        font-size: 9px;
        background-color: #050505; /* Match bg to cover content if shifting */
        padding: 5px 0;
        z-index: 9999;
    }

    #print-header {
        top: 0.5cm;
        border-bottom: 1px solid #222;
        width: 90%;
        margin: 0 auto;
        display: flex; 
        justify-content: space-between;
    }

    #print-footer {
        bottom: 0.5cm;
    }
    
    /* Layout Logic */
    @media print {
      .lg\\:flex-row {
        flex-direction: row !important;
      }
      .lg\\:w-1\\/3 {
        width: 33.333333% !important;
      }
      .lg\\:w-5\\/12 {
        width: 41.666667% !important;
      }
      .flex-1 {
        flex: 1 1 0% !important;
      }
      img {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    }

    /* === REMOVE "MARKING" (GOLD/YELLOW COLORS) === */
    /* Force simple white/gray styling for everything */
    
    /* Kill Gradients on text */
    .text-transparent, .bg-clip-text {
        background: none !important;
        -webkit-text-fill-color: initial !important;
        color: #ffffff !important; /* Pure white for titles */
    }

    /* Kill Gold Colors */
    .text-premium-gold {
        color: #ffffff !important; /* Make pills white */
    }
    
    /* Kill Gold Borders */
    .border-premium-gold, .border-premium-gold\\/30 {
        border-color: #444 !important; /* Dark gray border */
    }

    /* Pills specific cleanup */
    .text-xs.font-mono.uppercase {
        color: #bbb !important; /* Soft gray for pill text */
        border-color: #444 !important;
    }

    /* H2 Titles specifically */
    h2 {
        color: #ffffff !important;
        background: none !important;
    }

    /* Links */
    a { color: #60a5fa !important; text-decoration: none !important; }
    
    /* Tables */
    table {
        border-color: #333 !important;
    }
    th, td {
        border: 1px solid #333 !important;
        color: #e5e5e5 !important;
    }
    th {
        background-color: #111 !important;
        color: #fff !important;
    }
  `;

  // === DARK MODE GENERATION ===
  console.log("Switching to Dark Mode...");

  // Force adding 'dark' class
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');

    // Inject custom header/footer divs into the body for CSS fixed printing
    const header = document.createElement('div');
    header.id = 'print-header';
    header.innerHTML = '<span>Economia Aziendale</span><span>Author: Singh Rishapveer</span>';
    document.body.prepend(header);

    const footer = document.createElement('div');
    footer.id = 'print-footer';
    footer.innerHTML = 'Singh Rishapveer'; // Page numbers are hard with pure CSS fixed, sticking to Author name
    document.body.append(footer);
  });

  await page.evaluate((styles) => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);
  }, documentStyles);

  console.log("Generating website_dark.pdf...");
  await page.pdf({
    path: 'website_dark.pdf',
    // MARGIN 0 IS KEY FOR FULL BACKGROUND
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
  console.log("Done.");
})();
