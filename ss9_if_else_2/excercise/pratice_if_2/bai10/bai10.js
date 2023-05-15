let a = +prompt(`Hay nhap so kWh cua ban`);
if (a < 200) {
    giatien = a * 1734;
    alert(`ban da su dung ` + a + `kWh` + `. So tien ban can thanh toan la ` + giatien + `VND`;
} else if (a < 400) {
    giatien = a * 2536;
    alert(`ban da su dung ` + a + `kWh` + `. So tien ban can thanh toan la ` + giatien + `VND`);
} else {
    giatien = a * 2927;
    alert(`ban da su dung ` + a + `kWh` + `. So tien ban can thanh toan la ` + giatien + `VND`);
}

// switch (a) {
//     case a > 400 ? a : {} :      //Chú thích: dấu {} là do trường hợp sai không có gì nên ta để trống
//         giatien = a * 1000
//         alert(`ban da su dung ` + a + `kWh` + `. So tien ban can thanh toan la ` + giatien + `VND`)
//     break
//     case a > 200 && a < 400 ? a : {} :
//         giatien = a * 100
//         alert(`ban da su dung ` + a + `kWh` + `. So tien ban can thanh toan la ` + giatien + `VND`)
// }