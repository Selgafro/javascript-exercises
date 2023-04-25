const convertToCelsius = function(degree) {
  let conversion = ((degree - 32) * 5/9);
  if (conversion % 1 != 0){
    return conversion.toFixed(1);
  } else{
    return conversion
  }
};

const convertToFahrenheit = function(degree) {
  let conversion = (degree * 9/5 + 32);
  if (conversion % 1 != 0){
    return conversion.toFixed(1);
  } else{
    return conversion;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
