// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không.
// Nếu là nguyên dương trả về true, ngược lại trả về false.
let a = +prompt(`Let enter any number ( greater than 0)`);

function checkNumber(num) {
    if (num > 0) {
        return `You're handsome!~~~~ <3`;
    } else {
        return `Let enter a number other greater than 0 again!~~`;
    }
}

alert(checkNumber(a));