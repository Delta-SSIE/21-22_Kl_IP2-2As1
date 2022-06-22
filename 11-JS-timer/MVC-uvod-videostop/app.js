const imgBase = 'https://koupil.delta-www.cz/IP2/videostop/';
const delay = 250;

const diceModel = {
    values : [1,1,1],
    nextDice : 0
}

const diceView = {
    diceImgs : [],
    init : function() {
        //najít kostky
        this.diceImgs = document.querySelectorAll('#dice > img')
    },
    render : function(diceValues) {
        //vykreslím na kostky hodnoty
        for (let i = 0; i < 3; i++) {
            this.diceImgs[i].src = `${imgBase}${diceValues[i]}.svg`
        }
    }
}

const playBtnView = {
    element : null,
    init : function(controller) {
        //najit element
        this.element = document.getElementById('playBtn')
        this.element.addEventListener("click", function() {controller.playStopPress()})
    },
    render : function(isPlay) {
        this.element.textContent = isPlay ? "Play" : "Stop"
    }
}

const controller = {
    timer : null,
    diceModel : null,
    diceView : null,
    playBtnView : null, 
    init : function(){
        for (let i = 0; i < 3; i++){
            this.getNextDice();
        }
    },
    playStopPress : function(){
        //zapíná - vypíná timer
        if (this.timer === null) {
            this.startGame()
        } else {
            this.stopGame()
        }
    },
    startGame : function(){
        const that = this
        this.timer = window.setInterval( function(){that.getNextDice()}, delay )
        playBtnView.render(false)
    },
    stopGame : function() {
        window.clearInterval(this.timer)
        this.timer = null
        playBtnView.render(true)
    },
    getNextDice : function() {
        const num = Math.floor(Math.random() * 6) + 1
        diceModel.values[diceModel.nextDice] = num
        diceModel.nextDice++
        diceModel.nextDice %= 3
        diceView.render(diceModel.values)
    }

}

diceView.init()
playBtnView.init(controller)

controller.diceModel = diceModel
controller.diceView = diceView
controller.playBtnView = playBtnView
controller.init();
