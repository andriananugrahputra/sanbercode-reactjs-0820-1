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

// --------------------------------

// SOAL NO 3

// --------------------------------

// SOAL NO 4

// --------------------------------

// SOAL NO 5

// --------------------------------