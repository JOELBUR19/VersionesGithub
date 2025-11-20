const nombre = "Joel";
const nota1 = 5.0;
const nota2 = 4;
const nota3 = 2;
const promedio = (nota1 + nota2 + nota3) / 3;

console.log("Su nota 1 en el sistema es: " + nota1);
console.log("Su nota 2 en el sistema es: " + nota2);
console.log("Su nota 3 en el sistema es: " + nota3);

if (promedio >= 3.5) {
  console.log(nombre + "Usted aprobo correctamente con un promedio de: " + promedio);
} else {
  console.log(nombre + "Usted reprobo con un promedio de: " + promedio);
}
