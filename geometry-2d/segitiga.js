const prompt = require("prompt-sync")({ sigint: true });

let alas = Number(prompt("Masukkan alas   : "));
let tinggi = Number(prompt("Masukkan tinggi : "));
let sisi1 = Number(prompt("Masukkan sisi 1 : "));
let sisi2 = Number(prompt("Masukkan sisi 2 : "));
let sisi3 = Number(prompt("Masukkan sisi 3 : "));

let luas = 0.5 * alas * tinggi;
let keliling = sisi1 + sisi2 + sisi3;

console.log("===========================");
console.log("         H A S I L         ");
console.log("===========================");

console.log("Luas Segitiga : " + luas + " cm2");
console.log("Keliling Segitiga : " + keliling + " cm");

console.log(
`Luas Segitiga\t\t: ${luas.toFixed(2)} cm2
Keliling Segitiga\t: ${keliling.toFixed(2)} cm`
);