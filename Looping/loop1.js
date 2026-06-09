const prompt = require("prompt-sync")({ sigint: true });

let hasil = "";
for (let i = 0; i < 4; i++) {
    hasil += "Cerdas ";
}
console.log(hasil.trim());