// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
// CÁCH 1
// a = +prompt(`Let enter a number (turn 1)`);
// b = +prompt(`Let enter a number (turn 2)`);
// c = +prompt(`Let enter a number (turn 3)`);
// let min;
//
// function minofnumber(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         min = num1;
//     } else if (num2 < num3) {
//         min = num2;
//     } else {
//         min = num3;
//     }
//     return `We have ${num1} , ${num2} , ${num3}. The minimum of number is : ${min}`;
// }
//
// alert(minofnumber(a, b, c));
// CÁCH 2:
let a = prompt(`Let enter a number`);
let b = a.split(``);
let min = b[0];

function minFunction(number) {
    for (let i = 0; i < number.length; i++) {
        if (min < a[i]) {
            min;
        } else {
            min = a[i];
        }
    }
    return min;
}

alert(minFunction(b));