/*
La programación funcional es un paradigma de programación que se centra en el uso de funciones como bloques de construcción fundamentales. En el contexto de JavaScript, la programación funcional implica escribir código que se basa en funciones puras, evitando el uso de estado mutable y efectos secundarios.
*/

/*
Funciones Puras: Las funciones puras son aquellas que siempre producen el mismo resultado para los mismos argumentos y no tienen efectos secundarios observables. No modifican variables fuera de su ámbito y no alteran el estado global.
*/

//Funcion pura
const numero = 0;
const sumar = (a, b) => a + b;

sumar(2, 2) // 4
sumar(2, 2) // 4
// funcion no pura
let num = 0;
const sumarImpure = (num2) => {
  num = num + num2;
  return num;
};

sumarImpure(2); // 2
sumarImpure(2); // 4

const datos = [];

// no pura :(
const addElement = (arr, newElement) => {
  arr.push(newElement);
  return arr;
};

console.log(addElement(datos, 'Elemento')); /// ['Elemento']
console.log(addElement(datos, 'Elemento')); /// ['Elemento']
console.log(datos); // []

/*
Inmutabilidad: La inmutabilidad implica que los datos no deben ser modificados una vez que se crean. En JavaScript, se alienta el uso de estructuras de datos inmutables, lo que significa que se crean nuevas instancias en lugar de modificar las existentes.
*/
console.log('Inmutabilidad');
const shoppingCart1 = ['food', 'TV', 'PC'];
const shoppingCart2 = shoppingCart1;

shoppingCart2.pop();

console.log(shoppingCart1);
console.log(shoppingCart2);
/// solucion
// const shoppingCart3 = [].concat(shoppingCart1);
const shoppingCart3 = [...shoppingCart1];

shoppingCart3.push('nuevo');

console.log('shoppingCart3', shoppingCart3);
console.log('shoppingCart2', shoppingCart2);

/// objects
const user1 = {
  education: 'Keepcoding',
  name: 'kevin',
  city: {
    name: 'Madrid'
  },
  age: null,
  address: undefined,
  // sayHi: () => 'Hola',
};

// const user2 = Object.assign({}, user1);
const user2 = structuredClone(user1);
// const user2 = JSON.parse(JSON.stringify(user1));
user2.name = 'Matt';
user2.city.name = 'London';

console.log(user1);
console.log(user2);
// solucion

// Arreglar este código

const datosFix = [];

// no pura :(
const addElementFixed = (arr, newElement) => [...arr, newElement];

console.log(addElementFixed(datosFix, 'Elemento')); /// ['Elemento']
console.log(addElementFixed(datosFix, 'Elemento')); /// ['Elemento']
console.log(addElementFixed(datosFix, 'Keepcoding')); /// ['Keepcoding']
console.log(addElementFixed(datosFix, 'Keepcoding')); /// ['Keepcoding']
console.log(datosFix); // []

const house1 = {
  address: 'Madrid',
  rooms: 5,
};

const house2 = {
  address: 'Barcelona',
  rooms: 4,
  parking: true,
};

const newHouse = { ...house2, ...house1, address: 'Valencia' };

console.log(newHouse);

/*
Composición de Funciones: La composición de funciones se refiere a la combinación de múltiples funciones más pequeñas para crear funciones más complejas. Esto se logra mediante la combinación de las salidas de una función con las entradas de otra.
*/

// map, filter, forEach
const numbers = [10, 20, 33, 45, 58, 65];
/*
let double = [];
for (const iterator of numbers) {
  double.push(iterator * 2);
}

console.log(double);
*/
const double = (number) => number * 2;
/*
const newArray = numbers.map(function (item) {
  return double(item);
});
*/
/*
const newArray = numbers.map((item) => double(item));
*/
const newArray = numbers.map(double);

console.log(newArray);

// filter
/*
const filterArray = numbers.filter((elem) => {
  return elem <= 33;
});
*/
const filterArray = numbers.filter((elem) => elem <= 33).map(double);

console.log(filterArray);
/*
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 2 !== 0) {
    // oddNumbers[oddNumbers.length] = number
    oddNumbers.push(number);
    // oddNumbers = oddNumbers.concat(number);
  }
}

console.log(oddNumbers);

const numbersNew = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];

const oddNum = numbersNew.filter((num) => num % 2);
console.log(oddNum);
*/
const numbersExample = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
const oddNumbers = numbersExample.filter((elem) => elem % 2 !== 0);
console.log(oddNumbers);

// forEach
const doubleArray = [];

numbersExample.forEach((elem) => {
  doubleArray.push(elem * 2);
});

/*
Ejercicio: Filtrar y transformar un array de objetos

Enunciado: Dado un array de objetos que representan libros, utiliza filter para filtrar los libros cuyo año de publicación sea posterior a 2000 y luego utiliza map para crear un nuevo array con los títulos de esos libros.

titulo: El gran Gatsby | autor: F. Scott Fitzgerald | año: 1925
titulo: 1984 | autor: George Orwell | año: 1949
titulo: Cien años de soledad | autor: Gabriel García Márquez | año: 1967
titulo: Harry Potter y la piedra filosofal | autor: J.K. Rowling | año: 1997
titulo: El código Da Vinci | autor: Dan Brown | año: 2003
titulo: Crepúsculo | autor: Stephenie Meyer | año: 2005
titulo: Los juegos del hambre | autor: Suzanne Collins | año: 2008
*/

const libros = [
  { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', año: 1925 },
  { titulo: '1984', autor: 'George Orwell', año: 1949 },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
  { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', año: 1997 },
  { titulo: 'El código Da Vinci', autor: 'Dan Brown', año: 2003 },
  { titulo: 'Crepúsculo', autor: 'Stephenie Meyer', año: 2005 },
  { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', año: 2008 }
];

const librosPosteriores2000 = libros.filter(libro => libro.año > 2000);

const titulosLibrosPosteriores2000 = librosPosteriores2000.map(libro => libro.titulo);

console.log(titulosLibrosPosteriores2000);

const post2kTitles = libros
  .filter((libro) => libro.año > 2000)
  .map((libroPost2k) => libroPost2k.titulo);

console.log(post2kTitles);

const arr1 = [], arr2 = [];

libros.forEach(libro => {
  if (libro.año > 2000) arr1.push(libro);
  else arr2.push(libro);
});

// reduce, find, findIndex

const numbersReduceExample = [1,2,4,5];
console.log('Reduce example');
// array -> number
const resultado = numbersReduceExample.reduce((acum, item) => {
  console.log('Iteration');
  console.log('acum: ', acum);
  console.log('item: ', item);
  const resultado = acum + item;
  return resultado;
}, 0);

console.log(resultado);


const transactions = [
  { id: 'trx001', amount: 100, description: 'Purchase 1' },
  { id: 'trx002', amount: 50, description: 'Purchase 2' },
  { id: 'trx003', amount: 200, description: 'Purchase 3' },
];

// usando reduce
const result = transactions.reduce((acc, transaction) => {
  acc[transaction.id] = transaction;
  return acc;
}, {});

console.log(result.trx003);
/*
const result = {
  trx001: { id: 'trx001', amount: 100, description: 'Purchase 1' },
  trx002: { id: 'trx002', amount: 50, description: 'Purchase 2' },
  trx003: { id: 'trx003', amount: 200, description: 'Purchase 3' }
}
*/
var a = { dato: 1 };
var b = { dato: 3 };

var c = { ...a, ...b };

// find, findIndex
const getTransaction = (tId) => {
  const trx = transactions.find((transaction) => {
    return transaction.id === tId;
  });
  if (!trx) throw new Error('Not found');
  return trx
};

const trx001 = getTransaction('trx002')

console.log(trx001);
