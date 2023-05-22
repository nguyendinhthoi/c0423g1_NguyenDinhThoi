// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
let num = +prompt(`Let enter any number (greater than 0)!~~`);
let factorial = 1;

function calFactorial(number) {
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;

    }
    return `Factorial of ${number} is ${factorial}`;
}
alert(calFactorial(num));