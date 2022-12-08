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