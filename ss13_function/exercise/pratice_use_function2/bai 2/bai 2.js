// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
let num = +prompt(`Let enter radius!~~`);

function perimeter(number) {
    return `Perimeter is ${number * 2 * 3.14} `;
}

function area(number) {
    return `Area of circle is ${3.14 * (number * number)}`;
}

alert(perimeter(num));
alert(area(num));