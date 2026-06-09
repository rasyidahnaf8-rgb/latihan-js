const prompt = require("prompt-sync")({ sigint: true, });

let i = 0;
while (i < 5) {
  let baris = "";
  let j = 0;
  while (j < 5) {
    baris += "a ";
    j++;
  }
  console.log(baris.trim());
  i++;
}