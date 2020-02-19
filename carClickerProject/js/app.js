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

// Car list
const createCarList = function (){
  let car;
  carList.innerHTML = '';

  // Loop through cars
  for(i=0; i < cars.length; i++) {
    car = cars[i];
  };

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between lh-condensed';
  li.style.cursor = 'pointer'; 
  li.innerHTML = `<h4>${car}</h4>`;
  li.addEventListener('click', (function(carCopy){
    return function() {
      currentCar(carCopy);
    };
  }(cars))
  );
  return carList.appendChild(li);

};

createCarList();





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