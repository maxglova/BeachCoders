
// function calculateBill(meal, taxRate = 0.00725, tipRate) {
//     const tax = meal * taxRate;
//     const wTax = taxRate + meal;
//     const tip = wTax + tipRate;
//     const total = wTax + tip; 
//     return total;
// }

// Function Class citizen
// for defaults nested between values
// you must pass a `undefined` value thorough the function for it to work


// regular function declaration
// using the 'function' keyword
//function doctorize(firstName){
//    return `Dr. ${firstName}`;
//}

// Anonomous Functipon or Non Function
// generally used in callbacks and/or IFFEs (Intermediately invoked function expressions) 
//function (fisrtName){
//    return `Dr. ${firstName}`;
//}

// console.log(doctorize2('Rafael'));

// function expression 
// store the function into a variable
//const doctorize2 = function (firstName) {
//    return `Dr. ${firstName}`;
//}

// Function defined with the keyword `function`
// are called hoisted functions
// JS takes all functions and hoists them up
//function doctorize(firstName) {
//    return `Dr. ${firstName}`;
//}





// Arrow Functions
// arrow function are anonymous functions
// No function keyword
// stored to a variable
// return explicit
// no paranthesis is needed IF only ONE perameter is required

// regular
// const inchToCM = inches => inches * 2.54;

// two perameters 
// const add = (a, b = 3) =>  a + b;

// function that returns an object
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0});

// Console is the Object, Log is the Method 

// Methods are inside an object
const greeting = {
    name: `Poop`,
    salutaion: function(){
        console.log(`Hello ${this.name}`);
        return `Hellow ${this.name}`;
    }
}