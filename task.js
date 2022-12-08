// Tasks: 
// Create a function that will check if Ola is a good student or not
// Create a function that will check if a number is positive, negative or zero
// Create a funtion that will check if a number is prime or not 
// Create a function that will find the smallest number in an array of numbers
// /Bonus * Add these functions in git in another file called "tasks.js"








// Create a function that will check if a number is positive, negative or zero

const checkNumr=function(number){

if (number < 0) {
    
        console.log("The number is negativ");
    } else if (number > 0) {
        console.log("The number is positiv");
    }
 else {
    console.log("The number is 0");
}
}
;
checkNumr(4)
checkNumr(-1)
checkNumr(0)

// Create a funtion that will check if a number is prime or not 
const primeNumber =function (n) {
    for (var i = 2; i < n; i++) { 
      if(n % i === 0) return false; 
    }
    return n > 1; 
  }
  
  console.log(primeNumber(1));  
  console.log(primeNumber(2));  

// Create a function that will find the smallest number in an array of numbers
const numbers=[12,13,5, 7,10]
 const smallestNumber=function(values){
    let smallest=numbers[2]
    for(let i=0; i<numbers.length; i++){
        if(smallest>numbers[i]){
            smallest=numbers[i]
        }
        
    }


    return smallest;



 }
 console.log(smallestNumber(numbers) )



 