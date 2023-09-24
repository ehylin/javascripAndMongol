console.log('Funciones!');
// definir funntion
function sayHi () {
  const saludo = 'Hola Mundo!';
  console.log(saludo);
}
console.log('vamos a llamar a sayHi');
// invocar function
// sayHi();
// sayHi();
// sayHi();
// sayHi();

// sin funciones
// console.log('Hola Mundo!');
// console.log('Hola Mundo!');
// console.log('Hola Mundo!');
// console.log('Hola Mundo!');

function esMayorDeEdad(age, legalAge) {
  if (age < 1) {
    console.log('Valor incorrecto');
  } else {
    if (age >= legalAge) {
      console.log('Eres mayor de edad', age);
    } else {
      console.log('Eres menor de edad', age);
    }
  }
}

function esMayorDeEdad(age, legalAge) {
  if (age < 1) {
    return null;
  }
  return age >= legalAge;
  /*
  if (age >= legalAge) {
    return true;
  } else {
    return false;
  }
  */
}

esMayorDeEdad(50, 21); // true false
esMayorDeEdad(10, 21);
esMayorDeEdad(18, 18);
esMayorDeEdad(-100, 21);

function sum (num1 = 0, num2 = 0) {
  // const result = num1 + num2;
  // return result;
  return num1 + num2;
}

const variable = sum(2, 2); // 4 ??? 
console.log(variable);

function crearSaludo(nombre) {
  console.log('Dentro de crear Saludo');
  return `Hola ${nombre}!`;
}

console.log(typeof crearSaludo);

const saludoPersona = crearSaludo;

console.log(saludoPersona('Persona'));

const findOddNumbers = function (numbersArray) {
  let oddNumbers = [];

  for (let i = 0; i < numbersArray.length; i++) {
    const number = numbersArray[i];
    if (number % 2 !== 0) {
      oddNumbers.push(number);
    }
  }

  return oddNumbers;
}

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
const oddNumbers = findOddNumbers(numbers);
console.log(oddNumbers);

// arrow functions =>
/*
const restar = (num1 = 0, num2 = 0) => {
  return num1 - num2;
};
*/
const restar = (num1 = 0, num2 = 0) => num1 - num2;

console.log(restar(10, 80));
/*
function activateAccount (name) {
  return {
    name: name,
    activate: true
  };
}
*/
const activateAccount = (name) => (
  {
    // name: name,
    name,
    active: true
  }
);

const user1 = activateAccount('test');
const user2 = activateAccount('test2');
console.log(user2);

// rest params
const sumar = (...params) => {
  let resultado = 0;
  for (let number of params) {
    resultado += number;
  }
  return resultado;
};

const resultado = sumar(1, 2, 4, 5, 6);
console.log(resultado);

// closures
const counter = () => {
  let count = 0;
  
  const increment = () => {
    count++;
  };

  const getCount = () => count;

  const resetCount = () => {
    count = 0;
  };

  return {
    // increment: increment,
    increment,
    // resetCount: resetCount,
    resetCount,
    count: getCount,
  };
};

const contador1 = counter();

console.log(contador1); /// { increment, resetCount, count }

contador1.increment(); // count + 1
contador1.increment();
contador1.increment();

contador1.resetCount();
const contador2 = counter();
console.log(contador2.count()); 
contador2.increment();
contador2.increment();
contador2.increment();
console.log('contador1', contador1.count());
console.log('contador2', contador2.count());



/*
Crear un closure de una calculadora que pueda hacer las siguientes operaciones guardando el resultado
*/
console.log('Calculadora');
const calculadora = () => {
  let result = 0;

  const sumar = (value) => (result += value);
  const restar = (value) => (result -= value);
  const multiplicar = (value) => (result *= value);
  const dividir = (value) => (result /= value);
/*
  Lo mismo pero sin definir las funciones antes
  return {
    sumar: (value) => (result += value),
    restar: (value) => (result -= value),
    multiplicar: (value) => (result *= value),
    dividir: (value) => (result /= value),
  };
*/
  return {
    sumar,
    restar,
    multiplicar,
    dividir,
  };
};

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5));     // Debería imprimir 5
console.log(miCalculadora.restar(2));    // Debería imprimir 3
console.log(miCalculadora.multiplicar(4));   // Debería imprimir 12
console.log(miCalculadora.dividir(2));   // Debería imprimir 6
console.log(miCalculadora.sumar(10));    // Debería imprimir 16
console.log('Ejemplo realizarOperacion');
// pasar una función como parámetro
const realizarOperacion = (num1, num2, operacion) => {
  return operacion(num1, num2);
};

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

let resultadoSuma = realizarOperacion(10, 20, suma); // 30
// let resultadoResta = realizarOperacion(1, 2, resta); // 3
let resultadoMensaje = realizarOperacion(15, 20, function (num1, num2) {
  return `${num1} - ${num2}`;
}); // 10 - 20
console.log(resultadoMensaje);
