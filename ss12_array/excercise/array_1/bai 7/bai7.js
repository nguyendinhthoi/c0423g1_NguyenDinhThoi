let num = [1, 7, 10, 13, 15, 11, 12, 5, 25, 17];
let v = +prompt(`Hay nhap so nguyen bat ki`);
let x = num.indexOf(v);
if (x !== -1) {
    num.splice(x, 1);
    num.push(0);
} else {
    document.write(`V is not in the array . `);
}
document.writeln(`The array is ` + num);