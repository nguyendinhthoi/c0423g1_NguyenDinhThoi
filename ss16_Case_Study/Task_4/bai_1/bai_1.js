let str = prompt(`Hãy nhập chuỗi bất kì`);
str = str.trim();
let array = str.toLowerCase().split(``);
let max = array[0];
for (let i = 0; i < array.length; i++) {
    array[0] = array[0].toUpperCase();
    if (array[i] === ` `) {
        array[i + 1] = array[i + 1].toUpperCase();
    }
}
array = array.join(``);
array = array.split(` `);
for (let i = 0; i < array.length; i++) {
    if (max.length < array[i].length) {
        max = array[i];
    }
}
document.write(array.join(` `));
document.write(`<br> Chữ dài nhất trong chuỗi là ${max} `);




