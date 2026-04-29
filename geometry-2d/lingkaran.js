const prompt = require("prompt-sync")({ sigint: true });

let r = Number(prompt('masukan jari jari : '));

let luas = 3.14 * r * r;
let keliling = 2 * 3.14 * r;

console.log("===========================");
console.log("         H A S I L         ");
console.log("===========================");

console.log("Luas Lingkaran : " + luas + " cm2");
console.log("Keliling Lingkaran : " + keliling + " cm");

console.log(
`Luas Lingkaran\t\t: ${luas.toFixed(2)} cm2
Keliling Lingkaran\t: ${keliling.toFixed(2)} cm`
);