/*
  Objetivo: Imprimir los números pares del 0 al N.
  Entrada:
    - N (número)
  Salida:
    - Cada uno de los números pares (número)
*/

const prompt = require('prompt-sync')();
const N = Number(prompt('Por favor, ingresa un número entero positivo: '));

if (!Number.isInteger(N)) {
  console.log('ERROR: El número debe ser un entero válido. Por favor, intenta de nuevo.');
  return; // Salir de la función si la calificación no es válida
}

for (let i = 0; i <= N; i += 2) {
  console.log('Número par', i);
}