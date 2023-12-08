"use strict";

const firstName = "jonas";
calcAge(1991);

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `he's ${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // this a block scope
      var Millennial = true;
      const firstName = "Kunu";
      const str = `Oh, and your a Millennial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassigning outer scope's variable
      output = "New Output";
    }
    console.log(output);
    //console.log(Millennial); // var are functions scope not like the const and let
    // console.log(add(2, 3));
  }

  printAge();
  return age;
}
