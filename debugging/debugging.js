console.log('loading script ...');

// IFFE

const groceries = [
    {name: 'apples', inStock: true, category: 'produce', type: 'fruit'},
    {name: 'oranges', inStock: false, category: 'produce', type: 'fruit'},
    {name: 'potatoes', inStock: true, category: 'produce', type: 'vegtable'},
    {name: 'carrots', inStock: false, category: 'produce', type: 'vegtable'},
    {name: 'pinapple', inStock: true, category: 'produce', type: 'fruit'}
];



// console.table(groceries);

// console.count()
// function doctorize(name) {
//     console.count(`running Doctorize for ${name}`);
//     return `Dr. ${name}`;
// }


// function groceriesList(){
//     console.group('Today groceries list');
//     console.log('Apples');
//     console.warn('diapers');
//     console.error('Coffee');
//     console.groupEnd('Today groceries list');
// }

// groceries.forEach((item, index) => {
//     console.groupCollapsed(`${item.name}`);
//     console.log(item.inStock);
//     console.log(item.category);
//     console.log(item.type);
//     console.groupEnd(`${item.name}`);
// });

// function doctorize(name) {
//     return `Dr. ${name}`;
// }

// function greet(name) {
//     doesntExsist();
//     return `Hello ${name}`;
// }

// function init() {
//     const name = doctorize(greet('Max'));
//     console.log(name);
// }

const fetchDadJoke = async function() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'text/plain',
        },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
    const jokeDOM = (document.body.innerHTML = joke);
    document.getElementById('joke').innerHTML = jokeDOM;
};

const jokeDOM = fetchDadJoke();

document.getElementById('joke').innerHTML = jokeDOM;

// document.getElementById('joke-btn').addEventListener('click', function() {
//     // let li = document.createElement('li');
//     let joke = fetchDadJoke(joke);
//     document.getElementById(empty-list).innerHTML.joke;
// })
