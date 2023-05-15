let a = +prompt(`Hay nhap canh a`);
let b = +prompt(`Hay nhap canh b`);
s = 1 / 2 * a * b;
if (a > 0 && b > 0) {
    alert(`Dien tich tam giac vuong la : ` + s + `m2`);
} else {
    alert(`a va b phai lon hon 0. Vui long nhap lai`);
}