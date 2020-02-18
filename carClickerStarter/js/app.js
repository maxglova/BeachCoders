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



// Picks a car at random
function randomCar() {
  return cars[Math.floor(Math.random() * cars.length)];
};


// Checks that an image is loaded 
function checkSRC() {
  if(carImg.getAttribute('src') == "")
  {
    return carImg.setAttribute('src', randomCar().imgSrc);
  }
};

checkSRC();

// Loads new car
function loadNewCar() {
  carImg.addEventListener('click', function() {
    this.clicks++;
    randomCar();
    return carImg.setAttribute('src', randomCar().imgSrc);
  });
}

loadNewCar();


// Car List
