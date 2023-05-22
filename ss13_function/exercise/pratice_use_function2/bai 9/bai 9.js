// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ,
// kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
let a = prompt(`Let enter any characters!~~~`);
let b = prompt(`Let enter a character you want to check!~~~`);
let arr = a.split(``);   //chuyển chuỗi thành mảng
let count = 0;
let flag = false;

function checkIndex(theArray,number) {
    for (let i = 0; i < theArray.length; i++) {
        if (number === theArray[i]) {
            count++;
            flag = true;
        }
    }
    if (flag === false) {
        return `-1`;
    }
    return `We have ${count} number ${number} in this array `;
}

alert(checkIndex(arr,b));
