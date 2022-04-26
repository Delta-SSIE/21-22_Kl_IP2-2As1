// zde deklarute proměnnou
let recept = {
    nazev: "Mojito",
    pocetPorci: 4,
    prisady: ["máta", "limetka", "cukr", "led", "bílý rum", "sodovka"]
}

// zde ji popsaným způsobem vypište (nelze kontrolovat automaticky)
console.log(recept.nazev);
console.log(recept.pocetPorci);
console.log(recept.prisady.join(", "));