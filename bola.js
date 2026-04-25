const prompt = require("prompt-sync")({ sigint: true });

let r = Number(prompt("Masukkan jari-jari : "));

let volume = (4/3) * 3.14 * r * r * r;
let luas = 4 * 3.14 * r * r;

console.log("=======================");
console.log("         BOLA          ");
console.log("=======================");

console.log(`Volume: ${volume}`);
console.log(`Luas Permukaan: ${luas}`);