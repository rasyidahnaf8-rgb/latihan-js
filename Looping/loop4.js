const prompt = require("prompt-sync")({ sigint: true });

let baris = "";
let total = 0;
for (let i = 1; i <= 5; i++) {
  baris += i + " ";
  total += i;
}
console.log(baris.trim() + " = " + total);
