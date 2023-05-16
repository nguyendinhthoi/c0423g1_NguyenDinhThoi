let number = 20;
let so1 = 0, so2 = 1, so3;
for (i = 0; i < number; i++) {
    so3 = so1 + so2;
    so1 = so2;
    so2 = so3;
    if (so3 % 5 == 0) {
        document.write(so3 + ` ` + `la so chia het cho 5`);
        break;
    }
}