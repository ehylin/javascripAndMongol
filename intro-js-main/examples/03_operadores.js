// operador de asignación

let x = 5;
let y = 2;

// aritméticos

let suma = x + y;
let resta = x - y;
let producto = x * y;
let division = x / y;
let modulo = 4 % 2;

console.log(suma);
console.log(resta);
console.log(producto);
console.log(division);
console.log(modulo);
let portal = '1D';

let error = 12 - portal;

console.log(error);

// asignación de adición
// x = x + 15;
x += 15;
console.log(x);
x++;
// x = x + 1;
console.log(x);
y -= 5; // y = y - 5;
console.log(y);

/// operadores de comparación
let a = 5;
let b = 8;

console.log(a === b); // false
console.log(a !== b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false

// === vs ==
console.log('=== vs ==');

console.log('1' === 1); // false
console.log(true === 1); // false
console.log(null === undefined);
console.log(NaN === NaN); // false

let isFalse = 0 === ""; // false
// console.log(isFalse);

// operadores lógicos
let w = 5;
let z = 10;
// || or
// && and

console.log(w > 3 && z < 20); // true

let operadorLogico = w > 3 || z < 20;

// console.log(operadorLogico); // true

const isGreaterThan3 = w > 3;

// console.log(!isGreaterThan3); // false

let numero = 23, numero2 = 34;


const num1 = 20;
const num2 = 5;
const valorFinal = 120;

console.log((num1 * num2) === valorFinal);
