//bai 1
// myColor = ["Red", "Green", "White", "Black"];
// myColor.join(`+`);
// document.write(myColor.join(`+`));


//bai 2:Viết một chương trình nhận một số nhập vào .
// và chèn dấu (-) giữa 2  số chẵn.
// Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.
// a = +prompt(`Hay nhap vao day so bat ki `);
// let arr = a.toString();
// let result = [arr[0]];
// for (i = 1; i < arr.length; i++) {
//     if (arr[i - 1] % 2 === 0 && arr[i] % 2 === 0) {
//         result.push(`-`, arr[i]);
//     } else {
//         result.push(arr[i]);
//     }
// }
// alert(result.join(``));


// bai 3
//tao 1 chuong trinh nhap
//chuyen tu chu thuong sang chu hoa va nguoc lai
let content = prompt(`Let's write something!!!`);
let upper = `QWERTYUIOPASDFGHJKLZXCVBNM`;
let lower = `qwertyuiopasdfghjklzxcvbnm`;
let result = [];
for (i = 0; i < content.length; i++) {
    if (upper.includes(content[i])) {
        result.push(content[i].toLowerCase());
    } else if (lower.includes(content[i])) {
        result.push(content[i].toUpperCase());
    } else {
        result.push(content[i]);
    }
}
alert(result.join(``));