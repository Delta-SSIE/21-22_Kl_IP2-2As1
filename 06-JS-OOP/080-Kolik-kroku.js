// // pomalé řešení, může selhávat jako "možná nekonečné"
// function zaNKroku(objekt, n) {
//     let now = objekt;
//     for (let i = 0; i < n; i++) {
//         now = now.dalsi;
//     }
//     return now;
// }

// rychlé řešení
function zaNKroku(objekt, n) {
    
    const prvni = objekt; //uložím si první
    
    let arr = []; //připravím si pole
    do {
        arr.push(objekt); // vložím postupně všechny do pole
        objekt = objekt.dalsi;
    } while (objekt !== prvni); // dokud se nevrátím na první

    n %= arr.length; //vezmu jen zbytek po dělení n délkou pole,
    // tedy počtem objektů v cyklu
    
    return arr[n]; //vezmu prvek na "zbytkové" pozici
}

// ukázková data
let nedele =  { nazev: "neděle",  dalsi: null    };
let sobota =  { nazev: "sobota",  dalsi: nedele  };
let patek =   { nazev: "pátek",   dalsi: sobota  };
let ctvrtek = { nazev: "čtvrtek", dalsi: patek   };
let streda =  { nazev: "středa",  dalsi: ctvrtek };
let utery =   { nazev: "úterý",   dalsi: streda  };
let pondeli = { nazev: "pondělí", dalsi: utery   };
nedele.dalsi = pondeli;


//něco na vyzkoušení
console.log(zaNKroku(ctvrtek, 1).nazev); // pátek
console.log(zaNKroku(ctvrtek, 7).nazev); // čtvrtek
console.log(zaNKroku(nedele, 0).nazev); // neděle
console.log(zaNKroku(streda, 5000000).nazev); // pondělí
