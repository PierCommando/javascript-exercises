const reverseString = function(str) {
    let strArray = str.split("");
    const arrayReversed = strArray.reverse()
    const strReversed = arrayReversed.join("")
    return strReversed
};

// Do not edit below this line
module.exports = reverseString;
