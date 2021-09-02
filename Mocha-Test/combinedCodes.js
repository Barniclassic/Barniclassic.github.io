"use strict";
module.exports = { calcDownpayment, convertFahrenheit, calcDistance, sumDigits, multDigits };
/**
 * @param {int} cost is the price of the house.
 * @returns {int} payment is the downpayment.
 */
function calcDownpayment(cost) {
    let payment;
    if (cost < 50000) {
        payment = cost * (5 / 100);
    } else if (cost >= 50000 && cost < 100000) {
        payment = 2500 + (cost - 50000) * (10 / 100);
    } else if (cost >= 100000 && cost < 200000) {
        payment = 7500 + (cost - 100000) * (15 / 100);
    } else {
        payment = 5000 + (cost - 200000) * (10 / 100);
    }
    return payment;
}
/**
 * @param {number} input digits to be calculated.
 * @returns {number} the product of the input value.
 */
function sumDigits(input) {
    let sum = 0;
    while (input > 0) {
        sum += input % 10;
        input = parseInt(input / 10);
    }
    return sum;
}
/**
 * @param {number} input digits to be calculated.
 * @returns {number} the product of the input value.
 */
function multDigits(input) {
    let product = 1;
    while (input > 0) {
        product *= input % 10;
        input = parseInt(input / 10);
    }
    return product;
}
/**
 * @param {number} tempInFahrenheit is the measurement for temperature.
 * @returns {number} tempInCelsius is the converted value of temperature. 
 */
function convertFahrenheit(tempInFahrenheit) {
    let tempInCelsius = (parseFloat(tempInFahrenheit - 32) * (5 / 9));
    return tempInCelsius;
}
/**
 * @param {number} pointX1 the first x coordinate.
 * @param {number} pointY1 the first y coordinate.
 * @param {number} pointX2 the second x coordinate.
 * @param {number} pointY2 the second y coordinate.
 * @returns {number} distance between two points.
 */
function calcDistance(pointX1, pointY1, pointX2, pointY2) {
    let distance = Math.pow((Math.pow(pointX2 - pointX1, 2) + Math.pow(pointY2 - pointY1, 2)), 1/2);
    return distance;
}