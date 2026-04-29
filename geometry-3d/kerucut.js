const prompt = require("prompt-sync")({ sigint: true });

let r = Number(prompt("Masukkan jari-jari : "));
let t = Number(prompt("Masukkan tinggi    : "));

let s = Math.sqrt(r*r + t*t);
let volume = (1/3) * Math.PI * r * r * t;
let luas = Math.PI * r * (r + s);

console.log("=======================");
console.log("        KERUCUT        ");
console.log("=======================");

console.log(`Volume: ${volume}`);
console.log(`Luas Permukaan: ${luas}`);