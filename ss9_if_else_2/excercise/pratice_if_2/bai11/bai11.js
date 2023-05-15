let a = +prompt(`Hay nhap thu nhap thang nay cua ban`);
// 5tr  < TN <= 10tr	TN x 10% - 0.25tr
// 10tr < TN <= 18tr	TN x 15% - 0.75tr
// 18tr < TN <= 32tr	TN x 20% - 1.65tr
// 32tr < TN <= 52tr	TN x 25% - 3.25tr
if (a < 10000000) {
    thue = (a * 10) / 100 - 250000;
    alert(`So tien thue ban phai nop la : ` + thue);
} else if (a < 18000000) {
    thue = (a * 15) / 100 - 750000;
    alert(`So tien thue ban phai nop la : ` + thue);
} else if (a < 32000000) {
    thue = (a * 20) / 100 - 1650000;
    alert(`So tien thue ban phai nop la : ` + thue);
} else {
    thue = (a * 25) / 100 - 3250000;
    alert(`So tien thue ban phai nop la : ` + thue);
}