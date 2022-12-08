// Create an object called car   , give it some properties like color, year of creation and mark of it
// Output on the console something like : "My car is of type , its creation year is and its color is"

let cars = [
{
color: "blue",
year: "2015",  
mark: "Audi",
},
{

color: "black",
year: "2012",  
mark: "BMW",
},
{
color: "white",
year: "2009",  
mark: "Mercedes",
},
{
color: "grey",
year: "2018",  
mark: "Range Rover",
},       
{
color: "red",
year: "2011",  
mark: "Wolswagen",
},                
];
    
    
    
console.log(`My car is ${cars [2].mark} its creation year ${cars[1].year} and its color is  ${cars [1].color}`);

<<<<<<< HEAD

// Lesson 2 Functions in JavaScript 
// without parameters
 function showText() {
return "Function is working"
 };

//  We should call the function 
console.log(showText());

//Functions  with parameters
function multiplyNumber(number) {
return  number * 2;
}
console.log(multiplyNumber(4));
console.log(multiplyNumber(2));
console.log(multiplyNumber(8));
console.log(multiplyNumber(6));
console.log(multiplyNumber(9));


//  Arrow functions in JavaScript
const findSum = (a,b) => {
return a + b;
};
console.log(findSum(4,5));
console.log(findSum(15,3));
console.log(findSum(7,2));

// Create a function that find if a number is odd or even
const checkNumber = (a) => {
if(a % 2 === 0) {
  console.log("Number is even");

} else   console.log("Number is odd")

};
checkNumber(3);
checkNumber(2);


//  Tasks
//  Create a function that will Check if Ola is a good student or not
// Create a function that will check if a number is positive. negative or zero
// Create a function that will check if a number is prime or  not
// Create a function that will find the smallest number in an array of numbers
// Bonus* add these functions in git in another file called tasks.js
=======
let arrays = ["test1", "test2"];
>>>>>>> dad459466f9c67126822f72e24f1842be91b8c0e
