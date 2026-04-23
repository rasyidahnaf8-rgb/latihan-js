const prompt = require("prompt-sync")({ sigint: true });

let alas = Number(prompt("Masukkan alas   : "));
let tinggi = Number(prompt("Masukkan tinggi : "));
let sisimiring = Number(prompt("Masukkan sisi miring : "));

let luas = alas * tinggi;
let keliling = 2 * (alas + sismiring);

console.log("===========================");
console.log("         H A S I L         ");
console.log("===========================");

console.log("Luas Jajar Genjang : " + luas + " cm2");
console.log("Keliling Jajar Genjang : " + keliling + " cm");

console.log(
`Luas Jajar Genjang\t\t: ${luas.toFixed(2)} cm2
Keliling Jajar Genjang\t: ${keliling.toFixed(2)} cm`
);