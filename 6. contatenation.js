// Hay 3 formas de contatenar strings en JS

const nombre = 'Claudia';
const genero = 'Femenino';

// 1. Usando el operador +
console.log('CON + ' + ': Hola ' + nombre + ', tu género es ' + genero + '.');

// 2. Usando el operador ,
console.log('CON ,', ': Hola', nombre, ', tu género es', genero, '.');


// 3. Usando ambos
console.log('CON AMBOS', ': Hola', nombre + ', tu género es', genero + '.');

// 4. ES6, ES2015 -> Template Strings / Template Literals
// `` -> Backticks / Comillas invertidas
console.log(`CON ES6: Hola ${nombre}, tu género es ${genero}.`);