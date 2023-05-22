let meter = +prompt(`Let enter the number of meter `);
let foot = +prompt(`Let enter the number of foot`);

function changeLengthFoot(number) {
    let resultFoot = 3.279 * number;
    return number + ` meter ` + `= ` + resultFoot + ` foot`;
}

function changeLengthMeter(number) {
    let resultMeter = 0.305 * number;
    return number + ` foot ` + `= ` + resultMeter + ` meter`;
}

document.writeln(changeLengthFoot(meter) + `<br/>`);
document.writeln(changeLengthMeter(foot));


