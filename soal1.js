const prompt = require('prompt-sync')({sigint: true});
const x = prompt('Masukkan Bilangan : ');

const y = Math.sqrt(x);
// console.log(`The square root of ${x} adalah ${y}`);

if (x==20){
    console.log(`Akar Pangkat Dua dari ${x} adalah ${y}`);
}

else if (x==25){
    console.log("Tidak bisa input bilangan ganjil")
}
else if (x<0){
    console.log("Tidak bisa input bilangan negatif")
}

// var x;
// if(x>90){
//     grade = "A"
// } else if(nilai>80) {
//     grade = "B+"
// } else if (nilai>70){
//     grade = "B"
// } else {

//     grade = "F"

// }

// console.log("Grade adalah = " + grade)