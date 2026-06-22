const prompt = require("prompt-sync")({ sigint: true });

let tinggi = Number(prompt("Masukkan tinggi badan dalam centimeter (cm): "));

let beratpas = (tinggi - 100) * 0.9;

console.log("Berat badan ideal =", beratpas, "kg");