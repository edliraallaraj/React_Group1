'use strict';
// sherben pr erroret

console.log("Jacascript is working");

// there are three ways of declaring a variable in js

// var 
// let - lejon variablat te rideklarohen dhe riinicializohen
// const -pr variabla qe nuk ndryshohen

let fName = "Ilda";
console.log(fName);

// data types in js

let lName = "peti"; //string
let age = 19; //number
let isGoodStudent = true; //boolean
let profession; //undefined
console.log(profession);
let grade = 10; //number
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
  
  console.log(student);
  console.log(student.profession);
  
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
      age: 19,
      city: "Tirane",
    },
    {
      fullName: "Vitjola Peshtani",
      profession: "Product Owner",
      age: 28,
      city: "Tirane",
    },
  ];
  
  // Ilda's age is 19
  
  let ildasName = students[1].fullName;
  let ildasAge = students[1].age;
  
  console.log(`${ildasName} age is ${ildasAge}`);

////////////////////////////// Lesson 2 ///////////////////////////////////////////////////////

// create an object called car, give properties like color, year of creation, and mark of it.
// output on the console smth like: "My car is of type (type of the car), its creation year is ..... and its color is ....."
// objektet me mir deklarohen me const se sa let
const car = {
    color: "white",
    yearOfCreation: "2017",
    mark: "benz",
};

let carColor = car.color;
let carYear = car.yearOfCreation;
let carMark = car.mark;

console.log(`My car is of type ${carMark} its creation year is ${carYear} and its color is ${carColor}`);
