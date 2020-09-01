// SOAL NO 1
const pi= 3.14;

// Rumus luas lingkaran L = π.r.r
let luas_lingkaran = (jari_jari) => {
  return  pi * jari_jari * jari_jari;
}

// Rumus keliling lingkaran K = 2.π.r
let keliling_lingkaran = (jari_jari) => {
  return 2 * pi * jari_jari;
}

console.log(luas_lingkaran(70));
console.log(keliling_lingkaran(17));
// -----------------------------------------

// SOAL NO 2
let kalimat ="";

const str_kalimat = (...kata) => {
	for(let i=0; i < kata.length; i++){
		kalimat += `${kata[i]} `
	}
}
str_kalimat("saya","adalah","seorang","frontend","developer");
console.log(kalimat);

// -----------------------------------------

// SOAL NO 3
const funLiteral = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(`${firstName} ${lastName}`)
        }
    };
}
funLiteral('William', 'Imoh').fullName();
// -----------------------------------------

// SOAL NO 4
const newObject = {
	firstName: "Harry",
	lastName: "Potter Holt",
	destination: "Hogwarts React Conf",
	occupation: "Deve-wizard Avocado",
	spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName, lastName, destination, occupation);
// -----------------------------------------

// SOAL NO 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

//Driver Code
console.log(combined)
// -----------------------------------------