// 1. Vytvořte objekt karta7, který bude obsahovat položku 
//    nazevKarty, ve které bude uložena hodnota "sedmička".

let karta7 = {
    nazevKarty: "sedmička",
};

// 2. Vytvořte stejným způsobem "osmičku" (proměnná karta8) a nastavte:
//
// * Sedmičce položku vyssiKarta, která bude odkazovat na osmičku
// * Osmičce položku nizsiKarta, která bude odkazovat na sedmičku


let karta8 = {
    nazevKarty: "osmička",
    nizsiKarta: karta7
};
karta7.vyssiKarta = karta8;

// 3. Zopakujte pro zbývajících šest výšek karet. (kartaSpodek, …, kartaEso)

let karta9 = {
    nazevKarty: "devítka",
    nizsiKarta: karta8
};
karta8.vyssiKarta = karta9;

let karta10 = {
    nazevKarty: "desítka",
    nizsiKarta: karta9
};
karta9.vyssiKarta = karta10;

let kartaSpodek = {
    nazevKarty: "spodek",
    nizsiKarta: karta10
};
karta10.vyssiKarta = kartaSpodek;

let kartaSvrsek = {
    nazevKarty: "svršek",
    nizsiKarta: kartaSpodek
};
kartaSpodek.vyssiKarta = kartaSvrsek;

let kartaKral = {
    nazevKarty: "král",
    nizsiKarta: kartaSvrsek
};
kartaSvrsek.vyssiKarta = kartaKral;

let kartaEso = {
    nazevKarty: "eso",
    nizsiKarta: kartaKral
};
kartaKral.vyssiKarta = kartaEso;


// 4. Zalogujte do konzole objekt karta10. Jak se konzole 
// vypořádá se zpětným odkazem - z karty10 je odkaz na kartu9
// a z ní zase zpět? (Úkol nelze kontrolovat automaticky)

console.log(karta10);
