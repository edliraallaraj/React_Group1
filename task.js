// Tasks:
// create a function that will check if Ola is a good student or not
// create a function that will check if a number is positive, negative or zero
// create a function that will check if a number is prime or not
// create a function that will find the smallest number in an array of numbers

// BONUS add these functions in git in another file called "tasks.js"

// create a function that will check if Ola is a good student or not
const studentCheck = (student) => {
    return `Ola is a ${student} student`;
}

console.log(studentCheck("good"));
console.log(studentCheck("bad"));

// create a function that will check if a number is positive, negative or zero
const numberCheck = (a) => {
    if(a === 0) {
        console.log(`${a} is zero`);
    } else 
    if(a > 0) {
        console.log(`${a} is positive`);
    } else console.log(`${a} is negative`);
}

numberCheck(0);
numberCheck(-5);
numberCheck(3);

// create a function that will check if a number is prime or not
const primeNumber = (a) => {
    let isPrime = true;
    for(let i = 2;i < a/2;i++) {
        if(a % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
     console.log(`${a} is a prime number`);
    }
    else
    console.log(`${a} isnt a prime number`);
}

primeNumber(17);
primeNumber(20);
primeNumber(100);
primeNumber(13);

// create a function that will find the smallest number in an array of numbers
let arrayNum = [1,7,12,0,-3,4,9];

const smallestNum = (arrayNum) => {
    let min = arrayNum[0];
    for(let i = 0; i < arrayNum.length; i++) {
        if(arrayNum[i+1] < arrayNum[i])
        min = arrayNum[i+1];
    }
    return min;
}

console.log(smallestNum(arrayNum) + " is the smallest number");