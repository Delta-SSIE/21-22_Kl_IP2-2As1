// sem přijdou deklarace objektů z předchozí úlohy

let karta7 = {
    nazevKarty: "sedmička",
    hodnota: 1
};

let karta8 = {
    nazevKarty: "osmička",
    nizsiKarta: karta7,
    hodnota: 2
};
karta7.vyssiKarta = karta8;

let karta9 = {
    nazevKarty: "devítka",
    nizsiKarta: karta8,
    hodnota: 3
};
karta8.vyssiKarta = karta9;

let karta10 = {
    nazevKarty: "desítka",
    nizsiKarta: karta9,
    hodnota: 4
};
karta9.vyssiKarta = karta10;

let kartaSpodek = {
    nazevKarty: "spodek",
    nizsiKarta: karta10,
    hodnota: 5
};
karta10.vyssiKarta = kartaSpodek;

let kartaSvrsek = {
    nazevKarty: "svršek",
    nizsiKarta: kartaSpodek,
    hodnota: 6
};
kartaSpodek.vyssiKarta = kartaSvrsek;

let kartaKral = {
    nazevKarty: "král",
    nizsiKarta: kartaSvrsek,
    hodnota: 7
};
kartaSvrsek.vyssiKarta = kartaKral;

let kartaEso = {
    nazevKarty: "eso",
    nizsiKarta: kartaKral,
    hodnota: 8
};
kartaKral.vyssiKarta = kartaEso;


/** 
 * vrací 0, pokud jsou karty stejné
 * vrací 1, pokud je první vyšší než druhá
 * vrací -1, pokud je druhá vyšší než první
*/
function porovnejKarty(prvniKarta, druhaKarta) {
    return Math.sign(prvniKarta.hodnota - druhaKarta.hodnota);
    // sem přijde váš kód
}

// a vyzkoušíme:
console.log(porovnejKarty(karta7, kartaKral)); // -1
console.log(porovnejKarty(kartaEso, karta9)); // 1
console.log(porovnejKarty(karta10, karta10)); // 1


//pod tento řádek nezasahujte
