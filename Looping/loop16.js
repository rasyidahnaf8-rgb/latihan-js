const prompt = require("prompt-sync")({ sigint: true, });

let i = 1;
while (i <= 5) {
  console.log("*".repeat(i));
  i++;
}

i = 4;
while (i >= 1) {
  console.log("*".repeat(i));
  i--;
}