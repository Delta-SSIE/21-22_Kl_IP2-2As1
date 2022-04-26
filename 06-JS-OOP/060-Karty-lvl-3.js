// sem přijdou deklarace objektů z předchozí úlohy


let karta7 = {
    nazevKarty: "sedmička",
    nizsiKarta: null
};
let karta8 = {
    nazevKarty: "osmička",
    nizsiKarta: karta7,
};
karta7.vyssiKarta = karta8;
let karta9 = {
    nazevKarty: "devítka",
    nizsiKarta: karta8,
};
karta8.vyssiKarta = karta9;
let karta10 = {
    nazevKarty: "desítka",
    nizsiKarta: karta9,
};
karta9.vyssiKarta = karta10;
let kartaSpodek = {
    nazevKarty: "spodek",
    nizsiKarta: karta10,
};
karta10.vyssiKarta = kartaSpodek;
let kartaSvrsek = {
    nazevKarty: "svršek",
    nizsiKarta: kartaSpodek,
};
kartaSpodek.vyssiKarta = kartaSvrsek;
let kartaKral = {
    nazevKarty: "král",
    nizsiKarta: kartaSvrsek,
};
kartaSvrsek.vyssiKarta = kartaKral;
let kartaEso = {
    nazevKarty: "eso",
    nizsiKarta: kartaKral,
    vyssiKarta: null
};
kartaKral.vyssiKarta = kartaEso;


/** 
 * vrací 0, pokud jsou karty stejné
 * vrací 1, pokud je první vyšší než druhá
 * vrací -1, pokud je druhá vyšší než první
*/
function porovnejKarty(prvniKarta, druhaKarta) {
    if (prvniKarta.nazevKarty === druhaKarta.nazevKarty) return 0;

    let karta = prvniKarta; //vytvořím si "procházecí" (iterační) proměnnou
    while (karta.vyssiKarta) { //cyklus poběží, dokud má iterační karta následovníka
        karta = karta.vyssiKarta; //posunu se na následovníka
        if (karta.nazevKarty === druhaKarta.nazevKarty) return -1;
        //druhá karta je jeden z následovníků první, tedy vyšší než první
    }

    return 1; //pokud jsou oba objekty v pořádku, zbývá už jen možnost, že je druhá nižší;
}

// a vyzkoušíme:
console.log(porovnejKarty(karta7, kartaKral)); // -1
console.log(porovnejKarty(kartaEso, karta9)); // 1
console.log(porovnejKarty(karta10, karta10)); // 0