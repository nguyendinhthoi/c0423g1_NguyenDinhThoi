let h = +prompt(`Let enter h~~`)
for (let i = 0; i < h; i++) {
    for (let j = 0; j < h; j++) {
        if (i === h - 1 || j === 0 || i === j) {
            document.write(`*`);
        } else {
            document.write(`&nbsp&nbsp`);
        }
    }
    document.write(`<br>`);
}