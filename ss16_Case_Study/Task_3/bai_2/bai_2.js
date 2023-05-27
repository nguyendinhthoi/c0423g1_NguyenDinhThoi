let a = [7, 2, 5, 3, 5, 3];
let b = [7, 2, 5, 4, 6, 3, 5, 3];
let c = [];
let d;
for (let i = 0; i < b.length; i++) {
    d = a.indexOf(b[i]);
    if (d === -1) {
        c.push(b[i]);
    }
}
document.write(c);