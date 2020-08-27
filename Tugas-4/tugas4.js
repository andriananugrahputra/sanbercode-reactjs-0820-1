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

// SOAL NO 3

// ---------------------------------------

// SOAL NO 4

// ---------------------------------------

// SOAL NO 5

// ---------------------------------------