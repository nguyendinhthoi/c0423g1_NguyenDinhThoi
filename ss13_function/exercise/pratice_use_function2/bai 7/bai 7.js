// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
let a = +prompt(`let enter any number turn1!~~`);
let b = +prompt(`let enter any number turn2!~~`);

function reverseNum(num1, num2) {
    number = [num1, num2];
    return `Number is ${num1},${num2}. Reverse number of array is ${number.reverse()}`;
}

alert(reverseNum(a, b));
