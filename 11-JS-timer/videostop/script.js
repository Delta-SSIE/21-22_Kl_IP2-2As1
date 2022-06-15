const wait = 200; //milliseconds for next dice

let i = 0;
let timer = null;

function nextDice() {
  //najdi prvek, do kter�ho se bude umis�ovat
  const diceImages = document.querySelectorAll("#dice img")
  const targetImage = diceImages[i]
  
  //vymysli n�hodn� ��slo
  const newNumber = Math.floor(Math.random() * 6) + 1
  
  //vlo� do prvku spr�vn� obr�zek
  targetImage.src = `img/${newNumber}.svg`
  
  //posu� ukazatel
  i++
  i %= 3
}



function startStop() {
  const startBtn = document.getElementById('playBtn');
  if (timer === null) {
    //nejede to
    timer = window.setInterval(nextDice, wait)
    startBtn.textContent = "Stop"
    startBtn.classList.remove('btn-primary')
    startBtn.classList.add('btn-danger')
  } else {    
    window.clearInterval(timer)
    timer = null
    startBtn.textContent = "Play"
    startBtn.classList.add('btn-primary')
    startBtn.classList.remove('btn-danger')
  } 
  
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('playBtn').addEventListener('click', startStop)
});
