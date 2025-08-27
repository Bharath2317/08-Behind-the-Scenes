'use strict';

// function first(birthyear) {
//   const age = 2025 - birthyear;
//   console.log(age);

//   function second() {
//     let out = `Hi! My name is ${firstName} and I am ${age} old`;
//     console.log(out);
//     if (birthyear >= 1981 && birthyear <= 1996) {
//       const firstName = 'Vamsi';
//       var out1 = `${firstName} is millenial`;
//       console.log(out1);

//       thrid(2025);

//       function thrid(currentyear) {
//         const out3 = `${currentyear - birthyear}`;
//         console.log(out3);
//       }
//     }
//     console.log(out1);
//   }
//   // console.log(out1);
//   second();

//   return age;
// }

// const firstName = 'Bharath';

// first(1986);

// console.log(x);

// console.log(age);
// const firstName = 'Bharath';

// Hoisting and tdz

// sum1(4, 5);
// console.log(sum1(2, 3));
// console.log(sum2(2, 3));
// function sum1(a, b) {
//   return a + b;
// }

// const sum2 = function (a, b) {
//   return a * b;
// };
// console.log(sum2(2, 3));

// // console.log(sum3(2, 4));

// const sum3 = (a, b) => a / b;
// console.log(sum3(2, 4));

// THIS KEYWORD

console.log(this);

const calcAge = function (birthyear) {
  let age = 2025 - birthyear;
  console.log(this);
  return age;
};

console.log(calcAge(2004));

const age = birthyear => {
  console.log(2025 - birthyear);
  console.log(this);
};

age(2002);

const john = {
  year: 1999,
  calc: function () {
    console.log(2025 - this.year);
    console.log(this);
  },
};

john.calc();

const age1 = {
  year: 1994,
};

age1.calc = john.calc;
age1.calc();
