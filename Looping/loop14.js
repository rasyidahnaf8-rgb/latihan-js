const prompt = require("prompt-sync")({ sigint: true, });

for (let i = 1; i <= 7; i++) {
  console.log("*".repeat(i));
}
for (let i = 6; i >= 1; i--) {
  console.log("*".repeat(i));
}