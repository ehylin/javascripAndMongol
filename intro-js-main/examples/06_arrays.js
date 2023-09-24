// ejemplo arrays
// ----------    0        1        2
let fruits = ['apple', 'banana', 'kiwi'];

console.log(fruits);
console.log(typeof fruits);

console.log(fruits[0]);
console.log(fruits[2]);

fruits[1] = 'orange';

fruits.push('watermelon');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('mango', 'pineapple');
console.log(fruits);

console.log(fruits.includes('kiwi'));

console.log(fruits.length);

// cuidado push, pop, shift
// console.log(fruits.push('banana'));
// console.log(fruits[5]);

// esto no crea un arra nuevo con la banana
// const newArray = fruits.push('banana');

const newArray = fruits.concat('banana');
console.log(newArray);

const index = fruits.indexOf('kiwi');
console.log(index);

fruits.splice(index, 1);

// Ejemplo

let numeros = [];

numeros.push(1, 2, 3, "keepcoding",4, 5);

console.log(numeros);

let wordExists = numeros.includes("keepcoding");


if (wordExists) {
  console.log("Este array no solo tiene números");
}

numeros.includes("keepcoding") && console.log("Este array no solo tiene números.");

numeros.unshift(10);

console.log(numeros);

let indice = numeros.indexOf("keepcoding");

numeros.splice(indice, 1);

console.log(numeros);
console.log(numeros.length);