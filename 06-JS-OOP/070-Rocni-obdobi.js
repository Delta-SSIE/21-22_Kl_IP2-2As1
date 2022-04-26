// Třeba takto


let rocniObdobi = [];

let zima   = { nazev: "Zima" };
let podzim = { nazev: "Podzim"};
let leto   = { nazev: "Léto"};
let jaro   = { nazev: "Jaro"};

rocniObdobi.push(jaro);
rocniObdobi.push(leto);
rocniObdobi.push(podzim);
rocniObdobi.push(zima);

zima.pristiObdobi = jaro;
jaro.pristiObdobi = leto;
leto.pristiObdobi = podzim;
podzim.pristiObdobi = zima;


/* nebo takto */


// let rocniObdobi = [];

// let zima   = { nazev: "Zima" };
// let podzim = { nazev: "Podzim", pristiObdobi: zima   };
// let leto   = { nazev: "Léto",   pristiObdobi: podzim };
// let jaro   = { nazev: "Jaro",   pristiObdobi: leto   };
// zima.pristiObdobi = jaro;

// rocniObdobi.push(jaro);
// rocniObdobi.push(leto);
// rocniObdobi.push(podzim);
// rocniObdobi.push(zima);


/* a nejpřímočařejší */


// let rocniObdobi = [
// 	{nazev: "Jaro"},
// 	{nazev: "Léto"},
// 	{nazev: "Podzim"},
// 	{nazev: "Zima"},
// ];

// for ( let i = 0; i < rocniObdobi.length; i++ ) {
// 	rocniObdobi[i].pristiObdobi = rocniObdobi[(i + 1) % 4];
// }

console.log(rocniObdobi);


// Vytvořte funkci predchoziObdobi(obdobi), která obdrží předané 
// nějaké období a vrátí k němu předchozí
function predchoziObdobi(obdobi) {
    return obdobi.pristiObdobi.pristiObdobi.pristiObdobi;
}


//a vyzkoušíme
console.log(predchoziObdobi(jaro).nazev); // zima
console.log(predchoziObdobi(rocniObdobi[0]).nazev); // taktéž zima ;-)
console.log(predchoziObdobi(leto).nazev); // jaro
console.log(predchoziObdobi(rocniObdobi[3]).nazev); // podzim
