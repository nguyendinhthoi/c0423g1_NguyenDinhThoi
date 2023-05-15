let soPhut = +prompt(`Hay nhap so phut ban goi`);
soTienBatBuoc = 25000;
let soTien;
if (soPhut <= 50) {
    soTien = soTienBatBuoc + soPhut * 600;
} else if (soPhut <= 150) {
    soTien = soTienBatBuoc + soPhut * 400;
} else {
    soTien = soTienBatBuoc + soPhut * 200;
}
alert(`So tien cuoc cua ban la : ` + soTien + `VND`);