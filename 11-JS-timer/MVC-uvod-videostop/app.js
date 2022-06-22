const imgBase = 'https://koupil.delta-www.cz/IP2/videostop/';

const diceModel = {
    values : [0,0,0],
    nextDice : 0
}

const controller = {

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
    init : function() {

    },
    render : function() {

    }
}

diceView.init()
diceView.render([1,1,6])