const wait = 200; //milliseconds for next dice

let i = 0;
let timer = null;

function nextDice() {
  //najdi prvek, do kterého se bude umisovat
  const diceImages = document.querySelectorAll("#dice img")
  const targetImage = diceImages[i]
  
  //vymysli náhodné èíslo
  const newNumber = Math.floor(Math.random() * 6) + 1
  
  //vlož do prvku správný obrázek
  targetImage.src = `img/${newNumber}.svg`
  
  //posuò ukazatel
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
