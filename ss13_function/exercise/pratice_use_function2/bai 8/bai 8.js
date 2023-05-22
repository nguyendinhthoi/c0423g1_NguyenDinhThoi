// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.

let a = prompt(`let enter any number!~~`);

let b = a.split(``); // split đổi chuỗi thành mảng
function reverseArray(numArray) {
    return `The array you enter is : ${b} . Let reverse them : ${numArray.reverse()}`;
}

alert(reverseArray(b));

