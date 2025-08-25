'use strict';

function first(birthyear) {
  const age = 2025 - birthyear;
  console.log(age);

  function second() {
    let out = `Hi! My name is ${firstName} and I am ${age} old`;
    console.log(out);
    if (birthyear >= 1981 && birthyear <= 1996) {
      const firstName = 'Vamsi';
      var out1 = `${firstName} is millenial`;
      console.log(out1);

      thrid(2025);

      function thrid(currentyear) {
        const out3 = `${currentyear - birthyear}`;
        console.log(out3);
      }
    }
    console.log(out1);
  }
  // console.log(out1);
  second();

  return age;
}

const firstName = 'Bharath';

first(1986);

// console.log(x);

// console.log(age);
// const firstName = 'Bharath';
