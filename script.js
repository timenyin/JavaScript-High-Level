"use strict";

/* === scoping =======

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

*/

// Hosting and TDZ ===
/*
console.log(me);
//console.log(job);
//console.log(year);

var me = "jonas";
let job = "teacher";
const year = 1889;

// for Functions ===
console.log(addDecl(2, 4));
//console.log(addExpr(8, 4));   // are in the TDZ
//console.log(addArrow(5, 4)); // are in the TDZ
console.log(addArrows);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addArrows = (a, b) => a + b;
*/

// Example
// // console.log(undefined);
// if (!sumProduct) deleteshoppingCart();
// var sumProduct = 18;
// function deleteshoppingCart() {
//   console.log("All product deleted");
// }
// Example 2
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);

// ======The THIS KEYWORD =======
console.log(this);

const calage = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calage(1991);
