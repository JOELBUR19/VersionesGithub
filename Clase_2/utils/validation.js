import promptSync from "prompt-sync";
const prompt = promptSync();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const email = prompt("Ingresa tu correo: ").trim();

if (!email) {
  console.log("El email está vacío.");
} else if (!emailRegex.test(email) || email.includes("..")) {
  console.log("El email es inválido.");
} else {
  console.log("El email es válido.");
}
