const convertToCelsius = function(n) {
  let converted = (n - 32) * (5/9)
  let rounded = Math.round(converted * 10)/10
  return rounded
};

const convertToFahrenheit = function(n) {
  let converted = (n * (9/5) + 32)
  let rounded = Math.round(converted * 10)/10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
