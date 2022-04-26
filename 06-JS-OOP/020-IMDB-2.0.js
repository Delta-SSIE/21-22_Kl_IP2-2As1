// Zde založte objekt do proměnné s názvem skvelyFilm
let skvelyFilm = {
    nazev: "The Matrix",
    delka: 150,
    obsazeni: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
}


// a zde funkce
function detailFilmu(film) {
    return `${film.nazev}, trvá ${film.delka} minut. Obsazení: ${film.obsazeni.join(", ")}.`
}


//a zkusíme ji

console.log(detailFilmu(skvelyFilm))