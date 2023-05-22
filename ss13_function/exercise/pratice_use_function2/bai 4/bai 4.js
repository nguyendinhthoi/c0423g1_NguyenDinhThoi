// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không.
// Nếu là ký tự số hàm trả về true, ngược lại trả về false.

let a = +prompt(`Let enter any number !~~`);

function checkNumber(number) {
    if (number % 1 === 0) {
        return `Alright, You're a good boy!~~`;
    } else {
        return `Please enter any number again!~~`;
    }
}

alert(checkNumber(a));
