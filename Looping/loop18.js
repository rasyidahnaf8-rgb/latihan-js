const prompt = require("prompt-sync")({ sigint: true, });

function buatPerkalian(n) {
  for (let kol = 1; kol <= n; kol++) {
    let baris = "";
    for (let row = 1; row <= 5; row++) {
      baris += kol + " x " + row + " = " + (kol * row) + "  ";
    }
    console.log(baris);
  }
}
buatPerkalian(2)