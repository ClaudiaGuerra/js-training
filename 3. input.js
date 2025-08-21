/*
De forma nativa, Node puede leer datos desde la consola pero son formas complicadas de hacerlo
Para simplificar, vamos a instalar un paquete desde NPM que nos permitirá usar la función
prompt() como si estuviéramos en un navegador
*/
const prompt = require('prompt-sync')();

const nombre = prompt('¿Cuál es tu nombre? ');
console.log(`Hola, ${nombre}!`);
