// Model === Data , View === UI, Controller ==== Brain - 



//Model 
const model = {
    currentCar: null,
    cars: [
        {
            clickCount: 0,
            name: 'Coupe Maserati',
            imgSrc: 'img/black-convertable-coupe.jpg',
        },
        {
            clickCount: 0,
            name: 'Camero SS 1LE',
            imgSrc: 'img/chevrolet-camero.jpg',
        },
        {
            clickCount: 0,
            name: '1970 Dodge Charger',
            imgSrc: 'img/dodge-charger.jpg',
        },
        {
            clickCount: 0,
            name: '1966 Ford Mustang',
            imgSrc: 'img/ford-mustang.jpg',
        },
        {
            clickCount: 0,
            name: 'Classic Benz',
            imgSrc: 'img/mercedes-benz.jpg',
        }
    ],
};

// Controller
const controller = {
    init() {
        // set our current car to the first one in the list
        model.currentCar = model.cars[0];

        // tell our views to initalize
        carListView.init();
        carView.init();
    },

    getCurrentCar() {
        return model.currentCar;
    },

    getCars(){
        return model.cars;
    },

    // set the currently-selected car to the object passed
    setCurrentCar(car){
        model.currentCar = car;
    },

    // increments the counter for the currently-selected car
    incrementCounter() {
        model.currentCar.clickCount++;
        carView.render();
    },
};

// Views
const carView = {
    init() {
        // store pointer to our DOM elements for easy access later
        this.carElem = document.getElementById('car');
        this.carNameElem = document.getElementById('car-name');
        this.carImageElem = document.getElementById('car-img');
        this.countElem = document.getElementById('car-count');
        this.elCount = document.getElementById('elCount');

        // onl click increment the current cars counter 
        this.carImageElem.addEventListener('click', function(){
            controller.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render(){
        // update the DOM elements with values from the vcurrent car
        const currentCar = controller.getCurrentCar();
        this.carElem.textContent = currentCar.clickCount;
        this.carNameElem.textContent = currentCar.name;
        this.carImageElem.src = currentCar.imgSrc;
        this.carImageElem.style.cursor = 'pointer';
    },
};

const carListView = {
        init(){
            // store the DOM element for easy access
            this.carListElem = document.getElementById('car-list');
    
            // render this view (update the ODM elements with the right values)
            this.render();
        },
    
    render(){
        let car;
        let elem;
        let i;
        // get the cars we'll be rendering from the controller
        const cars = controller.getCars();
    
        // empty car list
        this.carListElem.innerHTML = '';

        // loop over the cars
        for(i = 0; i < cars.length; i++) {
            // this is the car we're currently looping over
            car = cars[i];

            // make a new car list item and set it's text 
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed'
            elem.style.cursor = 'pointer';
            elem.innerHTML = `<h4>${carName}</h4>`;
            elem.addEventListener('click', (function(carCopy){
                return function() {
                    controller.setCurrentCar(carCopy);
                    carView.render();
                };
            })(car)
            );
            //finally, add the element to the list
            this.carListElem.appendChild(elem);
        }
    }
};

// Run the function!
controller.init();


