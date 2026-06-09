const prompt = require("prompt-sync")({ sigint: true, });

for (let i = 0; i < 5; i++) {
  const huruf = String.fromCharCode(97 + i); // a=97
  console.log((huruf + " ").repeat(5).trim());
}