function findMin(number) {
    let min = number[0][0];
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < number[i].length; j++) {
            if (min > number[i][j]) {
                min = number[i][j];
            }
        }
    }
    return document.write(`The min is ${min} </br>`)
}

function findMax(number) {
    let max = number[0][0]
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < number[i].length; j++) {
            if (max < number[i][j]) {
                max = number[i][j];
            }
        }
    }
    return document.write(`The max is ${max} </br>`)
}

let arr = [
    [2, 3, 4],
    [7, 8, 9]
]

findMax(arr)
findMin(arr)

