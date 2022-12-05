////////////////////////////////////Leksioni 2
//USH 1: Create an obj called car, give it some propeties like color, year of creation and mark of it 
//output on the console something like: "My car is of type(type of the car), its creation year is....and its color is...."

let car =[
    {
        color:"red",
        year:"80",
        mark:"BENZ",
    },
    {
        color:"black",
        year:"70",
        mark:"BMW",
    },
    {
        color:"white",
        year:"60",
        mark:"OPEL",
    },
];

let carColor= car.color;
let carYear= car.year;
let carMark= car.mark;

console.log(`My car is of type ${carMark}, its creation year is${carYear} and its color is ${carColor}`
);