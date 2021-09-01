let tempInCelsius, tempInFahrenheit;
function convertFahrenheit(tempInFahrenheit) {
    tempInCelsius = (parseFloat(tempInFahrenheit - 32) * (5 / 9))
    return tempInCelsius;
}
convertFahrenheit(tempInFahrenheit)
console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));
