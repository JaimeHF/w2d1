let students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 }
];

// find all student names

// sonia way
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

// // dani way
// students.forEach(student => console.log(student.name));

/////////////////////////////////////////////
// quique way to obtain the sum of all ages
// let total = 0;

// students.forEach(function(student) {
//   total += student.age;
// });

// console.log(total);

// let totalAges = students.reduce(function (ac, student) {
//     return ac + student.age
// }, 0)

// let totalAges = students.reduce((ac, student) => {
//     return ac + student.age
// }, 0)

let totalAges = students.reduce((ac, student) => ac + student.age, 0);

console.log(totalAges);
