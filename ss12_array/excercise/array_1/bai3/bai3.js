let num = [1, 7, 10, 13, 15, 11, 12, 5, 25, 17];
let max = num[0];
let index = 0;
let a = 0;
let b = num.length;
for (i = 0; i < num.length; i++) {
    a += num[i]
    if (num[i] > max) {
        max = num[i];
        index = i + 1;
    } else {
        max;
    }
}
c = a / b;
document.writeln(max + ` la so lon nhat ` + `o vi tri so ` + index + `<br/>`);
document.writeln(`trung binh cac phan tu trong mang la ` + c);