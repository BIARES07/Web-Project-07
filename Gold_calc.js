// Pide al usuario que introduzca un número
var numero = prompt("Introduce un número:");

// Convierte el valor introducido a un número
numero = parseFloat(numero);

// Multiplica el número por una tasa fija (0.16)
var resultado = numero * 0.16;

// Muestra el resultado de la multiplicación
console.log("El resultado es: " + resultado);