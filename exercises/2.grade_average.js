/*
Objetivo: Calcular el promedio de 3 calificaciones
Entrada:
    - cal1 (número)
    - cal2 (número)
    - cal3 (número)
Salida:
    - Promedio (número)
*/

// Necesario para solicitar datos al usuario
const prompt = require('prompt-sync')();

// 1. Solicitar 3 calificaciones al usuario. (Recuerda convertirlas a números)
const cal1 = Number(prompt('Por favor, ingresa la primera calificación: '));
const cal2 = Number(prompt('Por favor, ingresa la segunda calificación: '));
const cal3 = Number(prompt('Por favor, ingresa la tercera calificación: '));

// Comprueba el tipo de dato con typeof
console.log('Las calificaciones son del tipo:', 'Calificación 1:', typeof cal1, ', Calificación 2:', typeof cal2, ', Calificación 3:', typeof cal3, );

// 2. Calcula el promedio
const promedio = (cal1 + cal2 + cal3)/3;

// 3. Imprime el promedio
console.log('El promedio es: ', promedio);