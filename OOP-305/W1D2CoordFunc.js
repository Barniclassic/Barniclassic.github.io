let distance;
let x1, y1, x2, y2;

function calcDistance(x1, y1, x2, y2) {
    distance = ((x2 - x1) ** (2) + (y2 - y1) ** (2)) ** (1 / 2);
    return distance;
}
calcDistance(x1, y1, x2, y2)
console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5));