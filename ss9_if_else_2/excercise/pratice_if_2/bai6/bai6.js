let a = +prompt(`Hay nhap a : `);
let b = +prompt(`Hay nhap b : `);
x = -b / a;
if (a == 0 && b == 0) {
    alert(`Phuong trinh co vo so nghiem`);
} else if (a == 0 && b != 0) {
    alert(`Phuong trinh vo nghiem`);
} else {
    alert(`Phuong trinh co nghiem duy nhat la : ` + x);
}