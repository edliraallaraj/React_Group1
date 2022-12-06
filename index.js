const car={
    color:"blue",
    yearOfCreation: "2010",
    mark:"Ford",
}

let cMark = car.mark;
let cYear = car.yearOfCreation;
let cColor= car.color;

console.log(`My car is of type ${cMark},its creation year ${cYear},and its color ${cColor}`);
let arrays = ["test1", "test2"];
// Function in JS

function showText(){
    return "Function is working..."
};

//we call the function
console.log(showText());
//Function with numbers
function multiplyNumber(number){
    return number*2;

}
console.log(multiplyNumber(4));
console.log(multiplyNumber(5));

//Arrow Functions in JS
 
const findSum=(a,b) =>{
    return a+b;
};

console.log(findSum(4,5));

//create a function that finds if a number is odd or even

const checkNumber =(a)=>{
    if(a%2===0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    
    }
};
    checkNumber(2);
    
    
    
    //tasks
    //Create a function that will check if Ola is a Good student or not
    //Create a function that will check if a number is positive,negative,zero
    //Create a function that will check if a number is prime or not
    //Create a function that will find the smallest number in an array of numbers
    //CBonus Add these function in git in another file called "task.js"

    

    



