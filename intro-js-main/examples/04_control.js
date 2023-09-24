// ejemplos de if, else if, else, switch
let edad = 30;

console.log('Inicio');

/// `` , "", ''

if (edad >= 18) {
  // codigo
  let edad = 1;
  let legalAge = 18;
  console.log(`Eres mayor de edad con "${edad}" años`);
} else if (14 <= edad) {
  console.log('Eres adolescente');
} else {
  console.log('No eres "mayor" de edad');
}

// ternario
const resultado = edad === 30; // true o un false
const message = resultado ? 'Tienes mi edad' : 'No tienes mi edad';

console.log(message);

console.log('<---example--->');

let value = Infinity;

if (value) {
  console.log(`Value: ${value}`);
} else {
  console.log('Else ->', value);
}

// switch
// let day = prompt('Give me a day of the week');
let day = "Monday";

if (day === "Monday") {
  console.log("It's monday");
} else if (day === "Tuesday") {
  console.log("It's Tuesday");
} else if (day === "Wednesday") {
  console.log("It's Wednesday");
} else {
  console.log("It is neither Monday, Tuesday nor Wednesday");
}

switch (day) {
  case "Monday":
    console.log("It's monday switch");
    break;
  case "Tuesday":
    console.log("It's Tuesday switch");
    break;
  case "Wednesday":
    console.log("It's Wednesday switch");
    break;
  default:
    console.log("It is neither Monday, Tuesday nor Wednesday switch");
    break;
}

/*
Ejercicio: Conversor de temperaturas

Escribe un programa que solicite al usuario una temperatura y una escala de temperatura (Celsius o Kelvin) a la que quiera cambiar esa temperatura.

El programa hace 2 preguntas:
"Ingresa la temperatura:"
"Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"

Casos para probar:

Ingresa la temperatura 🌡: 0
Ingresa la escala a la que quieras cambiar tu temperatura (C o K): K

La temperatura en Kelvin es: 273.15K

Ingresa la temperatura 🌡: 283.15
Ingresa la escala a la que quieras cambiar tu temperatura (C o K): C

La temperatura en Celsius es: 273.15°C


*/
let temperatura = parseFloat(prompt("Ingresa la temperatura 🌡:")); // 10
let escala = prompt("Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"); // C
/*
switch (escala) {
  case "C":
      console.log('Temperature = ', temperatura - 273.15)
      break;
  case "K": 
      console.log("Temperatura = ", temperatura + 273.15)
      break;
  default:
      console.log("Pon un valor correcto de escala");
      break;
}
*/

temperatura = escala === "C" ? temperatura - 273.15 : temperatura + 273.15;

console.log(temperatura);
