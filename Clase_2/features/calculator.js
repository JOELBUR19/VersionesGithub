import promptSync from "prompt-sync";
const prompt = promptSync();

const v1 = parseFloat(prompt("Elige el primer número a sumar: "));
const v2 = parseFloat(prompt("Elige el segundo número a sumar: "));

const res = v1 + v2;

console.log("El valor de la suma es:", res);
