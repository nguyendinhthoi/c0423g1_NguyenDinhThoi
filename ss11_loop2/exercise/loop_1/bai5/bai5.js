let number = 20;
let sum = 0;
let so1 = 0, so2 = 1, so3;
for (i = 0; i < number; i++) {
    so3 = so1 + so2;
    so1 = so2;
    so2 = so3;
    sum += so1;
}
document.write(`tong 20 so dau la : ` + sum)