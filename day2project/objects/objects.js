
//Objects

const Person = {
    first: 'Rafael',
    last: 'Hernandez',
    age: 100,
};

// Defining Functions
function calculateBill(meal, taxRate) {
    // function body or block
    const total = meal * (1 * taxRate); 
    return total;
};

const myMeal = 100; 
const myTax = 0.13; 

const myTotal = calculateBill(myMeal, myTax);

function doctorize(name) {
    return `Dr. ${name}`;
};

function yell(name) {
    return `HEY ${name.toUpperCase()}`;
}

