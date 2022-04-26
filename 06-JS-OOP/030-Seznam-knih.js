// Vytvořte pole objektů (alespoň tří) s názvem knihy, 
// kde každý objekt popisuje knihu a má vlastnosti 
// * nazev (řetězec)
// * autor (řetězec) 
// * precteno (bool, znamená, jestli už jste ji četli)

let knihy = [
    {
        nazev: "Hobit",
        autor: " J.R.R. Tolkien",
        precteno: true
    },
    {
        nazev: "O letadélku Káněti",
        autor: " Josef Říha",
        precteno: false
    },
    {
        nazev: "Příručka Delťáka",
        autor: " Jiří Formánek",
        precteno: false
    }
]



// Vytvořte funkci popisKnihy, která obdrží vaše pole 
// a ke každé knížce vrátí řetězec s popisem, např. 
// "Hobit, autor J.R.R. Tolkien"

function popisKnihy(kniha){
    return `${kniha.nazev}, autor ${kniha.autor}`;
}


// Až bude předchozí chodit, vytovřte kopii předchozí 
// funkce, nazvěte ji popisKnihy2, a v ní s pomocí 
// if/else změňte výpis tak, aby říkal buďto, 'Už jsem 
// četl knihu "Hobit", jejím autorem je  J.R.R. Tolkien', 
// nebo 'Chci si přečíst knihu "Hobit", jejím autorem je  
// J.R.R. Tolkien.' (včetně vnitřních uvozovek kolem 
// názvu knihy).

function popisKnihy2(kniha){
    let text = kniha.precteno ? 'Už jsem četl knihu ' : 'Chci si přečíst knihu ';
    text += `"${kniha.nazev}", jejím autorem je ${kniha.autor}.`;
    return text
}


// Na konci projděte pole knihy cyklem a v něm předejte 
// každou knihu funkci popisKnihu2 a výpis zobrazte na 
// konzoli. (Nelze automaticky testovat)

for (let kniha of knihy) {
    console.log(popisKnihy2(kniha));
}