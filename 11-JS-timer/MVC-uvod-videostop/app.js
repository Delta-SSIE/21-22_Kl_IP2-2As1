const imgBase = 'https://koupil.delta-www.cz/IP2/videostop/';
const delay = 250;

const loss = -20;
const win = +50;

const appModel = {
    values : [1,1,1],
    nextDice : 0,
    balance : 1000
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

const balanceView = {
    element : null,
    init : function() {
        //najit element
        this.element = document.getElementById('balance')
    },
    render : function(balance) {
        this.element.textContent = balance
    }  
}

const controller = {
    timer : null,
    appModel : null,
    diceView : null,
    playBtnView : null,
    balanceView : null, 
    init : function(){
        diceView.init()
        balanceView.init()
        playBtnView.init(this)

        for (let i = 0; i < 3; i++){
            this.getNextDice();
        }

        balanceView.render(this.appModel.balance)
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
        this.evaluateDice()
        balanceView.render(this.appModel.balance)        
    },
    evaluateDice : function() {
        if (
            this.appModel.values[0] === this.appModel.values[1]
            && this.appModel.values[0] === this.appModel.values[2]
        )
            this.appModel.balance += win
        else 
            this.appModel.balance += loss
            
    },
    getNextDice : function() {
        const num = Math.floor(Math.random() * 6) + 1
        appModel.values[appModel.nextDice] = num
        appModel.nextDice++
        appModel.nextDice %= 3
        diceView.render(appModel.values)
    }

}

controller.appModel = appModel
controller.diceView = diceView
controller.playBtnView = playBtnView
controller.balanceView = balanceView
controller.init();
