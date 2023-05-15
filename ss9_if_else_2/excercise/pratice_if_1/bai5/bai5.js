let diemKiemTra = +prompt(`Nhap diem bai kiem thuong ky`);
let diemGiuaKy = +prompt(`Nhap diem bai giua ky`);
let diemCuoiKy = +prompt(`Nhap diem cuoi ky`);
tongKet = (diemKiemTra + diemGiuaKy * 2 + diemCuoiKy * 3) / 6;
if (tongKet > 8) {
    alert(`Hoc luc Gioi`);
} else if (tongKet > 6.5) {
    alert(`Hoc luc Kha`);
} else if (tongKet > 5) {
    alert(`Hoc luc TB`);
} else {
    alert(`Hoc luc Yeu`);
}