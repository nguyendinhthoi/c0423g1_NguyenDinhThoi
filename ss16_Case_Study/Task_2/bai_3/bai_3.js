let h = +prompt(`Let enter h`)
for (let i = 0; i <= h - 1; i++) {
    for (let j = 0; j <= (h - 1) * 2; j++) {
        if (j - i === h - 1 || i + j === h - 1 || i === h - 1) {
            document.write(`*`);
        } else {
            document.write(`&nbsp&nbsp`);
        }
    }
    document.write(`<br>`);
}