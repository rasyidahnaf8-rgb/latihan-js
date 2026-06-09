const prompt = require("prompt-sync")({ sigint: true, });

let expr = "";
let total = 0;
let i = 1;
do {
  expr += (i < 5) ? i + " + " : i + "";
  total += i;
  i++;
} while (i <= 5);
console.log(expr + " = " + total);