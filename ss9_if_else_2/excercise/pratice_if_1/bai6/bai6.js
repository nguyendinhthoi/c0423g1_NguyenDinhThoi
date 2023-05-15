let doanhThu = +prompt(`Doanh thu cua ban la : `);
let hoaHong;
if (doanhThu >= 100000000) {
    hoaHong = (doanhThu * 7) / 100;
} else if (doanhThu >= 50000000) {
    hoaHong = (doanhThu * 5) / 100;
} else {
    hoaHong = (doanhThu * 2) / 100;
}
alert(`Hoa hong cua ban la :` + hoaHong + `VND`);
