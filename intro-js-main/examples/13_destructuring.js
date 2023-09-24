/// destructuring
const arr = [
  'message1',
  'message2',
  'message3'
];

arr[0]; // message1
arr[1]; // message2
arr[4]; // undefined
const user = { name: 'Matt', age: 30 };

user.name; // Matt
user.age; // 30

const [position1, position2] = arr;

console.log(position1); // message1
console.log(position2); // message2

const { age, name: firstName } = user;

console.log(firstName); // Matt
console.log(age); // 30
console.log(user);

const [libro1, libro2, ...libros] = [
  { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', año: 1925 },
  { titulo: '1984', autor: 'George Orwell', año: 1949 },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
  { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', año: 1997 },
  { titulo: 'El código Da Vinci', autor: 'Dan Brown', año: 2003 },
  { titulo: 'Crepúsculo', autor: 'Stephenie Meyer', año: 2005 },
  { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', año: 2008 }
];

const post2kTitles = libros
  .filter(({ año }) => año > 2000)
  .map(({ titulo }) => titulo);

const calculadora = () => {
  let result = 0;
  const sumar = (value) => (result += value);
  const restar = (value) => (result -= value);
  const multiplicar = (value) => (result *= value);
  const dividir = (value) => (result /= value);
  return {
    sumar,
    restar,
    multiplicar,
    dividir,
  };
};

const { restar, multiplicar } = calculadora(); // { sumar, restar, multiplicar, dividir }

restar(10);
multiplicar(5);

const transactions = [
  { id: 'trx001', amount: 100, description: 'Purchase 1' },
  { id: 'trx002', amount: 50, description: 'Purchase 2' },
  { id: 'trx003', amount: 200, description: 'Purchase 3' },
];

const transaction1 = { id: 'trx001', amount: 100, description: 'Purchase 1' };

const { id, ...rest } = transaction1;

const transactionNuevo = structuredClone(rest);

console.log('transactionNuevo', transactionNuevo);

// usando reduce
const result = transactions.reduce((acc, { id, ...rest }) => {
  acc[id] = rest;
  return acc;
}, {});

console.log(result);

const useProfile = () => {
  let data = 0;
  const setData = (value) => data = value;
  return [data, setData];
};

const [data, setData] = useProfile(); // [data, setData]

/*
const result = {
  trx001: { amount: 100, description: 'Purchase 1' },
  trx002: { amount: 50, description: 'Purchase 2' },
  trx003: { amount: 200, description: 'Purchase 3' }
}
*/

let [{ age: firstStudentAge, courses: [{ score }] }] = [
  {
    name: "Juan",
    age: 20,
    courses: [
      {
        name: "Mates",
        score: 95
      },
      {
        name: "History",
        score: 85
      }
    ]
  },
  {
    name: "María",
    age: 22,
    courses: [
      {
        name: "Mates",
        score: 100
      },
      {
        name: "History",
        score: 70
      }
    ]
  }
];

// console.log(students[0].age);
console.log(firstStudentAge);
// console.log(students[0].courses[0].score);
console.log(score);

