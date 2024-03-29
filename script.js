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

// ======The "THIS" KEYWORD =======
/*
console.log(this);

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calAge(1991);

const calAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // this will not work because the arrow function use the lexical function
};

calAgeArrow(1991);

const harmony = {
  // this  the object
  year: 1993,
  calcAge: function () {
    // this the method
    console.log(2024 - this.year);
    console.log(this);
  },
};
harmony.calcAge();

const precious = {
  year: 1995,
};

precious.calcAge = harmony.calcAge; // this called method browning
precious.calcAge();

const f = harmony.calcAge;


// ====================================
const harmony = {
  // this  the object
  firstName: "Harmony",
  year: 1993,
  calcAge: function () {
    // this the method
    console.log(2024 - this.year);
    //console.log(this);

    const self = this;
    // solution 2 that nee extra variable
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillennial = () => {
      // arrow function inherits
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  },
  greet: () => console.log(`hey ${this.firstName}`), // won't work because is a arrow function is been used
};

harmony.greet();
harmony.calcAge();
*/

// Arguments "THIS keywords"
/*
var addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 9, 10);
var addArrow = (a, b) => {
  //console.log(arguments); not that important in javascript
  return a + b;
};

addArrow(2, 3, 5);

// PRIMITIVES VS OBJECTS (PRIMITIVE VS REFERENCE TYPES)
// console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(1993);

// the arrow function method
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAgeArrow(1999);

// ======use in Method =======
const harmony = {
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2032 - this.year);
  },
};

harmony.calcAge();
console.log(harmony.year);

const preciousX = {
  year: 1995,
};

preciousX.calcAge = harmony.calcAge;
preciousX.calcAge();

// const f = harmony.calcAge;
// f();

*/

// ======= REGULAR FUNCTION VS ARROW FUNCTION ========
/*
const harmony = {
  firstName: "Kunu",
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    const self = this; // previous ES^6 solution 1

    const isMillennial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillennial();

    // Using Arrow Function for  ES^6 solution 2
    // ** Note *** arrow function uses the 'this' keyword form is parent scoop

    const isMillennial2 = () => {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillennial2();
  },

  // === not using the arrow function to call the 'this' keyword
  greet: () => console.log(`hey ${this.firstName}`),
};

harmony.greet();
harmony.calAge();

// Arguments "THIS keywords"
var addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 9, 10);
var addArrow = (a, b) => {
  //console.log(arguments); not that important in javascript
  return a + b;
};

addArrow(2, 3, 5);

*/

// ======== PRIMITIVE VS OBJ (PRIMITIVE VS REFERENCE TYPES) =======
// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "harmony",
//   age: 30,
// };

// const friend = me;
// friend.age = 34; // source of confusion
// console.log(me.age, friend.age);

let lastName = "harmony";
let oldLastName = lastName;
lastName = "Timenyin";
console.log(lastName, oldLastName);

const precious = {
  firstName: "Kunu",
  lastName: "orishebumin",
  age: 26,
};

const marriedPrecious = precious;
marriedPrecious.lastName = "Emmanuel";
console.log("Before Marriage:", precious);
console.log("After Marriage", marriedPrecious);

// ======== Copy Object
const precious2 = {
  firstName: "Kunu",
  lastName: "orishebumin",
  age: 26,
  family: ["ot", 'bob"s'],
};

// to copy new object
const preciousCopy = Object.assign({}, precious2);
preciousCopy.lastName = "Emmanuel";
console.log("Before Marriage:", precious2);
console.log("After Marriage", preciousCopy);

preciousCopy.family.push("sherry");
