let cislo = Math.floor((Math.random() * 50) + 1); 

let n = 5;

for (let i = 0; i < n; i++) {
    let tip = window.prompt("Kolik myslíš, že si myslím? (1-50)", 1);
    if (tip == cislo)
    {
        window.alert("Jsi borec, dal jsi to na " + i + ". pokus");
        break;
    }
    else if (tip > cislo && tip <= 50)
    {
        window.alert("To je moc, uber");
    }
    else if (tip > 0 && tip < cislo)
    {
        window.alert("To je málo, přidej");
    }
    else
    {
        window.alert("Tak to ne, tohleto, zkus to znova");
        i--;
    }

}