
//sem p�ijde v� k�d

function aktivujZalozku(idZalozky, idKarty) {
  //kdy� se klikne na z�lo�ku
  document.getElementById(idZalozky).addEventListener("click", function(){
    //1 v�echny z�lo�ky nastavit jako neaktivn�
    document.querySelectorAll("#zalozky > li")
      .forEach(x => x.classList.remove("aktivni"))
    
    //2 tuto z�lo�ku nastavit jako aktivn�
    document.getElementById(idZalozky).classList.add("aktivni");  
    
    //3 v�echny taby nastavit jako neaktivn�
    document.querySelectorAll("#karty > div")
      .forEach(x => x.classList.remove("aktivni"));    
    
    //4 spr�vn� tab nastavit jako aktivn�  
    document.getElementById(idKarty).classList.add("aktivni");  
    
  });
}

const definice = [
  { zalozka:"tab-1-handle", karta:"tab-1" },
  { zalozka:"tab-2-handle", karta:"tab-2" },
  { zalozka:"tab-3-handle", karta:"tab-3" },
];

definice.forEach(x => aktivujZalozku(x.zalozka, x.karta))  
