
class Obdelnik {
    constructor() {
        this.hranaA = 0;
        this.hranaB = 0;
    }
    obsah() {
        return this.hranaA * this.hranaB;
    }
    obvod() {
    return (this.hranaA + this.hranaB) * 2;
    }
    
}

// Zde vytvoření 1. instance
let obdelnik1 = new Obdelnik();
// nastavte jeho hrany na 4 a 5
obdelnik1.hranaA = 4;
obdelnik1.hranaB = 5;

// Zde vytvoření 2. instance
let obdelnik2 = new Obdelnik(); 
// nastavte jeho hrany na 1 a 10
obdelnik2.hranaA = 1;
obdelnik2.hranaB = 10;


// A nějaké testy
console.log(obdelnik1.obvod()); // ocekavame 18;
console.log(obdelnik1.obsah()); // ocekavame 20;

console.log(obdelnik2.obvod()); // ocekavame 22;
console.log(obdelnik2.obsah()); // ocekavame 10;