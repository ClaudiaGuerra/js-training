/*
  Objetivo: Calcular el área de un círculo a partir de su diámetro.
  Entrada:
    - Diámetro (número)
  Salida:
    - Área (número)
*/
const prompt = require('prompt-sync')();

// 1. Solicitar el diámetro al usuario
// TODO DATO INGRESADO POR EL TECLADO ES UN STRING
// Number -> Clase que convierte otro tipo de dato a un número
const diametro = Number(prompt('Por favor, ingresa el diámetro del círculo: '));

// typeof te dice el tipo de dato de una varaiable
console.log('Diámetro ingresado:', typeof diametro);

// 2. Calcular el radio
const radio = diametro / 2;

// 3. Calcular el área
const area = Math.PI * (radio ** 2);

// 4. Imprimir el resultado
console.log('El área del círculo es:', area);