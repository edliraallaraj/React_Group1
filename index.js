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

console.log(`${ildasName} age is ${ildasAge}`);


const car = {
  color: "red",
  year: "2017",
  mark: "BMW",
};

let cColor = car.color;
let cYear = car.year;
let cMark = car.mark;

console.log(
  `My car is of type ${cMark}, it's creation year is ${cYear} and its color is ${cColor}`
);


/////////////////////

// Task_1
console.log(`*** Task number 1 ***`);
function goodStudent(student, isGoodStudent)
{
  if (isGoodStudent)
  {
    console.log(`${student} is a good student.`)
  }
  else
  {
    console.log(`${student} is not a good student.`)
  }
}

goodStudent("Ola", true);
goodStudent("Ola", false);


//Task_2
console.log(`*** Task number 2 ***`);
const checkNumber = (number) =>
{
  if (number > 0)
  {
    console.log(`The number: ${number} is positive.`)
  }
  else if (number === 0)
  {
    console.log(`The number: ${number} is zero.`)
  }
  else
  {
    console.log(`The number: ${number} is negative.`)
  }
}

checkNumber(9);
checkNumber(01);
checkNumber(-7);
checkNumber(0);
checkNumber(-500);


//Task_3
console.log(`*** Task number 3 ***`);
const checkPrimeNumber = (number) =>
{
  let isPrime = true;

  if (number < 0)
  {
    console.log(`A negative number is not a prime number.`)
  }

  if (number === 0)
  {
    isPrime = false;
  }

  if (number === 1)
  {
    isPrime = false;
  }

  if(number > 1)
  {
    for (let i = 2; i < number; i++) 
    {
      if (number % i == 0) 
      {
        isPrime = false;
      }
    }
  }

  if (isPrime) 
  {
    console.log(`${number} is a prime number.`);
  } 
  else 
  {
    console.log(`${number} is not a prime number.`);
  }
}

checkPrimeNumber(9);
checkPrimeNumber(1);
checkPrimeNumber(7);
checkPrimeNumber(0);
checkPrimeNumber(3);
checkPrimeNumber(12);
checkPrimeNumber(5);

//Task_4
console.log(`*** Task number 4 ***`);

let listOfNumbers = [ 1, 5, 70, 55, -7, 17, 9, 30, 25];

let minNumber = Math.min(...listOfNumbers);

console.log(`The minimum value in the array of numbers is: ${minNumber}`);


