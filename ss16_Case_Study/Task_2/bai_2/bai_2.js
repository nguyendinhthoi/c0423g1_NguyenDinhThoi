let h = +prompt(`Let enter h`);
for (let i = 0; i < h; i++) {
    for (let j = 0; j <= h * 2; j++) {
        if (i + j >= h && j - i <= h) {
            document.write(`*`);
        } else {
            document.write(`&nbsp&nbsp`);
        }
    }
    document.write(`<br>`);
}