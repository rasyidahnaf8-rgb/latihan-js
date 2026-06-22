const prompt = require("prompt-sync")({ sigint: true });

let day1 = Number(prompt("Tanggal 1: "));
let month1 = Number(prompt("Bulan 1: "));
let year1 = Number(prompt("Tahun 1: "));

let day2 = Number(prompt("Tanggal 2: "));
let month2 = Number(prompt("Bulan 2: "));
let year2 = Number(prompt("Tahun 2: "));

let total1 = year1 * 365 + month1 * 30 + day1;
let total2 = year2 * 365 + month2 * 30 + day2;

let selisih = Math.abs(total2 - total1);

let tahun = Math.floor(selisih / 365);
let bulan = Math.floor((selisih % 365) / 30);
let hari = (selisih % 365) % 30;

console.log("Selisih:");
console.log(tahun + " tahun");
console.log(bulan + " bulan");
console.log(hari + " hari");
