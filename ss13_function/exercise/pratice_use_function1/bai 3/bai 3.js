// Bài 3: Tạo hàm nhận vào hai tham số.
// Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.
// Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
let x = +prompt(` Let 'a' enter any number !~~ `);
let y = +prompt(` Let 'b' enter any number!~~ `);

function letSum(a, b) {
    if (a > b) {
        return `${a} > ${b}. Please enter a < b ~~`;
    } else {
        sum = a + b;
        return `Sum of ${a} and ${b} is: ${sum} `;
    }
}

alert(letSum(x, y));