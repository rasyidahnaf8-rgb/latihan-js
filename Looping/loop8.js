const prompt = require("prompt-sync")({ sigint: true, });

let expr = "";
let total = 0;
for (let i = 2; i <= 10; i += 2) {
  expr += (total > 0 ? " + " : "") + i;
  total += i;
}
console.log(expr + " = " + total);