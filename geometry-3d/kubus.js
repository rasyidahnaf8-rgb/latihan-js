const prompt = require("prompt-sync")({ sigint: true });

let s = Number(prompt("Masukkan sisi: "));

let volume = s * s * s;
let luas = 6 * s * s;

console.log("=======================");
console.log("        KUBUS          ");
console.log("=======================");

console.log(`Volume: ${volume}`);
console.log(`Luas Permukaan: ${luas}`);