class Obdelnik {
    constructor(hranaA, hranaB) {
        this.hranaA = hranaA;
        this.hranaB = hranaB;
    }
    obsah() {
        return this.hranaA * this.hranaB;
    }
    obvod() {
    return (this.hranaA + this.hranaB) * 2;
    }
    
}


// Zde vytvoření 1. instance
// nastavte jeho hrany na 4 a 5
let obdelnik1 = new Obdelnik(4, 5);


// Zde vytvoření 2. instance
// nastavte jeho hrany na 1 a 10
let obdelnik2 = new Obdelnik(1, 10);


// A nějaké testy
console.log(obdelnik1.obvod()); // ocekavame 18;
console.log(obdelnik1.obsah()); // ocekavame 20;

console.log(obdelnik2.obvod()); // ocekavame 22;
console.log(obdelnik2.obsah()); // ocekavame 10;