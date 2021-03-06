// SOAL NO 1

class Animal {
    constructor(name, legs = 4 ) {
        this.name = name
        this.legs = legs
        this.cold_blooded = false
    }
}

// Release 1
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Frog extends Animal {
    constructor(name, legs) {
        super(name, legs);
    }
    jump() {
        console.log('“hop hop”') 
    }
}

class Ape extends Animal {
    constructor(name, legs = 2) {
        super(name, legs);
    }
    yell() {
        console.log('“Auooo” ') 
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

// --------------------------------

// SOAL NO 2
class Clock {
	constructor({template}){
		this.template = template
	}
    render = () => {
		var date = new Date();

		var hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		var mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		var secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		var output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);

		console.log(output);
	}

    stop() {
		clearInterval(this.timer);
    };

    start() {
		this.render();
		this.timer = setInterval(this.render, 1000);
    };
}

var clock = new Clock({template: 'h:m:s'});
clock.start();
// --------------------------------