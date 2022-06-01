const cols = 15;
const rows = 15;
const size = 20;

const clickHandler = function() {
  this.style.backgroundColor =     document.getElementById("colorSelector").value;
};

const grid = document.getElementById("container");
grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
grid.style.width = (cols * ( size + 1) - 1) + "px";
grid.style.height = (rows * ( size + 1) - 1) + "px";

for (let x = 0; x < cols; x++) {
  for (let y = 0; y < rows; y++) {
    let element = document.createElement("div");
    
    if (x==0 || y == 0 || x == cols - 1 || y == cols - 1) {
        element.style.background = "black";
    } else {
        element.style.background = "white";      
        element.addEventListener("click", clickHandler);
    }
    
    grid.appendChild(element);
  }
}