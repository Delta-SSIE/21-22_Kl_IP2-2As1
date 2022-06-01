
//sem pøijde váš kód

function aktivujZalozku(idZalozky, idKarty) {
  //když se klikne na záložku
  document.getElementById(idZalozky).addEventListener("click", function(){
    //1 všechny záložky nastavit jako neaktivní
    document.querySelectorAll("#zalozky > li")
      .forEach(x => x.classList.remove("aktivni"))
    
    //2 tuto záložku nastavit jako aktivní
    document.getElementById(idZalozky).classList.add("aktivni");  
    
    //3 všechny taby nastavit jako neaktivní
    document.querySelectorAll("#karty > div")
      .forEach(x => x.classList.remove("aktivni"));    
    
    //4 správný tab nastavit jako aktivní  
    document.getElementById(idKarty).classList.add("aktivni");  
    
  });
}

const definice = [
  { zalozka:"tab-1-handle", karta:"tab-1" },
  { zalozka:"tab-2-handle", karta:"tab-2" },
  { zalozka:"tab-3-handle", karta:"tab-3" },
];

definice.forEach(x => aktivujZalozku(x.zalozka, x.karta))  
