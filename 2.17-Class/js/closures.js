// CLOSURE
// A closure is the ability to access a parentl\ level scope from a 
// child scope even after the parent function has been terminated.
 

// function outer() {
//     const outerVar = "I am the outerVar!";
//     function inner() {
//         const innerVar = "I am the innerVar!"
//         console.log(innerVar);
//         console.log(outerVar);
//     }
//     return inner; // calling the function, not running it
// }

// const innerFn = outer();




// function createFullName(name = '') {
//     const firstName = name.toUpperCase();
//     return function (last) {
//         return `${firstName} ${last}`;
//     }
// }

// const myName = createFullName('Max');
// console.log(myName('Glova'));




// private variables 
// function createGame(gameName) {
//     let score = 0;
//     return function win() {
//         score++;
//         return `You name ${gameName} score is ${score}`;
//     }
// }

// const basketballGame = createGame('basketball');
// const soccerGame = createGame('soccer');




// clear the screen
document.body.innerHTML= '';

let nums = [1, 2, 3];

// Loop 
for (let i = 0; i < nums.length; i++) {
    // this is the number we're on
    var num = nums[i];

    // Create DOM elements for the number
    let elem = document.createElement('div');
    elem.textContent = num;

    // when we click, alert the value of 'num'
    elem.addEventListener('click', (function(numCopy){
        return function(){
            alert(numCopy);
        }
    })(num));
    document.body.appendChild(elem);
}