// for
////  indice  | ejecuta | incremento
console.log('Inicio');
// for (let i = 5; i > 0; i = i - 1) {
//  console.log('Bloque dentro del for');
//}
/*
let count = [];
for (let i = 0; i < 5; i++) {
  console.log('Valor del i: ', i);
  count.push(i);
}


console.log('FIN', count);
*/
const fruits = ['apple', 'banana', 'kiwi', 'watermelon', 'orange', 'Kiwi'];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  if (fruit.toLowerCase() !== 'kiwi') {
    console.log(fruit);
  } else {
    console.log('****');
  }
}

for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  if (fruit === 'orange') {
    break;
  }
  console.log('Fruta: ', fruit);
}

console.log('----Continue y break----');

for (let index = 0; index < 10; index++) {
  // continue
  if (index === 2 || index === 8) {
    // continue;
    break;
  }
  console.log('index', index);
}

console.log('---end continue/break example---');

/*
Enunciado: Dada una lista de números, crea una nueva lista que contenga únicamente los números impares de la lista original.

Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101
*/

// Paso 1: Crea un array llamado numbers que contenga al menos estos números

// Paso 2: Crea un array vacío llamado oddNumbers.

// Paso 3: Utiliza un bucle for para iterar sobre cada número en la lista numbers.

// Paso 4: En cada iteración, verifica si el número actual es impar.
//         Si es impar, agrégalo al array oddNumbers utilizando el método push().
//         NOTA: números pares son aquellos que al dividirlos por 2 el residuo/resto es 0

// Paso 5: Después del bucle, imprime en la consola el contenido del array oddNumbers.
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

/// while

let count = [];
/*
for (let i = 0; i <= 5; i++) {
  count.push(i);
}
*/
// i???
let i = 0;
while (i <= 5) {
  console.log('while:', i);
  // i = i + 1;
  count.push(i);
  i++;
}
/*
while (true) {
  const message = prompt('¿exit? Y o N?');
  if (message === 'Y') break;
  console.log(message);
}
*/
console.log(count);

// piedra papel tijera
// vamos a preguntar al usuario su jugada, que tiene que ser "piedra" o "papel" o "tijera"
// si no es ninguna mostrar un mensaje de "opción incorrecta"
// si el usuario quiere salir que escriba "salir"
// el rival siempre va a tener piedra
// implementar la lógica
// "Ganaste tu tienes papel y el rival piedra"
// "Perdiste tu tienes tiejeras y el rival piedra"
// "Empate ambos tienen piedra"

while(true) {
  const pregunta = prompt("Elije: piedra, papel o tijera");
  const options = ['piedra', 'papel', 'tijera'];
  // if (options.includes(pregunta) === false) {
  if (!options.includes(pregunta)) {
    console.log('Opción incorrecta');
    continue;
  }

  if (pregunta === 'salir') break;

  const rival = "piedra"
  if (rival === pregunta) {
    console.log(`Empate, ambos tienen ${rival}`);
  } else if (
    (rival === 'piedra' && pregunta === 'papel') ||
    (rival === 'tijera' && pregunta === 'piedra') ||
    (rival === 'tijera' && pregunta === 'piedra')
  ) {
    console.log(`Ganaste tu tienes ${pregunta} y el rival ${rival}`);
  } else {
    console.log(`Pierdes tu tienes ${pregunta} y el rival ${rival}`);
  }
}
/*

while (true) {
  let userOption = "";
  const options = ["piedra", "papel", "tijera", "salir"];

  if (!options.includes(userOption)) {
      userOption = prompt("Elija opción correcta: 'piedra', 'papel' o 'tijera'. ");
  }
  else continue;

  if (userOption === "salir") break;
  else if (userOption === "piedra") console.log("Empatamos!");
  else if (userOption === "papel") console.log("Tú ganas!");
  else if (userOption === "tijera") console.log("Yo gano!"); //  solo queda tijerapiedr
}
*/