
import puppeteer from 'puppeteer';

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Set viewport to desktop size
  await page.setViewport({ width: 1280, height: 1024 });

  console.log("Navigating to page...");
  // Navigate to local dev server
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

  console.log("Injecting PDF print styles...");
  const documentStyles = `
    /* === ESSENTIAL PDF RESETS === */
    * { 
      -webkit-print-color-adjust: exact !important; 
      print-color-adjust: exact !important;
      content-visibility: visible !important;
      contain-intrinsic-size: auto !important;
    }
    
    /* Hide Navigation/UI */
    header, aside, button, .mobile-index-trigger, .scroll-to-top, .theme-toggle, .risk-reward-chart-container { 
      display: none !important; 
    }
    .fixed { display: none !important; }

    /* === LAYOUT FIXES === */
    body {
      background-color: #ffffff !important;
      font-size: 12pt !important;
      line-height: 1.5 !important;
      overflow: visible !important;
      height: auto !important;
      color: #000000 !important;
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
    
    /* FORCE DESKTOP LAYOUT (Preserve side-by-side for images) */
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
    
    /* === FONT SIZES === */
    h2 { font-size: 15pt !important; }
    h3 { font-size: 14pt !important; }
    h4, strong, .font-serif.text-lg { font-size: 13pt !important; }
    p, li, span, div, td { font-size: 12pt !important; line-height: 1.5 !important; }
    p span { font-size: inherit !important; }
    
    /* === SUPER AGGRESSIVE DE-MARKING === */
    
    /* 1. Target the Gradient Title explicitly and destroy it */
    h2.text-transparent.bg-clip-text,
    .text-transparent, 
    .bg-clip-text {
        color: #000000 !important;
        background: none !important;
        background-image: none !important;
        -webkit-text-fill-color: #000000 !important;
        text-shadow: none !important;
    }

    /* 2. Target the Gold Pill explicitly and neutralize it */
    .text-premium-gold {
         color: #000000 !important;
         -webkit-text-fill-color: #000000 !important;
    }
    .border-premium-gold, .border-premium-gold\\/30 {
         border-color: #000000 !important;
    }
    
    /* 3. Global Color Force */
    h1, h2, h3, h4, h5, h6, 
    p, li, span, div, strong, em, b, i, q {
        color: #000000 !important;
    }

    /* 4. Fix Nota/Attenzione Boxes */
    /* Often these are div with bg-gradient or borders */
    .border-l-2 {
        border-color: #000000 !important;
        background: #ffffff !important;
    }
    div[class*="bg-gradient"] {
        background: #ffffff !important;
    }
    /* Ensure the text inside them is black (covered by global but just in case) */
    
    /* 5. Links - Black and Underlined */
    a { 
        color: #000000 !important; 
        text-decoration: underline; 
    } 
    
    /* Tables */
    table {
        border-collapse: collapse;
        width: 100%;
        margin: 1em 0;
        border: 1px solid #000000 !important;
    }
    th, td {
        border: 1px solid #000000 !important;
        padding: 0.5rem;
        color: #000000 !important;
    }
  `;

  // === LIGHT MODE GENERATION ONLY ===
  console.log("Switching to Light Mode...");
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
  });

  await page.evaluate((styles) => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);
  }, documentStyles);

  console.log("Generating website_light.pdf...");
  await page.pdf({
    path: 'website_light.pdf',
    format: 'A4',
    landscape: false,
    printBackground: true,
    margin: { top: '1.5cm', right: '1cm', bottom: '1.5cm', left: '1cm' },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-size: 9px; margin-left: 1cm; width: 100%; display: flex; justify-content: space-between; font-family: sans-serif; color: #000;">
        <span>Economia Aziendale</span>
        <span style="margin-right: 1cm;">Author: Singh Rishapveer</span>
      </div>`,
    footerTemplate: `
      <div style="font-size: 9px; margin-left: 1cm; margin-right: 1cm; width: 100%; text-align: center; color: #000; font-family: sans-serif;">
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </div>`,
  });

  await browser.close();
  console.log("Done.");
})();
