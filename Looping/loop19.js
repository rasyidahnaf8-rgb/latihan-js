const prompt = require("prompt-sync")({ sigint: true, });

const nilai = [80, 90, 75, 85, 70]; // contoh
let total = 0;
for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}
const rata = total / nilai.length;
console.log("Jumlah: " + total);
console.log("Rata-rata: " + rata);