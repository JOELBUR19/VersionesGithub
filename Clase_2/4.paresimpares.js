let par = " ";
let impar = " ";

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    par = par + i + ","; //Investigado, sirve para concatenar el valor del numero que entra, añadir el valor que se encuentra ya ahi y separar por comas.
  } else {
    impar = impar + i + ",";
  }
}

console.log("Los números pares son: " + par);
console.log("Los números impares son: " + impar);