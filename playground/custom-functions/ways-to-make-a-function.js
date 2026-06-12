console.log('ways to make a function working');

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// const inchToCM = function inchToCM(inches) {
//   return inches * 2.54;
// };

// Arrow Function
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;

// returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };

//   return baby;
// }

// const makeABaby = (first, last) => ({
//   name: `${first} ${last}`,
//   age: 0,
// });

// IFIE
// Immediately Invoked Function Expression
(function () {
  console.log('Running the Anon function');
  return 'You are';
})();
