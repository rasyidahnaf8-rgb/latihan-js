const prompt = require("prompt-sync")({ sigint: true });

let sisiAtas = Number(prompt("Masukkan sisi atas    : "));
let sisiBawah = Number(prompt("Masukkan sisi bawah   : "));
let tinggi = Number(prompt("Masukkan tinggi       : "));
let sisiMiring1 = Number(prompt("Masukkan sisi miring 1: "));
let sisiMiring2 = Number(prompt("Masukkan sisi miring 2: "));

let luas = 0.5 * (sisiAtas + sisiBawah) * tinggi;
let keliling = sisiAtas + sisiBawah + sisiMiring1 + sisiMiring2;

console.log("===========================");
console.log("         H A S I L         ");
console.log("===========================");

console.log("Luas Trapesium : " + luas + " cm2");
console.log("Keliling Trapesium : " + keliling + " cm");

console.log(
`Luas Trapesium\t\t: ${luas.toFixed(2)} cm2
Keliling Trapesium\t: ${keliling.toFixed(2)} cm`
);