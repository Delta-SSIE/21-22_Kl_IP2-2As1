// Create a function that will fill the #box with selected color

function colorChange(){
  let colorInput = document.getElementById("color");
  let color = colorInput.value;
  let box = document.getElementById("box");
  box.style.backgroundColor = color;
  
}