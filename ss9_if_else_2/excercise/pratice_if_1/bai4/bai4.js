let x = prompt(`Hay nhap so nguyen a`);
let y = prompt(`Hay nhap so nguyen b`);
let z = prompt(`Hay nhap so nguyen c`);
a = parseInt(x);
b = parseInt(y);
c = parseInt(z);
if (a > b && a > c) {
    alert(`a la so lon nhat`);
} else if (b > c) {
    alert(`b la so lon nhat`);
} else {
    alert(`c la so lon nhat`);
}

