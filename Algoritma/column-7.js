const prompt = require("prompt-sync")({ sigint: true });

let duit = Number(prompt("Masukkan jumlah uang: "));

let rp1000 = Math.floor(duit / 1000);
duit %= 1000;

let rp500 = Math.floor(duit  / 500);
duit %= 500;

let rp100 = Math.floor(duit / 100);
duit %= 100;

let rp50 = Math.floor(duit / 50);
duit %= 50;

let rp25 = Math.floor(duit / 25);

console.log("Rp1000 = ", rp1000);
console.log("Rp500 = ", rp500);
console.log("Rp100 = ", rp100);
console.log("Rp50 = ", rp50);
console.log("Rp25 = ", rp25);
