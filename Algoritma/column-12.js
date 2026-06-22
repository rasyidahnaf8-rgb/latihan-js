const prompt = require("prompt-sync")({ sigint: true });

let jamWork = Number(prompt("Masukkan jumlah jam kerja: "));
let upah;

if (jamWork <= 48) {
  upah = jamWork * 2000;
} else {
  let lembur = jamWork - 48;
  upah = 48 * 2000 + lembur * 3000;
}

console.log("Upah mingguan = Rp" + upah);
