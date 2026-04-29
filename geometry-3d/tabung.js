const prompt = require("prompt-sync")({ sigint: true });

let r = Number(prompt("Masukkan jari-jari : "));
let t = Number(prompt("Masukkan tinggi    : "));

let volume = 3.14 * r * r * t;
let luas = 2 * 3.14 * r * (r + t);

console.log("=======================");
console.log("        TABUNG         ");
console.log("=======================");

console.log(`Volume: ${volume}`);
console.log(`Luas Permukaan: ${luas}`);