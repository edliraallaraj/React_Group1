'use strict';

//console.log("Javascript is working...")

// there are 3 ways to declare variable in js:

//var
//let
//const te pa#

//declare --- let fName = "Edlira"; (inicializimi dhenia e vleres) 
//console.log(fName);

//Date types

//let lName = "Allaraj"; //string

//let age = 24; // number

//let isGoodStudent = true; //boolean

//let profession;  // undefined - nukeshte e inicialiazur thjeshte declare

///cfare tipi te dhenash eshte varibla --type of

//let grade = 10
//console.log(typeof (grade))

//let array = [];  //empty array

//let students = [

    "Laura", 
    "Ola", 
    "Klaudio", 
    "Vitjola",
//];

//console.log(students);
//console.log(students[2]);

// push -- shton element

//students.push("Argen");

//students.shift() // removes the first element from array -- unshift e kunderta
//console.log(students);

//students.pop() // removes the last element 
//console.log(students);

// Vitjola is part of react students

//console.log(students[4] +  "is part of React students")

//template literal

//let partOfClass = students[3];
//console.log(`${partOfClass} is part of React Students`);


// Objects

//const student = {
    //fullName: "Albi Mema",
    //profession: "Software Developer",
   // age: 25,
    //city: "Tirana"};

//console.log(student);
//console.log(student.profession);

//const group = {{ fullName: "Albi Mema",  profession: "Software Developer",age: 25,city: "Tirana"},
//{
    //fullName: "Vitjola",
    //profession: "Developer",
    //age: 25,
    //city: "Tirana"
//},
//{
   // fullName: "Klaudio",
   // profession: "Product owner",
   // age: 25,
   // city: "Tirana"
//},
//};



//let klaudiosName = students[3].fullName;
//let klaudiosAge = students[3].age;


/////////////Lesson 2///////////////////////////////////////////////////////////////////////////////////////////////////////


/// EX 1

/// create an objet car give it some propertios like color , yeAR OF CREATION AND mark of it 
// output on the cosole something like: My car is of type (type of car) 


const myCars = {

    {
        cMark: "BMW",
        color: "Black",
        year: 2010,

    },
    {
        cMark: "Merecedez",
        color: "Gold",
        year: 2008,

    },
    {
        cMark: "Honda",
        color: "White",
        year: 2020,
    },
};




let myTypeCar = myCars[1].cMark;
let myColorCar = myCars[1].color;
let myYearCar = myCars[1].year;

console.log(`My car is type ${myTypeCar} its creation years is ${myYearCar} and its color is ${myColorCar}`);