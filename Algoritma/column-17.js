const prompt = require("prompt-sync")({ sigint: true });

let nilai = Number(prompt("Masukkan nilai ujianmu: "));
let index;

if (nilai >= 80) {
    index = "A";
} else if (nilai >= 70) {
    index = "B";
} else if (nilai >= 55) {
    index = "C";
} else if (nilai >= 40) {
    index = "D";
} else {
    index = "E";
}

console.log("Indeks nilai =", index);