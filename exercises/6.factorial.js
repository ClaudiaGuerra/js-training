/* Objetivo: Calcular el factorial de un número N proporcionado por el usuario
    Entrada:
        - N (number)

    Salida:
        - factorial (number)
*/

// Necesario para solicitar datos al usuario
const prompt = require('prompt-sync')();

// 1. Solicitar al usuario el número al que desea calcular el factorial
let N = Number(prompt('Por favor, ingresa un número positivo: '));


// 2. Calcula el factorial
let factorial = 1;
let i = N;

while (i > 0){
    factorial = factorial * i;
    i = i - 1
}

// 3. Imprime el factorial
console.log(`El factorial de ${N} es ${factorial}`);