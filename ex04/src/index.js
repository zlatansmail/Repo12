function sumFibonacci(num) {
    if (num <= 0) {
        return 0;
    }
    var fibArray = [1, 1];
    var nextNum = 0;

    while ((nextNum = fibArray[0] + fibArray[1]) <= num) {
        fibArray.unshift(nextNum);
    }
    return fibArray.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;