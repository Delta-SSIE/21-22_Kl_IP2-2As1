class Kbelik {

    constructor(maxObjem){
    	this.maxObjem = maxObjem;
	    this.objem = 0;
    }
	napln() {
		this.objem = this.maxObjem;
	}
	vylej() {
		this.objem = 0;
	}
	vejdeSe(objemVody) {
		return this.objem + objemVody <= this.maxObjem;
	}
	prilej(objemVody) {
		if (this.vejdeSe(objemVody) ) {
			this.objem += objemVody;
		} else {
			this.objem = this.maxObjem;
			console.log("Přelils, Jiříku. Budeš pykat!");
		}
	}
	prelejDo(druhyKbelik) {
		let prelito;
		if (druhyKbelik.vejdeSe (this.objem)) {
			prelito = this.objem;
		} else {
			prelito = druhyKbelik.maxObjem - druhyKbelik.objem;
		}
		druhyKbelik.objem += prelito;
		this.objem -= prelito;
	};
}



// a pro kontrolu
let prvniKbelik = new Kbelik(7);
console.log(prvniKbelik.objem); //ukáže 0
prvniKbelik.napln();
console.log(prvniKbelik.objem); //ukáže 7
prvniKbelik.vylej();
console.log(prvniKbelik.objem); //ukáže 0
prvniKbelik.prilej(2);
console.log(prvniKbelik.objem); //ukáže 2
prvniKbelik.prilej(3);
console.log(prvniKbelik.objem); //ukáže 5
prvniKbelik.prilej(3); //vypíše varování o přetečení
console.log(prvniKbelik.objem); //ukáže 7
prvniKbelik.vylej();


let druhyKbelik = new Kbelik(4);
druhyKbelik.napln();
druhyKbelik.prelejDo(prvniKbelik);
console.log(prvniKbelik.objem); //ukáže 4
console.log(druhyKbelik.objem); //ukáže 0
druhyKbelik.napln();
druhyKbelik.prelejDo(prvniKbelik); 
console.log(prvniKbelik.objem); //ukáže 7
console.log(druhyKbelik.objem); //ukáže 1
