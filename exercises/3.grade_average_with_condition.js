/*
Objetivo: Calcular el promedio de 3 calificaciones y determinar si el estudiante aprueba o reprueba.
Entrada:
    - cal1 (número)
    - cal2 (número)
    - cal3 (número)
Salida:
    - Mensaje que incluya el promedio y el resultado de la aprobación (string)
*/

// Necesario para solicitar datos al usuario
const prompt = require('prompt-sync')();

// 1. Solicitar 3 calificaciones al usuario. (Recuerda convertirlas a números)
const cal1 = Number(prompt('Por favor, ingresa la primera calificación: '));

// Early return / Early exit / Early abort
if (Number.isNaN(cal1)) {
  console.log('ERROR: La primera calificación debe ser un número válido. Por favor, intenta de nuevo.');
  return; // Salir de la función si la calificación no es válida
}

const cal2 = Number(prompt('Por favor, ingresa la segunda calificación: '));

// Early return / Early exit / Early abort
if (Number.isNaN(cal2)) {
  console.log('ERROR: La segunda calificación debe ser un número válido. Por favor, intenta de nuevo.');
  return; // Salir de la función si la calificación no es válida
}
const cal3 = Number(prompt('Por favor, ingresa la tercera calificación: '));

// Early return / Early exit / Early abort
if (Number.isNaN(cal3)) {
  console.log('ERROR: La tercera calificación debe ser un número válido. Por favor, intenta de nuevo.');
  return; // Salir de la función si la calificación no es válida
}

// 2. Calcula el promedio
const promedio = (cal1 + cal2 + cal3) / 3;

// 3. Determinar si el promedio es aprobatorio o no
// utilizando una condición.
// NOTA: Calificación aprobatoria >= 6
let resultado = '';
if (promedio >= 6 /*hardcodeado*/ /*magic number*/) {
  resultado = 'APROBATORIA';
} else {
  resultado = 'REPROBATORIA';
}
// DRY -> Don't Repeat Yourself -> No repetir código si es posible
console.log('Tu promedio es:', promedio, '. Calificación:', resultado);
