/*
TODO: 
- The name, img, and click count will load dynamically 
  only when the name of car is clicked.
- each car will keep count of its vote
*/

// Cars
// let cars = {
//     corvette : {brand: 'Chevy', name: 'Corvette', imgSrc: './img/black-convertible-coupe.jpg'},
//     camero : {brand: 'Chevy', name: 'Camero', imgSrc: './img/chevrolet-camaro.jpg'},
//     charger : {brand: 'Dodge', name: 'Charger', imgSrc: './img/dodge-charger.jpg'},
//     mustang : {brand: 'Ford', name: 'Mustang', imgSrc: './img/ford-mustang.jpg'},
//     benz : {brand: 'Mercedes Benz', name: '300 SL', imgSrc: './img/mercedes-benz.jpg'}
// 


// Chooses Random Car
// var randomNum = Math.floor(Math.random() * cars.length);

// Sends Car to Page
// document.getElementById('car-img').src = cars[randomNum];

let car = {
    init: function (brand, name, imgSrc) {
        this.brand = brand;
        this.name = name;
        this.imgSrc = imgSrc;
    },
};

let corvette = Object.create(car);
corvette.init('Chevy', 'Corvette', './img/black-convertible-coupe.jpg');

console.log(corvette[3]);