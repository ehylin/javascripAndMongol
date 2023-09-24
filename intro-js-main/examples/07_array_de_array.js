const matrix = [
  [1, 2, 3, 10], // 0
  [4, 5, 6, 10], // 1
  [7, 8, 9, 10]  // 2
];

// console.log(matrix[1][2]);

// matrix.pop();

console.log(matrix);
console.log('---matrix---');
for (let i = 0; i < matrix.length; i++) {
  const row = matrix[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

console.log('---end matrix---');


// Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo
/*
--*--
-***-
*****

Luego de definirlo recorrerlo para que se pinte como en el dibujo
*/

const arrayArbolito = [
  ['-', '-', '*', '-', '-'],
  ['-', '*', '*', '*', '-'],
  ['*', '*', '*', '*', '*']
];
for (let x = 0; x < arrayArbolito.length; x++) {
  let dibujo = "";
  for (let y = 0; y < arrayArbolito[x].length; y++) {
    dibujo += arrayArbolito[x][y];
  }
  console.log(dibujo);
}

const tree = [
  ["-", "-", "*", "-", "-"],
  ["-", "*", "*", "*", "-"],
  ["*", "*", "*", "*", "*"],
];
// no redifinimos variable dentro del loop
let row = "";
for (let i = 0; i < tree.length; i++) {
  for (let j = 0; j < tree[0].length; j++) {
    row += tree[i][j];
  }
  console.log(row);
  // tenemos que volver a poner el valor inicial al terminar la iteración
  row = "";
}

const hi = ['h','o','l','a'];

console.log(hi.join('')); // h--o--l--a

for (let index = 0; index < tree.length; index++) {
  const row = tree[index];
  console.log(row.join(''));
}
