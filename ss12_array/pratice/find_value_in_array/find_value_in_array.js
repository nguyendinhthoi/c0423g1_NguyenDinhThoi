// let value = prompt(`enter a number: `);
// let numbers = [-3, 5, 1, 3, 2, 10];
// for (let i = 0; i < numbers.length; i++){ ;
// if (value == numbers[i]) {
//     alert(`Value ` + numbers[i] + `found at ` + i);
// }
// }


let value = prompt(`enter a number: `);
let numbers = [-3, 5, 1, 3, 2, 10];
let index = -1;
for (let i = 0; i < numbers.length; i++) {
    if (value == numbers[i]) {
        index = i;
    }
}
if (index > -1) {
    alert(`Value ` + value + ` found at ` + i);
} else {
    alert(`Value ` + value + ` not found`);
}