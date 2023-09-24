
let car = {
  brand: 'Ford',
  year: 1969,
  model: 'Mustang',
  firstOwner: 'Keepcoding',
  country: {
    code: 'us',
    name: 'USA'
  },
  'first-owner': 'Otro'
};

console.log(typeof car);
console.log(car);
/*
car.brand = 'Ford';
car.year = 1969;
car.model = 'Mustang';
car.firsOwner = 'Keepcoding';

car.country = {};

console.log(car);

car.country.code = 'US';
car.country.name = 'USA';
*/

console.log(car.year);
console.log(car.country.name);
// console.log(car.year);
// car['first-owner'] = 'Otro';
console.log(car);
console.log(car['first-owner']);
console.log(car.noExiste); // undefined

let user = {
  name: 'Matt',
  age: 25,
  city: 'Madrid',
  hobbies: ['futbol', 'basket'],
};

console.log(user.hobbies.join(', ')); /// 'futbol, basket'

delete user.age;

console.log(user);

let students = [
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

console.log('students[1]', students[1]);
console.log('students[1].courses', students[1].courses);
console.log('students[1].courses[1]', students[1].courses[1]);
console.log('students[1].courses[1].score', students[1].courses[1].score);

for(let i = 0; i < students.length; i++) {
  const student = students[i];
  const courses = student.courses;
  for (let index = 0; index < courses.length; index++) {
    const course = courses[index];
    if (course.score > 70) {
      console.log(student.name, course.name);
    }
  }
}

const randomValue = Math.random() * 3; // valor random que nos da entre 0 y 3
const options = ['piedra', 'papel', 'tijera']; // 0, 1, 2
const randomIndex = Math.floor(randomValue);
console.log(options[randomIndex]);

let user2 = {
  name: 'Matt',
  age: 25,
  city: 'Madrid',
  hobbies: ['futbol', 'basket', 'tenis'],
};

const keys = Object.keys(user2);
const values = Object.values(user2);

console.log(keys);
console.log(values);

const key = 'noExiste';
/* for-in for-of */
console.log('For in');
for (let property in user2) {
  if (property === key) {
    const keyValue = user2[key];
    console.log(`tiene ${key} y el valor es ${keyValue}`);
    break;
  }
  console.log(`no tiene ${key}`);
}

console.log('for of');

const arr = [1, 3, 56, 7];
for (let i of arr) {
  console.log(i);
}

const array = [
  ["-", "-", "*", "-", "-"], // 0
  ["-", "*", "*", "*", "-"], // 1
  ["*", "*", "*", "*", "*"], // 2
];

for (i of array) {
  let line = "";
  for (j of i) {
    line += j;
  }
  console.log(line);
}
