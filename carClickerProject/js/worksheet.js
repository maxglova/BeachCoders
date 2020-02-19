/*
TODO: 
- The name, img, and click count will load dynamically 
  only when the name of car is clicked.
- each car will keep count of its vote
*/


//Helpers
const carImg = document.getElementById('car-img');
const carList = document.getElementById('car-list');
const carCount = document.getElementById('car-count');


const cars = [
  {name: 'Corvette', imgSrc: './img/black-convertible-coupe.jpg', clicks: 0},
  {name: 'Camero', imgSrc: './img/chevrolet-camaro.jpg', clicks: 0},
  {name: 'Charger', imgSrc: './img/dodge-charger.jpg', clicks: 0},
  {name: 'Mustang', imgSrc: './img/ford-mustang.jpg', clicks: 0},
  {name: 'Benz', imgSrc: './img/mercedes-benz.jpg', clicks: 0},
];

const currentCar = cars[0];


// Picks a car at random
function randomCar() {
  return cars[Math.floor(Math.random() * cars.length)];
};


// Check that a image is loaded 
function checkSRC() {
  if(carImg.getAttribute('src') == "")
  {
    return carImg.setAttribute('src', randomCar().imgSrc);
  }
};

checkSRC();

// Increment Car Count
function increaseCarCount(cars) {
  cars.currentCar.clicks++;
};

// Triggers Car Count
function carIsClicked() {
  carImg.addEventListener('click', function() {
    increaseCarCount();
  });
};

carIsClicked();




// Car list
const createCarList = (function(){
  const li = this.createElement('li');
  let el = li.textContent;
  if(i = 0, i < cars.length, i++) {
     
  }

}());
