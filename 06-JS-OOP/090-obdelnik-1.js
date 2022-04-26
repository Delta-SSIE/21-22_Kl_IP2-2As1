let obdelnik = {
    hranaA: 3,
    hranaB: 7,
    obvod: function() {
        return (this.hranaA + this.hranaB) * 2;
    },
    obsah: function() {
        return this.hranaA * this.hranaB;
    }
}

//otestujeme ho
console.log(obdelnik.obvod()); // ocekavame 20;
console.log(obdelnik.obsah()); // ocekavame 21;
