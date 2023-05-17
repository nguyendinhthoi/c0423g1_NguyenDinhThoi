let num = [-2, -3, -5, -6, 6, 4, -1, 5, -4];
let count = 0;
for (i = 0; i < num.length; i++) {
    if (num[i] < 0) {
        count++;
    }
}
document.writeln(`co ` + count + ` so nguyen am`);