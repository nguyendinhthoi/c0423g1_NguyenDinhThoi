for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        if (i === 4 || j === 0 || i === j) {
            document.write(`*`);
        } else {
            document.write(`&nbsp&nbsp`);
        }
    }
    document.write(`<br>`);
}