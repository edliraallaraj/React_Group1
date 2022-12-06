// .........Task2.........


//Ex1: Create a function that will check if Ola is a Good student or not

const isGood =(name,mark) => {
       
    if ((mark >=8) && (mark <= 10)){
        console.log(`${name} is a good student`); 
    }
     else{
        console.log(`${name} isn't a good student`);

     }
   };
   isGood("Ola",9);
   isGood("Klea",7);
  

//Ex2: Create a function that will check if a number is positive,negative,zero

const numberType=(number)=>{
    typeof number ==="number";
    if ( number === 0){
        console.log("The given number is zero");
    }
    if ( number > 0 ){
         console.log (`${number} is a positive number`);  
    }
    else if ( number < 0 ) {
        console.log(`${number} is a negative number`);   
    }
};
numberType(0);
numberType(-200);
numberType(100);

//Ex3: Create a function that will check if a number is prime or not
const primeNumber = (num) =>{
     let i,res;
    
    //check if number is equal to 1,0 or negative 
     if (num<=1){
         console.log(`${num} is not a prime number`); 
     }
     //check if number is 2
    else if (num===2){
         console.log(`${num} is a prime number`);
     }
     //check for positive numbers bigger than 2
      else {
        for( i=2;i<num;i++){
             if(num % i===0){
                res=`${num} is not a prime number`; 
                break;
            }else{
                res=`${num} is a prime number`;
             }
             }
             console.log(res); 
              }
          };
          
     primeNumber(0);
     primeNumber(1);
     primeNumber(-5);
     primeNumber(5);
     primeNumber(2);
     primeNumber(12);
     primeNumber(37);
     primeNumber(4);
 
//Ex4: Create a function that will find the smallest number in an array of numbers
const theSmallest=()=>{
    const array =[4,15,7,33,1,12,6];
    let i;
    let min=array[0];
    for(i=1;i<array.length;i++){
        if(array[i]<min){
           min=array[i];
            }
        }
        console.log(min);
        
    };
    theSmallest();
