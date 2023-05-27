let a = [1, 2, 3];
let sum = 0;
let d = [];
for (let i = 0; i < a.length; i++) {
    sum += a[i];
    d.push(sum);
}
document.write(d)