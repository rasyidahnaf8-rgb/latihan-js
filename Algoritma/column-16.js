const prompt = require("prompt-sync")({ sigint: true });

let nama = prompt("Masukkan nama karyawan: ");
let golongan = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
let jamWork = Number(prompt("Masukkan jumlah jam kerja: "));

let upahPerH;

if (golongan == "A") {
  upahPerH = 4000;
} else if (golongan == "B") {
  upahPerH = 5000;
} else if (golongan == "C") {
  upahPerH = 6000;
} else if (golongan == "D") {
  upahPerH = 7500;
} else {
  console.log("Golongan tidak valid");
}

let gaji;

if (jamWork <= 48) {
  gaji = jamWork * upahPerH;
} else {
  let lembur = jamWork - 48;
  gaji = 48 * upahPerH + lembur * 3000;
}

console.log("Nama Karyawan :", nama);
console.log("Golongan       :", golongan);
console.log("Gaji Mingguan  : Rp" + gaji);
