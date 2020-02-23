// var cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         category: "economy",
//         price: "$20,000",
//         image: "honda.jpg"
//     },
//     {
//         make: "BMW",
//         model: "M5",
//         category: "Sport",
//         price: "$100,000",
//         image: "BMW.jpg"
//     },
//     {
//         make: "Mercedes",
//         model: "E-Class",
//         category: "Luxury",
//         price: "$50,000",
//         image: "mercedes.jpg"
//     },
//     {
//         make: "Toyota",
//         model: "Rav4",
//         category: "SUV",
//         price: "$30,000",
//         image: "toyota.jpg"
//     },
//     {
//         make: "Audi",
//         model: "A7",
//         category: "Luxury",
//         price: "$80,000",
//         image: "audi.jpg"
//     },
//     {
//         make: "Cadillac",
//         model: "CT-6",
//         category: "Luxury",
//         price: "$60,000",
//         image: "cadillac.jpg"
//     },

// ];

var cars = [];

var carsJSON = localStorage.getItem("cars");
if (carsJSON != null) {
    var cars = JSON.parse(carsJSON);
}

var main = document.getElementById("main");
var toAppend = "";



function addCars(car, i) {
    toAppend += `<div class="car">
                    <div class="flexbox">
                            <h2>${car.make}</h2>
                            <button onclick="deleteCar(${i})">&#10006</button>
                    </div>
                    <div class="flexbox">
                        <figure>
                            <img src="images/${car.image}" alt="">
                        </figure>
                        <div>
                            <p>${car.model}</p>
                            <p>${car.category}</p>
                            <p>${car.price}</p>
                        </div>
                    </div>
                </div>`;
}

createHtml();

function createHtml() {
    toAppend = "";
    cars.forEach(addCars)
    main.innerHTML = toAppend;
}

var form = document.getElementById("formDiv");
var formBtn = document.getElementById("form-btn");

function toggleForm() {
    if (form.style.display == "none") {
        form.style.display = "block";
        formBtn.style.backgroundColor = "red";
        formBtn.innerText = "HIDE FORM";
    } else {
        form.style.display = "none";
        formBtn.style.backgroundColor = "rgb(0, 209, 0)";
        formBtn.innerText = "SHOW FORM";
    }
}

var category = document.getElementById("category");
var make = document.getElementById("make");
var model = document.getElementById("model");
var price = document.getElementById("price");
var photo = document.getElementById("photo");

function addCar() {
    var img = photo.value.split("\\").pop();
    var newCar = new Car (make.value, model.value, category.value, price.value, img);
        // {
        //     make: make.value,
        //     model: model.value,
        //     category: category.value,
        //     price: price.value,
        //     image: img
        // }
    cars.push(newCar);
    createHtml();
    updateLS();
    make.value = "";
    photo.value = "";
    model.value = "";
    category.value = "";
    price.value = "";
}

function Car (_make, _model, _cat, _price, _img) {
    this.make = _make;
    this.model = _model;
    this.category = _cat;
    this.price = _price;
    this.image = _img;
}

function deleteCar(i) {
    cars.splice(i, 1);
    createHtml();
    updateLS();
}

function updateLS() {
    var carsJSON = JSON.stringify(cars);
    var carsJSON = localStorage.setItem("cars", carsJSON);
}