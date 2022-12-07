// 1- Create a function that will check if Ola is a good student or not
const student = (grade) => {
if (grade > 4 && grade <= 10){
    return "Ola is a good student"
}if (grade = 4){ 
    return "Ola is not a good student"
}
 
};
console.log("When grade is 4 - ",student(4));
console.log("When grade is between 5 and 10 - ",student(5));
// 2- Create a function that wil check if a number is positive, negative or zero
const positiveOrNegative = (a) => {
    if(a > 0 ){
        return "Number is positive"
    } if  (a < 0){
        return "Number is negative"
    } else return "Number is zero"

  };

  console.log('3 - ',positiveOrNegative(3)); 
  console.log('-3 - ',positiveOrNegative(-3)); 
  console.log('0 - ',positiveOrNegative(0)); 

// 3- Create a function that will check if a number is prime or not
  const prime = (a) => {
    if(a % 2 ===0 ){
        return "Number is  not prime"
    } else return "Number is prime  "

  };

  console.log('3 -',prime(3)); 
  console.log('4 -',prime(4)); 

// 4- Create a function that will find the smallest number in an array of numbers
const numbers = [2, 3, 8, 7, 0, 34, 12];
const smallestNumber = Math.min(...numbers);

console.log('Smallest number in array - ', smallestNumber); 
//Bonus….Add these functions in git in another file called task.js
