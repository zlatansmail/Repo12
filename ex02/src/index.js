function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = myCounter(n - 1);
        countArray.unshift(n);
        return countArray;
    }

}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;