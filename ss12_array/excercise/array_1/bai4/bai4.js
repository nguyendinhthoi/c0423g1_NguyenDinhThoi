let num = [1, 7, 10, 13, 15, 11, 12, 5, 25, 17];
let soDau = 0;
let soCuoi = num.length - 1;
while (soDau < soCuoi) {
    let temp = num[soDau];
    num[soDau] = num[soCuoi];
    num[soCuoi] = temp;
    soDau++;
    soCuoi--;
}
document.writeln(num)