const prompt = require("prompt-sync")({ sigint: true });

let sisi = Number(prompt("Masukkan sisi alas : "));
let tinggi = Number(prompt("Masukkan tinggi limas : "));

let luasAlas = sisi * sisi;
let volume = (1/3) * luasAlas * tinggi;

console.log("=======================");
console.log("         LIMAS         ");
console.log("=======================");

console.log(`Volume: ${volume}`);
console.log(`Luas Alas: ${luasAlas}`);