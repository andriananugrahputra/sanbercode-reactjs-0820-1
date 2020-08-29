// SOAL NO 1
function halo(){
	return "Halo Sanbers!";
}
console.log(halo());
// -----------------------------

// SOAL NO 2
function kalikan(val_1, val_2) {
	return val_1 * val_2;
}

var num1 = 12;
var num2 = 4;
 
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);
// -----------------------------

// SOAL NO 3
function introduce(val_name, val_age, val_address, val_hobby) {
	var var_name = "Nama saya " + val_name;
	var var_age = ", umur saya " + val_age + " tahun,";
	var var_address = " alamat saya di " + val_address;
	var var_hobby = ", dan saya punya hobby yaitu " + val_hobby + "!";
  
	var output = var_name + var_age + var_address + var_hobby;
  
	return output;
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
// -----------------------------

// SOAL NO 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];

var name_obj = ["nama", "jenis_kelamin", "hobi", "tahun"];
var obj_peserta = {};
// var data tampung
var temp;
// pengisian object menggunakan looping for
var i;
for (i = 0; i < arrayDaftarPeserta.length; i++) {
	temp = name_obj[i];
	obj_peserta[temp] = arrayDaftarPeserta[i];
}

console.log(obj_peserta);
// -----------------------------

// SOAL NO 5
var fruits = [
	{
		nama : 'strawberry',
		warna : 'merah',
		ada_bijinya : false,
		harga : 9000
	},
	{
		nama : 'jeruk',
		warna : 'oranye',
		ada_bijinya : true,
		harga : 8000
	},
	{
		nama: 'Semangka',
		warna: 'Hijau & Merah',
		ada_bijinya : true,
		harga: 10000
	},
	{
		nama: 'Pisang',
		warna: 'Kuning',
		ada_bijinya: false,
		harga: 5000
	}
];

console.log(fruits[0]);
// -----------------------------

// SOAL NO 6
var dataFilm = [];

function add_film(val_name, val_duration, val_genre, val_year) {
	dataFilm.push({
		nama: val_name,
		durasi: val_duration,
		genre: val_genre,
		tahun: val_year
	});
}

add_film("Tilik", 32, "Drama", 2018);
add_film("Whiplash", 107, "Musical-prodigy", 2014);
console.log(dataFilm[1]);
// -----------------------------