// SOAL NO 1

// var for flag
var flag_loop_1 = 1;
var flag_loop_2 = 10;

// var for string
var str_1 = "I love coding";
var str_2 = "I will become a frontend developer";

// show first looping
console.log("LOOPING PERTAMA");
while(flag_loop_1 <= 10) {
    console.log((flag_loop_1*2) + " - " + str_1);
    flag_loop_1++;
}

// show second looping
console.log("LOOPING KEDUA");
while(flag_loop_2 > 0) {
    console.log((flag_loop_2*2) + " - " + str_2);
    flag_loop_2--;
}
// ---------------------------------------

// SOAL NO 2
var i;
var n = 20;

var str_1 = " - Santai";
var str_2 = " - Berkualitas";
var str_3 = " - I Love Coding";

// looping sebanyak n
for(i = 1; i <= n; i++) {
    // i angka ganjil
    if (i % 2 == 1) {
        //i kelipatan 3
        if (i % 3 == 0) {
            console.log(i + str_3)
        }else{
            console.log(i + str_1);
        }
    }
    // i genap
    else if(i % 2 == 0){
        console.log(i + str_2);
    }
}
// ---------------------------------------

// SOAL NO 3 {MASIH BINGUNG}
var i;
var j;
var rows = 7;
var pattern = "";

for (i = 1; i <= rows; i++) {
    for (j = 1; j <= i; j++) {
        pattern += "#";
    }
    pattern += "\n";
}
console.log(pattern);
// ---------------------------------------

// SOAL NO 4
var kalimat="saya sangat senang belajar javascript"
var str_split = kalimat.split(" ");
console.log(str_split);
// ---------------------------------------

// SOAL NO 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var str_sort = daftarBuah.sort();

var i;

for(i = 0; i < str_sort.length; i++){
    console.log(str_sort[i]);
}
// ---------------------------------------