const fibonacci = function(number) {
    let n1 = 0, n2 = 1, nextTerm;
    console.log(n1);
    console.log(n2);

    for (let i = 1; i <= number; i++){
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
