// ejemplos string

let username = 'KeePCodIng_user';

console.log(username.length); // 15

let number = '12';

console.log(parseFloat(number));

console.log(username.toLowerCase());

console.log(username.toUpperCase());

const word = 'keepcoding';
const lowerCaseUsername = username.toLowerCase();
const includesAWord = lowerCaseUsername.includes(word);

console.log(includesAWord);

let textWithSpaces = `    Hello ${username}       `;
console.log(textWithSpaces.trim());

/*
Ejercicio: Conversor de temperaturas

Escribe un programa que solicite al usuario una temperatura y una escala de temperatura (Celsius o Kelvin) a la que quiera cambiar esa temperatura.

El programa hace 2 preguntas:
"Ingresa la temperatura:"
"Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"

Casos para probar:

Ingresa la temperatura 🌡: 0  
Ingresa la escala a la que quieras cambiar tu temperatura (C o K): k

La temperatura en Kelvin es: 273.15K

Ingresa la temperatura 🌡:  "  283.15"
Ingresa la escala a la que quieras cambiar tu temperatura (C o K): "     c   "

La temperatura en Celsius es: 273.15°C
*/
let temperatura = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt("Ingresa la escala a la que quieras cambiar tu temperatura (C o K):").toUpperCase().trim();

if (isNaN(temperatura)) {
  console.log('Pon un número');
} else if (escala === "C") {
  let kelvin = temperatura + 273.15;
  console.log(temperatura + " °C son " + kelvin + " K");
} else if (escala === "K") {
  let celsius = temperatura - 273.15;
  console.log(temperatura + " K son " + celsius + " °C");
} else {
  console.log("Escala no válida. Por favor, ingresa 'C' o 'K'.");
}
