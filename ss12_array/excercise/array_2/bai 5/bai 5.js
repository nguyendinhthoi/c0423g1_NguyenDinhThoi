let a = prompt(`Hay nhap so phan tu bat ki 1`);
let b = prompt(`Hay nhap so phan tu bat ki 2`);
let result = [];
let result1 = [];
let tongKet;
for (i = 0; i < a; i++) {
    result[i] = prompt(`Hay nhap phan tu ban muon ` + (i + 1));
}
for (j = 0; j < b; j++) {
    result1[j] = prompt(`Hay nhap phan tu ban muon ` + (j + 1));
}
let flag = true;
for (k = 0; k < result.length; k++) {
    if (result[k] !== result1[k]) {
        tongKet = alert(`Hai chuoi khong giong nhau`)
        flag = false;
    }
}
if (flag === true) {
    alert(`Hai chuoi giong nhau`)
}
document.writeln(result + `<br/>`);
document.writeln(result1);
document.writeln(tongKet);