const prompt = require("prompt-sync")({ sigint: true, });

for (let i = 5; i >= 1; i--) {
  console.log("*".repeat(i));
}