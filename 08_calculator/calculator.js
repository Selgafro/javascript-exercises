const add = function(ad1, ad2) {
	return ad1 + ad2;
};

const subtract = function(sub1, sub2) {
	return sub1 - sub2;
};

const sum = function(myArr) {
  let Sum = 0;
  myArr.forEach(item => {
    Sum += item;
  });
  return Sum;
};

const multiply = function(myArr) {
  let Multiplication = myArr.reduce((a,b) => a*b);
  return Multiplication;
};

const power = function(initial, pwr) {
  return initial ** pwr;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--){
    num *= i;
  }  
  return num;
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
