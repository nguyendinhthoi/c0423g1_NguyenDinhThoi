// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ,
// kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
// let b = prompt(`Let enter a character`)
// let a = [a, b, c, e, q, a, r, p];
// let c = a.indexOf(b);
// // for (i = 0; i < a.length; i++) {
//     // if (c === 1) {
//         // alert(a.indexOf(b))
//     // } else {
//         alert(c)
// }
// }
let a = [0, 1, 2, 3, 4, 1, 5, 5, 6, 5, 3, 2, 1, 5, 0];
let b = +prompt(`Let enter any number!~~~`);
let count = 0;
let flag = false;

function checkIndex(number) {
    for (let i = 0; i < a.length; i++) {
        if (number === a[i]) {
            count++;
            flag = true;
        }
    }
    if (flag === false) {
        return `-1`;
    }
    return `We have ${count} number ${number} in this array `;
}

alert(checkIndex(b));
