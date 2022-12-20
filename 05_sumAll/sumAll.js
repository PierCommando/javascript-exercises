const sumAll = function(x, y) {
    let sum = 0
    if (x < 0 || y < 0 || typeof x === 'string' || typeof y === 'string' || isNaN(x) || isNaN(y)) return "ERROR"
    let i = (x < y) ? x : y
    const j = (x < y) ? y : x
    for (; i<j+1; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
