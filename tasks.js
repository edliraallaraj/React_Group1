//  Tasks
//  Create a function that will Check if Ola is a good student or not
const goodStudent = (check) => {
if(check=== true) {
console.log(`Ola is a good student`);   
} else {
console.log(`Ola isn't a good student`);   
}
};
    
goodStudent(true);

// Create a function that will check if a number is positive. negative or zero
const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
console.log("The number is positive");
}
else if (number === 0) {
console.log("The number is zero");
}
else  {
console.log("The number is negative")
};



// Create a function that will check if a number is prime or  not
function isPrime(num) {
if (num <= 1) 
return false;
if (num == 2) 
return true;
for (let i = 2; i <= num / 2; i++) {
if (num % i == 0) {
return false;  
}
}
return true;
}
console.log(isPrime(2));
console.log(isPrime(135));
// Create a function that will find the smallest number in an array of numbers
let arr = [20, 14, 38, 26, 8, 101, 15, 88, 11];
let smallest = arr[0];
for(let i = 1; i < arr.length; i++){
if(arr[i] < smallest){
smallest = arr[i];
}
}
console.log(smallest);


// Bonus* add these functions in git in another file called tasks.js
