const prompt = require("prompt-sync")({ sigint: true });

let d1 = Number(prompt("Masukkan diagonal 1 : "));
let d2 = Number(prompt("Masukkan diagonal 2 : "));
let sisiA = Number(prompt("Masukkan sisi A     : "));
let sisiB = Number(prompt("Masukkan sisi B     : "));

let luas = 0.5 * d1 * d2;
let keliling = 2 * (sisiA + sisiB);

console.log("===========================");
console.log("         H A S I L         ");
console.log("===========================");

console.log("Luas Layang-layang : " + luas + " cm2");
console.log("Keliling Layang-layang : " + keliling + " cm");

console.log(
`Luas Layang-layang\t\t: ${luas.toFixed(2)} cm2
Keliling Layang-layang\t: ${keliling.toFixed(2)} cm`
);