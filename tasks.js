//Tasks:
// create a function that will check if ola is a good student or not
// create a function that will check if a number is positive, negative or zero
// create a function that will check if a number is prime or not
// create a function that will find the smallest number in an array of numbers
// Bonus add these functions in git in another file called "tasks.js" 


// Task 1
let goodStudent = false; 
const checkStudent = (para) =>{
  if(para){
   return "Ola is good student!!!";
  }
    return "Ola is not good student!"; 
}

console.log(checkStudent(goodStudent));



// Task 2

const checkNum = (num) =>{
  if(num < 0){
    console.log("Number is negative!");
  }else if(num > 0){
    console.log("Number is positive!");
  }else{
    console.log("Number is 0 !");
  }
}

checkNum(0);
checkNum(-3);
checkNum(6);



// Task 3

function checkPrime(n){
  if(n <= 1){
    return "Number is not prime"; //checks if number is negative.
  }
  if(n % 2 == 0 && n > 2){
    return "Number is not prime"; //checks if number is even and greater than 2 (*Here number 2 is excluded because it is the first prime number).
  }
  for(let i=3; i<n; i+=2){
      if(n % i === 0){
        return "Number is not prime"; //checks all the numbers starting from number 3 if they are prime or not.
      }
    }
    return "Number is prime";
}
console.log(checkPrime(29));



//Task 4

let numberArray = [664, 8, 55, 3, 9, 66];

function smallNum(...nArr){
    
    nArr.sort();            //sorts the array from smallest number to the biggest
    return nArr[0];         // by this way the first number of the array is the smallest
}

console.log(smallNum(...numberArray));