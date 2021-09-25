/* eslint-disable require-jsdoc */
"use strict";
function Car(name, manufacturer, fuelType, bodyType, seatingCapacity, price) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.fuelType = fuelType;
    this.bodyType = bodyType;
    this.seatingCapacity = seatingCapacity;
    this.price = price;
}
//

let tataTiago = new Car("Tata Tiago", "Tata", "petrol", "hatchback", 5, 5000)
let nexon = new Car("Tata Nexon", "Tata", "diesel", "SUV", 5, 7000)
let mahindra = new Car("Mahindra XUV700", "Mahindra", "petrol", "SUV", 5, 7500)
let mg = new Car("MG ZS EV", "Mahindra", "Electric", "SUV", 5, 25000)
let volvo = new Car("Volvo XC90", "Volvo", "petrol", "hybrid", 7, 35000)


let list = [tataTiago, nexon, mahindra, mg, volvo]

// function getPetrolCarsWithinPrice(list, price) {
//     return list.filter((car) => car.fuelType == "petrol" && car.price < price);
// }
//console.log(getPetrolCarsWithinPrice(list,15000));

// function groupByManufacturer(list) {
//     return list.reduce((accumulator, car) => {
//         let count = accumulator[car.manufacturer];
//         accumulator[car.manufacturer] = count ? count + 1 : 1;
//         return accumulator;
//     }, {});
// }
// console.log(groupByManufacturer(list));

// function sortThemByGivenFilter(list, filter) {
//     if (filter == "price")
//         list.sort((car1, car2) => car1.price - car2.price);
//     else if (filter == "bodyType")
//         list.sort((car1, car2) => car1.bodyType.length - car2.bodyType.length);
//     console.log(list)
// }
// //console.log(sortThemByGivenFilter(list,"bodyType"));
// //console.log(sortThemByGivenFilter(list,"price"));

// function addServiceCostToAllCars(list, serviceCost) {
//     list.forEach(function (car) {
//         car.serviceCost = serviceCost;
//     })
//     console.log(list);
// }
//console.log(addServiceCostToAllCars(list,1000));

function groupOnPrice(list) {
    let newObj = []

    let less = list.filter((car) => {
        if (car.price < 15000) {
            list.reduce((accumulater) => {
            let count = accumulater.below15000;
            accumulater.below15000 = count ? count + 1 : 1
            return accumulater;
            })
        }
        if (car.price > 15000) {
            list.reduce((accumulater) => {
                let count = accumulater.below15000;
                accumulater.below15000 = count ? count + 1 : 1
                return accumulater;
            })
        }
    }, {});
    newObj.push(less);
    return newObj;
}
console.log(groupOnPrice(list));