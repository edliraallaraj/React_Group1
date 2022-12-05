// "use strict";

// console.log("JavaScript is working...");

// //  There are three ways of declaring a variable in js:

// // var -- DON't USE IT !!!
// // let
// // const

// let fName = "Edlira";
// console.log(fName);

// // Data types in js

// let lName = "Allaraj"; // string

// let age = 26; // number

// let isGoodStudent = true; // boolean

// let profession; //  undefined
// console.log(profession);

// let grade = 10;
// console.log(typeof grade);

// let array = []; // empty array

// let students = [
//   "Laura",
//   "Ola",
//   "Eduart",
//   "Klaudio",
//   "Ariana",
//   "Albi",
//   "Kristi",
//   "Albi",
//   "Klaudio",
//   "Arlind",
//   "Vitjola",
//   "Ilda",
//   "Juli",
// ];

// console.log(students);
// console.log(students[2]);

// // Push  - adds  an element at the end of the array

// students.push("Argen");

// // Removes the first element of the array
// students.shift()
// console.log(students);

// // Adds an element at the beginning of the array
// students.unshift("TEst");
// console.log(students);

// // Pop - removes the last element of the array
// students.pop();
// console.log(students);

// // Vitjola is part of React students

// console.log(students[10] + " is part of React students")

// // Template literal
// let partOfClass = students[10];
// console.log(`${partOfClass} is part of React students`);

// Objects

const student = {
  fullName: "Albi Mema",
  profession: "Software Developer",
  age: 25,
  city: "Tirane",
};

// console.log(student);
// console.log(student.profession);

const students = [
  {
    fullName: "Albi Mema",
    profession: "Software Developer",
    age: 25,
    city: "Tirane",
  },
  {
    fullName: "Ilda Peti",
    profession: "Software Engineer",
    age: 21,
    city: "Tirane",
  },
  {
    fullName: "Vitjola Peshtani",
    profession: "Product Owner",
    age: 28,
    city: "Tirane",
  },
];

// Ilda's age is 21

let ildasName = students[1].fullName;
let ildasAge = students[1].age;

// console.log(`${ildasName} age is ${ildasAge}`);


////////////////////    LESSON 2 ////////////////////////////////////////////


const car = [
  {
    model: "AUDI",
    year: 2017,
    color: "midnight",
  },

  {
    model: "BMW",
    year: 2020,
    color: "black",
  },

  {
    model: "DACIA",
    year: 2014,
    color: "yellow",
  },
]

let carModel = car[0].model;
let carColor = car[0].color;
let carYear  = car[0].year;

  console.log(`My car is type ${carModel}, its year is ${carYear} and its color is ${carColor}.`);
