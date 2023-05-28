let numerators = [5, 2, 5];
let denominators = [6, 3, 4];
let c;
let index;
let max = numerators[0] / denominators[0];
for (let i = 1; i < numerators.length; i++) {
    c = numerators[i] / denominators[i];
    if (c > max) {
        max = c;
        index = i;
    }
}
document.write(numerators[index] + `/` + denominators[index] + ` is Max and index is ` + index);