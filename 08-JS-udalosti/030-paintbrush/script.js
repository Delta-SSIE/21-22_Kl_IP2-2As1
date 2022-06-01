const n = 20;
let table = document.createElement("table");

let clickHandler = function() {
  this.style.backgroundColor =     document.getElementById("colorSelector").value;
};

for (let i = 0; i < n; i++) {
  let row = document.createElement("tr");
  table.appendChild(row);
  
  for (let j = 0; j < n; j++) {
    let cell = document.createElement("td");
    
    if (i==0 || j == 0 || i == n - 1 || j == n-1) {
        cell.style.background = "black";
    } else {
      cell.addEventListener("click", clickHandler);
    }
    
    row.appendChild(cell);
  }
}

document.getElementById("container").appendChild(table);