import { MainSection } from '../types';

export const analisi1CourseContent: MainSection[] = [
    {
        id: "lezione-1-logica",
        title: "Lezione 1: Logica Matematica",
        subsections: [
            {
                title: "Obiettivi e Fondamenti",
                content: [
                    "**Obiettivo:** analizzare e formalizzare metodi corretti di ragionamento.",
                    "La logica fornisce alla matematica un linguaggio chiaro e un metodo rigoroso per dimostrare teoremi partendo da assiomi più elementari.",
                    "Questa disciplina costituisce la base formale su cui si costruisce l'intero edificio matematico, garantendo la validità delle deduzioni e la coerenza delle teorie."
                ]
            },
            {
                title: "Nozioni Primitive e Assiomi",
                content: [
                    "In matematica, non tutto può essere definito o dimostrato. Esistono concetti e verità di partenza che vengono accettati intuitivamente o per convenzione.",
                    "**Nozione primitiva:** Un concetto fondamentale non definito tramite termini più semplici, ma accettato intuitivamente. Esempio classico: il concetto di \"punto\" nella geometria euclidea.",
                    "**Assioma (o Postulato):** Una proposizione assunta come vera senza dimostrazione. Gli assiomi costituiscono i \"mattoni\" iniziali di una teoria matematica.",
                    "Esempi celebri includono i postulati di Euclide. Consideriamo il V postulato (delle parallele):",
                    "**Assioma:** Dato un punto $P$ situato fuori da una retta $r$, esiste una sola retta passante per $P$ parallela a $r$."
                ]
            },
            {
                title: "Teoremi e Dimostrazioni",
                content: [
                    "A differenza degli assiomi, i teoremi sono affermazioni la cui verità deve essere stabilita attraverso un processo logico deduttivo.",
                    "**Teorema:** Una proposizione che viene dimostrata vera a partire dagli assiomi e dalle nozioni primitive, utilizzando le regole della logica.",
                    "Esempio di teorema geometrico:",
                    "**Teorema:** La somma degli angoli interni di un triangolo è sempre uguale a $\pi$ radianti ($180^\\circ$).",
                    "La dimostrazione di un teorema è una sequenza finita di passaggi logici che, partendo dalle ipotesi (ciò che è dato o assunto), conduce alla tesi (ciò che si vuole provare)."
                ]
            }
        ]
    },
    {
        id: "lezione-2-proposizioni",
        title: "Lezione 2: Logica delle Proposizioni",
        subsections: [
            {
                title: "Definizioni Fondamentali",
                content: [
                    "**Proposizione:** qualsiasi affermazione o enunciato a cui è possibile attribuire univocamente un valore di verità: **Vero (V)** oppure **Falso (F)**.",
                    "Esempio: \"Sono uno studente di Ingegneria Gestionale\" è una proposizione perché può essere solo vera o falsa.",
                    "**Connettivi logici:** operatori che permettono di costruire nuove proposizioni composte partendo da una o più proposizioni elementari."
                ]
            },
            {
                title: "Tavole della Verità",
                content: [
                    "I connettivi logici sono definiti tramite le **tavole della verità**, che mostrano il valore di verità della proposizione composta per ogni possibile combinazione dei valori delle proposizioni componenti.",
                    "**1) Negazione ($\\sim p$ o $\\neg p$):** Inverte il valore di verità.",
                    "$$ \\begin{array}{c|c} p & \\neg p \\\\ \\hline V & F \\\\ F & V \\end{array} $$",
                    "**2) Congiunzione ($p \\wedge q$, \"AND\"):** Vera solo se entrambe sono vere.",
                    "$$ \\begin{array}{cc|c} p & q & p \\wedge q \\\\ \\hline V & V & V \\\\ V & F & F \\\\ F & V & F \\\\ F & F & F \\end{array} $$",
                    "**3) Disgiunzione ($p \\vee q$, \"OR\"):** Vera se almeno una delle due è vera.",
                    "$$ \\begin{array}{cc|c} p & q & p \\vee q \\\\ \\hline V & V & V \\\\ V & F & V \\\\ F & V & V \\\\ F & F & F \\end{array} $$",
                    "**4) Implicazione ($p \\Rightarrow q$, \"SE... ALLORA\"):** Falsa solo se l'antecedente è vero e il conseguente è falso.",
                    "$$ \\begin{array}{cc|c} p & q & p \\Rightarrow q \\\\ \\hline V & V & V \\\\ V & F & F \\\\ F & V & V \\\\ F & F & V \\end{array} $$",
                    "**5) Doppia Implicazione ($p \\Leftrightarrow q$, \"SE E SOLO SE\"):** Vera se $p$ e $q$ hanno lo stesso valore di verità."
                ]
            },
            {
                title: "Equivalenze Logiche e Leggi",
                content: [
                    "Due proposizioni si dicono **logicamente equivalenti** se hanno la stessa tavola della verità.",
                    "**Equivalenza dell'Implicazione:** Un risultato fondamentale è che l'implicazione $p \\Rightarrow q$ è equivalente a $\\neg p \\vee q$.",
                    "Dimostrazione tramite tavola della verità:",
                    "$$ \\begin{array}{cc|c|c|c} p & q & \\neg p & p \\Rightarrow q & \\neg p \\vee q \\\\ \\hline V & V & F & V & V \\\\ V & F & F & F & F \\\\ F & V & V & V & V \\\\ F & F & V & V & V \\end{array} $$",
                    "Poiché le colonne di $p \\Rightarrow q$ e $\\neg p \\vee q$ coincidono, l'equivalenza è dimostrata.",
                    "Altra equivalenza importante: $(p \\Leftrightarrow q)$ equivale a $(p \\Rightarrow q) \\wedge (q \\Rightarrow p)$."
                ]
            },
            {
                title: "Tautologie, Contraddizioni e De Morgan",
                content: [
                    "**Tautologia:** una proposizione composta che risulta **sempre vera**, indipendentemente dai valori di verità delle sue componenti.",
                    "Esempio classico: $\\neg p \\vee p$ (Principio del terzo escluso).",
                    "**Contraddizione:** una proposizione che risulta **sempre falsa**.",
                    "**Leggi di De Morgan:** Regole fondamentali per negare congiunzioni e disgiunzioni:",
                    "1. La negazione di una disgiunzione è la congiunzione delle negazioni:",
                    "$$ \\neg (p \\vee q) \\Leftrightarrow \\neg p \\wedge \\neg q $$",
                    "2. La negazione di una congiunzione è la disgiunzione delle negazioni:",
                    "$$ \\neg (p \\wedge q) \\Leftrightarrow \\neg p \\vee \\neg q $$"
                ]
            }
        ]
    },
    {
        id: "lezione-3-insiemi",
        title: "Lezione 3: Simboli e Operazioni Fondamentali",
        subsections: [
            {
                title: "Insiemi e Simbologia di Base",
                content: [
                    "**Appartenenza ($\\in$):** Indica che un elemento fa parte di un insieme. Si usano lettere minuscole per gli elementi e maiuscole per gli insiemi.",
                    "Esempio: $a \\in A$ (a appartiene ad A).",
                    "**Insieme:** Una collezione ben definita di oggetti distinti. Può essere descritto per elencazione o per proprietà caratteristica.",
                    "Esempio: $A=\\{3,4,7\\}$ è uguale a $\\{3,7,4\\}$ (l'ordine non conta)."
                ]
            },
            {
                title: "Insiemi Numerici Fondamentali",
                content: [
                    "**$\\mathbb{N}$ (Numeri Naturali):** $\\{0, 1, 2, 3...\\} = \\{n \\in \\mathbb{Z} | n \\ge 0\\}$",
                    "**$\\mathbb{Z}$ (Numeri Interi):** $\\{..., -2, -1, 0, 1, 2, ...\\}$",
                    "**$\\mathbb{Q}$ (Numeri Razionali):** Numeri esprimibili come frazione $m/n$ con $m,n \\in \\mathbb{Z}, n \\neq 0$.",
                    "**$\\mathbb{R}$ (Numeri Reali):** Include razionali e irrazionali (numeri con cifre decimali infinite non periodiche, come $\\pi$ o $\\sqrt{2}$).",
                    "**$\\mathbb{C}$ (Numeri Complessi):** Estensione dei reali che include l'unità immaginaria $i$ tale che $i^2 = -1$.",
                    "**$\\emptyset$ (Insieme Vuoto):** L'insieme privo di elementi."
                ]
            },
            {
                title: "Relazioni tra Insiemi e Quantificatori",
                content: [
                    "**Quantificatori Logici:**",
                    "*   **Universale ($\\forall$):** \"Per ogni\" o \"per tutti\".",
                    "*   **Esistenziale ($\\exists$):** \"Esiste almeno un\".",
                    "**Inclusione ($A \\subseteq B$):** Si dice che $A$ è contenuto in $B$ se ogni elemento di $A$ è anche elemento di $B$.",
                    "$$ A \\subseteq B \\iff (\\forall x \\in U) (x \\in A \\Rightarrow x \in B) $$",
                    "**Uguaglianza ($A = B$):** Due insiemi sono uguali se contengono esattamente gli stessi elementi.",
                    "$$ A = B \iff (A \subseteq B) \\wedge (B \subseteq A) $$"
                ]
            },
            {
                title: "Operazioni tra Insiemi",
                content: [
                    "Dati due insiemi $A, B$ contenuti in un universo $U$:",
                    "**1. Unione ($A \\cup B$):** L'insieme degli elementi che appartengono ad $A$ **oppure** a $B$.",
                    "$$ A \\cup B = \\{y \\in U \\mid y \\in A \\vee y \\in B\\} $$",
                    "**2. Intersezione ($A \\cap B$):** L'insieme degli elementi che appartengono **sia** ad $A$ **che** a $B$.",
                    "$$ A \\cap B = \\{z \\in U \\mid z \\in A \\wedge z \\in B\\} $$",
                    "**Nota:** Se $A \\cap B = \\emptyset$, gli insiemi si dicono **disgiunti**.",
                    "**3. Differenza ($A \\setminus B$):** L'insieme degli elementi che appartengono ad $A$ ma **non** a $B$.",
                    "$$ A \\setminus B = \\{x \\in U \\mid x \\in A \\wedge x \\notin B\\} $$",
                    "**4. Complementare ($C_U(A)$ o $\\bar{A}$):** Tutti gli elementi di $U$ che non appartengono ad $A$ (equivalente a $U \\setminus A$).",
                    "**5. Prodotto Cartesiano ($A \\times B$):** L'insieme di tutte le coppie ordinate $(a,b)$ con $a \\in A$ e $b \\in B$.",
                    "$$ A \\times B = \\{(a,b) \\mid a \\in A, b \\in B\\} $$"
                ]
            },
            {
                title: "Esempi Pratici",
                content: [
                    "Siano $A=\\{5, 8, 9, 12, 16\\}$ e $B=\\{5, 8, 24\\}$.",
                    "**Unione:** $A \\cup B = \\{5, 8, 9, 12, 16, 24\\}$",
                    "**Intersezione:** $A \\cap B = \\{5, 8\\}$",
                    "**Differenza ($A \\setminus B$):** $\\{9, 12, 16\\}$ (elementi solo in A)",
                    "**Differenza ($B \\setminus A$):** $\\{24\\}$ (elementi solo in B)"
                ]
            }
        ]
    },
    {
        id: "lezione-4-completezza",
        title: "Lezione 4: Insiemi Numerici e Completezza",
        subsections: [
            {
                title: "Insiemi $\\mathbb{Q}$ e $\\mathbb{R}$",
                content: [
                    "**Numeri Razionali ($\\mathbb{Q}$):** Insieme dei numeri esprimibili come rapporto tra interi.",
                    "$$ \\mathbb{Q} = \\left\\{\\frac{n}{m} \\mid n, m \\in \\mathbb{Z}, m \\neq 0\\right\\} $$",
                    "Un numero razionale, scritto in forma decimale, ha un numero finito di cifre oppure infinite cifre che si ripetono periodicamente.",
                    "**Numeri Irrazionali ($\\mathbb{R} \\setminus \\mathbb{Q}$):** Numeri reali che non sono razionali (es. $\\pi, \\sqrt{2}$). Hanno infinite cifre decimali non periodiche.",
                    "**Gerarchia degli insiemi:**",
                    "$$ \\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R} $$",
                    "**Proprietà di Densità:** $\\mathbb{Q}$ è denso in $\\mathbb{R}$.",
                    "Cioè: Siano $x, y \\in \\mathbb{R}$ con $x < y$, esistono **infiniti** numeri razionali $z \\in \\mathbb{Q}$ tali che:",
                    "$$ x < z < y $$"
                ]
            },
            {
                title: "Maggioranti, Minoranti ed Estremi",
                content: [
                    "Sia $X = \\mathbb{R}$ (o $\\mathbb{Q}$) e sia $E \\subset X$. Diciamo che $E$ è:",
                    "*   **Limitato superiormente:** se esiste $M \\in X$ tale che $\\forall x \\in E, x \\le M$. $M$ si dice **maggiorante**.",
                    "*   **Limitato inferiormente:** se esiste $m \\in X$ tale che $\\forall x \\in E, x \\ge m$. $m$ si dice **minorante**.",
                    "*   **Limitato:** se è limitato sia superiormente che inferiormente.",
                    "**Massimo ($max(E)$):** Un elemento $M$ è il massimo di $E$ se:",
                    "1.  $M \\in E$ (appartiene all'insieme)",
                    "2.  $M$ è un maggiorante di $E$ ($\\forall x \\in E, x \\le M$)",
                    "Se esiste, il massimo è **unico**.",
                    "**Minimo ($min(E)$):** Un elemento $m$ è il minimo di $E$ se:",
                    "1.  $m \\in E$ (appartiene all'insieme)",
                    "2.  $m$ è un minorante di $E$ ($\\forall x \\in E, x \\ge m$)",
                    "Se esiste, il minimo è **unico**."
                ]
            },
            {
                title: "Estremo Superiore e Inferiore",
                content: [
                    "Spesso un insieme limitato non ha massimo (es. l'intervallo $(0, 1)$ non ha massimo perché $1 \\notin (0,1)$). Introduciamo quindi concetti più generali.",
                    "**Estremo Superiore ($sup(E)$):** È il **minimo dei maggioranti**.",
                    "Si dice che $s = sup(E)$ se:",
                    "1.  $s$ è un maggiorante di $E$ ($\\forall x \\in E, x \\le s$).",
                    "2.  Tra tutti i maggioranti, $s$ è il più piccolo (cioè $\\forall \\epsilon > 0$, $s - \\epsilon$ non è più un maggiorante).",
                    "**Estremo Inferiore ($inf(E)$):** È il **massimo dei minoranti**.",
                    "Si dice che $i = inf(E)$ se:",
                    "1.  $i$ è un minorante di $E$ ($\\forall x \\in E, x \\ge i$).",
                    "2.  Tra tutti i minoranti, $i$ è il più grande.",
                    "**Nota:** $sup(E)$ e $inf(E)$ **non necessariamente appartengono** all'insieme $E$.",
                    "*   Se $sup(E) \\in E$, allora $sup(E) = max(E)$.",
                    "*   Se $inf(E) \\in E$, allora $inf(E) = min(E)$."
                ]
            },
            {
                title: "Assioma di Completezza ed Esempi",
                content: [
                    "**Assioma di Completezza:** Ogni sottoinsieme non vuoto di $\\mathbb{R}$ limitato superiormente ammette estremo superiore in $\\mathbb{R}$.",
                    "*(Questo assioma distingue $\\mathbb{R}$ da $\\mathbb{Q}$. In $\\mathbb{Q}$ possono esserci insiemi limitati senza sup razionale, es. $\\{x \\in \\mathbb{Q} \\mid x^2 < 2\\}$ ha sup $\\sqrt{2} \\notin \\mathbb{Q}$)*.",
                    "**Esempi:**",
                    "*   $E = [-2, 1]$. $max=1, min=-2$. Quindi $sup=1, inf=-2$.",
                    "*   $E = (-\\infty, 3)$. Limitato superiormente. $sup=3$. Non ha massimo ($3 \\notin E$).",
                    "*   $E = \\{x \\in \\mathbb{R} \\mid x^3 \\ge 27\\} = [3, +\\infty)$. $min=3, inf=3$. Illimitato superiormente ($sup=+\\infty$).",
                    "*   $E = \\{1, 1/2, 1/3, ..., 1/n\\}$. $max=1, sup=1$. $inf=0$. Non ha minimo ($0 \\notin E$).",
                    "*   $E = \\{x \\in \\mathbb{Q} \\mid x^2 < 2\\}$. In $\\mathbb{R}$, $sup=\\sqrt{2}$. In $\\mathbb{Q}$, non esiste sup (perché $\\sqrt{2}$ è irrazionale)."
                ]
            }
        ]
    },
    {
        id: "lezione-5-induzione",
        title: "Lezione 5: Induzione, Sommatorie e Coefficienti Binomiali",
        subsections: [
            {
                title: "Principio di Induzione",
                content: [
                    "Il **Principio di Induzione** è una tecnica di dimostrazione fondamentale per proposizioni $P(n)$ che dipendono da un numero naturale $n$.",
                    "**Schema di dimostrazione:**",
                    "1.  **Base:** Verificare che $P(n_0)$ sia vera (di solito $n_0 = 0$ o $1$).",
                    "2.  **Passo Induttivo:** Assumendo che $P(n)$ sia vera (**Ipotesi Induttiva**), dimostrare che $P(n+1)$ è vera.",
                    "Se entrambe le condizioni sono soddisfatte, allora $P(n)$ è vera per ogni $n \\ge n_0$."
                ]
            },
            {
                title: "Esempi di Induzione",
                content: [
                    "**1. Disuguaglianza di Bernoulli:** $\\forall n \\in \\mathbb{N}, x \\in \\mathbb{R}, x \\ge -1$, vale $(1+x)^n \\ge 1+nx$.",
                    "*   **Base ($n=0$):** $(1+x)^0 \\ge 1+0 \\Rightarrow 1 \\ge 1$ (Vero).",
                    "*   **Induzione:** Ipotesi $(1+x)^n \\ge 1+nx$. Tesi $(1+x)^{n+1} \\ge 1+(n+1)x$.",
                    "$$ (1+x)^{n+1} = (1+x)^n(1+x) \\ge (1+nx)(1+x) = 1+x+nx+nx^2 $$",
                    "$$ = 1+(n+1)x+nx^2 \\ge 1+(n+1)x $$",
                    "(poiché $nx^2 \\ge 0$).",
                    "**2. Somma dei primi $n$ interi:** $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$",
                    "*   **Base ($n=1$):** $1 = \\frac{1(2)}{2} = 1$ (Vero).",
                    "*   **Passo:** Dimostrare per $n+1$: $\\sum_{k=1}^{n+1} k = \\frac{(n+1)(n+2)}{2}$.",
                    "$$ \\sum_{k=1}^{n+1} k = \\sum_{k=1}^{n} k + (n+1) = \\frac{n(n+1)}{2} + (n+1) = (n+1)\\left(\\frac{n}{2} + 1\\right) = \\frac{(n+1)(n+2)}{2} $$"
                ]
            },
            {
                title: "Sommatorie",
                content: [
                    "**Definizione:** $\\sum_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n$",
                    "**Proprietà:**",
                    "*   $\\sum c \\cdot a_k = c \\sum a_k$ (**Lineare**)",
                    "*   $\\sum_{k=1}^{n} a_{k-1} = \\sum_{j=0}^{n-1} a_j$ (**Cambio di indice**)",
                    "**Nota:** Il prodotto delle somme NON è la somma dei prodotti ($\\sum a_k \\cdot \\sum b_k \\neq \\sum a_k b_k$).",
                    "**Esempio di Calcolo ($n=5, a_k = 1/2^{k-1}$):**",
                    "$$ \\sum_{k=1}^{5} \\frac{1}{2^{k-1}} = 1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} = \\frac{16+8+4+2+1}{16} = \\frac{31}{16} $$"
                ]
            },
            {
                title: "Coefficiente Binomiale",
                content: [
                    "Dati $n, k \\in \\mathbb{N}$ con $0 \\le k \\le n$, si definisce:",
                    "$$ \\binom{n}{k} = \\frac{n!}{k!(n-k)!} $$",
                    "dove $n! = n(n-1)...(1)$ è il fattoriale ($0! = 1$).",
                    "**Proprietà fondamentali:**",
                    "1.  $\\binom{n}{0} = 1$ e $\\binom{n}{n} = 1$",
                    "2.  **Simmetria:** $\\binom{n}{k} = \\binom{n}{n-k}$",
                    "3.  **Identità di Pascal:** $\\binom{n}{k-1} + \\binom{n}{k} = \\binom{n+1}{k}$",
                    "**Esempi:**",
                    "*   $\\binom{5}{2} = \\frac{5 \\cdot 4}{2 \\cdot 1} = 10$",
                    "*   $\\binom{116}{113} = \\binom{116}{3} = \\frac{116 \\cdot 115 \\cdot 114}{3!} = 253460$"
                ]
            }
        ]
    },
    {
        id: "lezione-6-newton-complessi",
        title: "Lezione 6: Binomio di Newton e Numeri Complessi",
        subsections: [
            {
                title: "Formula del Binomio di Newton",
                content: [
                    "Per ogni $n \\ge 1$ e per ogni coppia di numeri reali $a, b$, vale la seguente uguaglianza:",
                    "$$ (a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k $$",
                    "Questa formula permette di sviluppare la potenza $n$-esima di un binomio.",
                    "**Dimostrazione (Induzione su n):**",
                    "Si basa sull'identità di Pascal: $\\binom{n}{k} + \\binom{n}{k-1} = \\binom{n+1}{k}$.",
                    "**Esempio:** Calcolare il coefficiente di $y^5$ nello sviluppo di $(2x - y)^5$.",
                    "Il termine generale è $\\binom{5}{k} (2x)^{5-k} (-y)^k$. Per avere $y^5$, devo scegliere $k=5$.",
                    "$$ \\binom{5}{5} (2x)^0 (-y)^5 = 1 \\cdot 1 \\cdot (-1)^5 y^5 = -y^5 $$"
                ]
            },
            {
                title: "Insieme dei Numeri Complessi ($\\mathbb{C}$)",
                content: [
                    "**Motivazione:** Equazioni come $x^2 = -1$ non hanno soluzioni in $\\mathbb{R}$. È necessario estendere i numeri reali.",
                    "**Definizione:** L'insieme $\\mathbb{C}$ è definito come $\\mathbb{R}^2 = \\{(a,b) \\mid a,b \\in \\mathbb{R}\\}$ dotato delle operazioni:",
                    "1.  **Somma:** $(a,b) + (c,d) = (a+c, b+d)$",
                    "2.  **Prodotto:** $(a,b) \\cdot (c,d) = (ac - bd, ad + bc)$",
                    "L'elemento $(0,0)$ è neutro per la somma, $(1,0)$ è neutro per il prodotto.",
                    "L'insieme $\\mathbb{R}$ è identificato con il sottoinsieme $\\{(a,0) \\mid a \\in \\mathbb{R}\\} \\subset \\mathbb{C}$."
                ]
            },
            {
                title: "Forma Algebrica",
                content: [
                    "Si definisce l'**Unità Immaginaria** $i = (0,1)$.",
                    "Proprietà fondamentale: **$i^2 = -1$**.",
                    "Ogni numero complesso $z = (a,b)$ può essere scritto in **forma algebrica**:",
                    "$$ z = a + ib $$",
                    "Dove:",
                    "*   $a = Re(z)$ è la **Parte Reale**.",
                    "*   $b = Im(z)$ è la **Parte Immaginaria**.",
                    "**Operazioni in forma algebrica:**",
                    "Siano $z_1 = a+ib$ e $z_2 = c+id$.",
                    "*   **Somma:** $z_1 + z_2 = (a+c) + i(b+d)$",
                    "*   **Prodotto:** $z_1 \\cdot z_2 = (ac-bd) + i(ad+bc)$",
                    "*   **Rapporto:** $\\frac{z_1}{z_2} = \\frac{z_1 \\cdot \\bar{z}_2}{z_2 \\cdot \\bar{z}_2} = \\frac{ac+bd}{c^2+d^2} + i\\frac{bc-ad}{c^2+d^2}$"
                ]
            },
            {
                title: "Proprietà di Re(z) e Im(z)",
                content: [
                    "Per ogni $z_1, z_2 \\in \\mathbb{C}$ e $\\alpha \\in \\mathbb{R}$:",
                    "1.  $Re(z_1 + z_2) = Re(z_1) + Re(z_2)$",
                    "2.  $Im(z_1 + z_2) = Im(z_1) + Im(z_2)$",
                    "3.  $Re(\\alpha z) = \\alpha Re(z)$ e $Im(\\alpha z) = \\alpha Im(z)$",
                    "**Uguaglianza:** Due numeri complessi sono uguali se hanno stessa parte reale E stessa parte immaginaria."
                ]
            },
            {
                title: "Esercizi Svolti",
                content: [
                    "**1. Semplificare $z = \\frac{\\sqrt{3}i-2}{\\sqrt{3}i+2}$:**",
                    "Moltiplico numeratore e denominatore per il coniugato del denominatore ($-2 - \\sqrt{3}i = -(2+\\sqrt{3}i)$ oppure direttamente $\\sqrt{3}i-2$):",
                    "Risultato: $z = -\\frac{1}{7} + \\frac{4\\sqrt{3}}{7}i$",
                    "**2. Calcolo potenza:** $k = \\frac{(1+2i)^4}{i}$",
                    "Calculando $(1+2i)^2 = 1 - 4 + 4i = -3+4i$.",
                    "Quindi $(1+2i)^4 = (-3+4i)^2 = 9 - 16 - 24i = -7 - 24i$.",
                    "Dividendo per $i$ (che equivale a moltiplicare per $-i$):",
                    "$$ k = (-7-24i)(-i) = 7i + 24i^2 = -24 + 7i $$"
                ]
            }
        ]
    },
    {
        id: "lezione-7-piano-gauss-modulo",
        title: "Lezione 7: Piano Cartesiano e Modulo",
        subsections: [
            {
                title: "Piano di Gauss e Coniugato",
                content: [
                    "Poiché $\\mathbb{C} \\cong \\mathbb{R}^2$, possiamo rappresentare ogni numero complesso $z = a+ib$ come un punto $P(a,b)$ nel **Piano Cartesiano (di Gauss)**.",
                    "L'asse $x$ è l'**Asse Reale**, l'asse $y$ è l'**Asse Immaginario**.",
                    "**Coniugato ($\\bar{z}$):** Dato $z = a+ib$, il suo coniugato è $\\bar{z} = a-ib$.",
                    "Geometricamente, $\\bar{z}$ è il simmetrico di $z$ rispetto all'asse reale.",
                    "**Proprietà del Coniugato:**",
                    "1.  $\\overline{z \\pm w} = \\overline{z} \\pm \\overline{w}$",
                    "2.  $\\overline{z \\cdot w} = \\overline{z} \\cdot \\overline{w}$",
                    "3.  $\\overline{\\left(\\frac{z}{w}\\right)} = \\frac{\\overline{z}}{\\overline{w}}$",
                    "4.  $z \\cdot \\overline{z} = a^2 + b^2$ (Numero reale non negativo!)",
                    "5.  $Re(z) = \\frac{z + \\overline{z}}{2}$, $Im(z) = \\frac{z - \\overline{z}}{2i}$"
                ]
            },
            {
                title: "Modulo di un Numero Complesso",
                content: [
                    "**Definizione:** Il modulo $|z|$ è la distanza del punto $z$ dall'origine.",
                    "Se $z = a+ib$, allora:",
                    "$$ |z| = \\sqrt{a^2 + b^2} = \\sqrt{z \\cdot \\overline{z}} $$",
                    "**Proprietà del Modulo:**",
                    "1.  $|z| \\ge 0$ e $|z|=0 \\iff z=0$.",
                    "2.  $|z| = |\\overline{z}|$.",
                    "3.  $|z \\cdot w| = |z| \\cdot |w|$.",
                    "4.  $|\\frac{z}{w}| = \\frac{|z|}{|w|}$ (se $w \\neq 0$).",
                    "5.  **Disuguaglianza Triangolare:** $|z+w| \\le |z| + |w|$.",
                    "6.  **Disuguaglianza Triangolare Inversa:** $|z-w| \\ge ||z| - |w||$."
                ]
            },
            {
                title: "Esercizio Svolto",
                content: [
                    "**Risolvere $z^2 + \\overline{z} = 0$**",
                    "Pongo $z = x+iy$. L'equazione diventa:",
                    "$(x+iy)^2 + (x-iy) = 0 \\Rightarrow x^2 - y^2 + 2ixy + x - iy = 0$",
                    "Separando parte reale e immaginaria:",
                    "$$ \\begin{cases} x^2 - y^2 + x = 0 \\\\ 2xy - y = 0 \\rightarrow y(2x-1)=0 \\end{cases} $$",
                    "Dalla seconda equazione: $y=0$ oppure $x=1/2$.",
                    "*   Se $y=0$: $x^2+x=0 \\Rightarrow x=0, x=-1$. Soluzioni: $z_1=0, z_2=-1$.",
                    "*   Se $x=1/2$: $1/4 - y^2 + 1/2 = 0 \\Rightarrow y^2 = 3/4 \\Rightarrow y = \\pm \\frac{\sqrt{3}}{2}$.",
                    "Soluzioni: $z_3 = \\frac{1}{2} + i\\frac{\sqrt{3}}{2}, z_4 = \\frac{1}{2} - i\\frac{\sqrt{3}}{2}$."
                ]
            }
        ]
    }
];
