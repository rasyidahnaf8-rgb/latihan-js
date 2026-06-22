const prompt = require("prompt-sync")({ sigint: true });

let meter = Number(prompt("Masukkan panjang dalam meter (m): "));

let inch = meter / 0.0254;
let foot = meter / 0.3048;
let yard = meter / 0.9144;


console.log("Inci =", inch);
console.log("Kaki =", foot);
console.log("Yard =", yard);