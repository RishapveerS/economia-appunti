export interface Subject {
    title: string;
    year: 'Year 1' | 'Year 2' | 'Year 3';
    slug: string;
    image: string;
}

export const subjects: Subject[] = [
    // 1st Year
    {
        title: "Analisi Matematica 1",
        year: "Year 1",
        slug: "analisi-1",
        image: "/FIRST-YEAR-IMAGES/ANALISI-1.png"
    },
    {
        title: "Fondamenti di Informatica",
        year: "Year 1",
        slug: "fondamenti-informatica",
        image: "/FIRST-YEAR-IMAGES/fondamenti-di-informatica.png"
    },
    {
        title: "Geometria e Algebra Lineare",
        year: "Year 1",
        slug: "geometria-algebra",
        image: "/FIRST-YEAR-IMAGES/GEOMETRIA-E-ALGEBRA-LINEARE.png"
    },
    {
        title: "Fisica",
        year: "Year 1",
        slug: "fisica",
        image: "/FIRST-YEAR-IMAGES/FISICA.png"
    },
    {
        title: "Elettrotecnica",
        year: "Year 1",
        slug: "elettrotecnica",
        image: "/FIRST-YEAR-IMAGES/elettrotecnica.png"
    },
    {
        title: "Economia e Org. Aziendale",
        year: "Year 1",
        slug: "economia",
        image: "/FIRST-YEAR-IMAGES/economia e organizzazione aziendale.png"
    },

    // 2nd Year
    {
        title: "Analisi Matematica 2",
        year: "Year 2",
        slug: "analisi-2",
        image: "/SECOND-YEAR-IMAGES /ANALISI-2.png"
    },
    {
        title: "Architettura Calcolatori e OS",
        year: "Year 2",
        slug: "architettura-os",
        image: "/placeholder.jpg"
    },
    {
        title: "Logica e Algebra",
        year: "Year 2",
        slug: "logica-algebra",
        image: "/placeholder.jpg"
    },
    {
        title: "Elettromagnetismo e Campi",
        year: "Year 2",
        slug: "elettromagnetismo",
        image: "/placeholder.jpg"
    },
    {
        title: "Probabilità e Statistica",
        year: "Year 2",
        slug: "probabilita-statistica",
        image: "/placeholder.jpg"
    },
    {
        title: "Informazione e Stima",
        year: "Year 2",
        slug: "informazione-stima",
        image: "/placeholder.jpg"
    },
    {
        title: "Segnali per Comunicazioni",
        year: "Year 2",
        slug: "segnali-comunicazioni",
        image: "/placeholder.jpg"
    },
    {
        title: "Algoritmi e Principi Inf.",
        year: "Year 2",
        slug: "algoritmi",
        image: "/placeholder.jpg"
    },
    {
        title: "Fondamenti di Automatica",
        year: "Year 2",
        slug: "automatica",
        image: "/placeholder.jpg"
    },

    // 3rd Year
    {
        title: "Fondamenti di Elettronica",
        year: "Year 3",
        slug: "elettronica",
        image: "/placeholder.jpg"
    },
    {
        title: "Sistemi Informativi",
        year: "Year 3",
        slug: "sistemi-informativi",
        image: "/placeholder.jpg"
    },
    {
        title: "Basi di Dati 1",
        year: "Year 3",
        slug: "basi-dati-1",
        image: "/placeholder.jpg"
    },
    {
        title: "Reti Logiche",
        year: "Year 3",
        slug: "reti-logiche",
        image: "/placeholder.jpg"
    },
    {
        title: "Ingegneria del Software",
        year: "Year 3",
        slug: "ingegneria-software",
        image: "/placeholder.jpg"
    },
    {
        title: "Fond. Comunicazioni e Internet",
        year: "Year 3",
        slug: "internet",
        image: "/placeholder.jpg"
    },
];
