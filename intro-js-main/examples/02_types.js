let resultado = 10;

// typeof

console.log(typeof resultado);

// boolean: true o false
resultado = true;

console.log(typeof (resultado));

let precio = 19000.99;

let cantidad = 1000;

console.log(typeof precio);
console.log(typeof cantidad);

// null y undefined
let variableNula = null;
let variableUndefined;

console.log(typeof variableNula);
console.log(typeof variableUndefined);

let portal = '5A';
// let direccion = 'Calle Mayor, 1D';

// template string
let direccion = `Calle Mayor, ${portal}`;

console.log('--direccion--');
console.log(typeof direccion);
console.log(direccion);

// Bigint
let numeroGrande = 1234567890123456789012345678901234567890n;

console.log(typeof numeroGrande);
