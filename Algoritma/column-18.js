const prompt = require("prompt-sync")({ sigint: true });

let angka = Number(prompt("Masukkan angka dari 1 sampai 4: "));

if (angka == 1) {
  console.log("satu");
} else if (angka == 2) {
  console.log("dua");
} else if (angka == 3) {
  console.log("tiga");
} else if (angka == 4) {
  console.log("empat");
} else {
  console.log("Angka yang dimasukkan tidak valid");
}
