const prompt = require("prompt-sync")({ sigint: true });

let alas = Number(prompt("Alas segitiga        : "));
let tinggiSegitiga = Number(prompt("Tinggi segitiga     : "));
let sisiA = Number(prompt("Sisi miring A       : "));
let sisiB = Number(prompt("Sisi miring B       : "));
let tinggiPrisma = Number(prompt("Tinggi prisma       : "));

let luasAlas = 0.5 * alas * tinggiSegitiga;
let kelilingAlas = alas + sisiA + sisiB;

let volume = luasAlas * tinggiPrisma;
let luas = 2 * luasAlas + kelilingAlas * tinggiPrisma;

console.log("=======================");
console.log("   PRISMA SEGITIGA     ");
console.log("=======================");

console.log(`Volume: ${volume}`);
console.log(`Luas Permukaan: ${luas}`);