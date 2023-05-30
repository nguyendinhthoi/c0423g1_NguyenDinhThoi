function checkPrime(number) {
    let count = 0;
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            count++
        }
    }
    if (count === 2) {
        return true;
    }
}

let arr = [
    [2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 21]
];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (checkPrime(arr[i][j])) {
            count++;
            document.write(`${arr[i][j]} is a Prime Number </br> `)
        }
    }
}
document.write(`We have ${count} number of prime in the array`)


