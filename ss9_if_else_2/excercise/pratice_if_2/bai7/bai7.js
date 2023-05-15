let a = +prompt(`Hay nhap a`);
let b = +prompt(`Hay nhap b`);
let c = +prompt(`Hay nhap c`);
let x;
delTa = (b * b) - (4 * a * c);
// x1 = -b / (2 * a) //phuong trinh co nghiem kep
// x2 = (-b + Math.sqrt(delTa)) / 2 * a //phuong trinh co 2 nghiem
// x3 = (-b - Math.sqrt(delTa)) / 2 * a //phuong trinh co 2 nghiem
if (a == 0) {
    x = -c / b;
    alert(`Phuong trinh co 1 nghiem la : ` + x);
} else if (delTa < 0) {
    alert(`Phuong trinh vo nghiem`);
} else if (delTa == 0) {
    x = -b / (2 * a);
    alert(`Phuong trinh co nghiem kep : ` + x);
} else {
    x1 = (-b + Math.sqrt(delTa)) / (2 * a);
    x2 = (-b - Math.sqrt(delTa)) / (2 * a);
    alert(`Phuong trinh co 2 nghiem x1 = ` + x1 + `va x2 = ` + x2);
}