// Welcome! This will be a practice sheet for working with TypeScript

// Part 1: Types and Variables
// Example: Make a reassignable variable, named bruh, that equals a string "bruh"
let bruh: string = "bruh"
// TODO 1: Make a reassignable variable, named five, that equals a number 5

// TODO 2: Make a nonreassignable variable, named isTrue, that equals a boolean true


// Part 2: Functions
// Example: Write an empty function (no parameter, no output)
const someFunction = () => {}
function someOtherFunction() {}

// TODO 3: Write your own empty function

// TODO 4: Finish this function, that takes an array of numbers and returns the sum of all the numbers
const sumOfArray = (numbers: number[]) => {
 
};

// TODO 5: Finish this function, that takes an array of numbers and returns the sum of all the numbers
const convertToCelsius = (fahrenheit: number) => {

};

// TODO 6: Write your own function that adds two numbers. Also, annotate the return type



// Part 3: Interfaces
// Example: Write an interface for a car
interface Car {
  brand: string;
  model: string;
  year: number;
  isElectric?: boolean; // Optional property
}

// Object using the interface
let myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

// TODO 7: Write your own interface for a boat, with at least 3 properties. Also make an object that uses the interface

