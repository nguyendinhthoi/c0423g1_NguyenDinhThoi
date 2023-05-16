let a = +prompt(`Hay nhap so tien ban dau`);
let b = +prompt(`Ban vay trong vong bao nhieu thang? 24? 120? hay 240 thang`);
tienGocPhaiTraHangThang = a / b;
// lai suat khi vay 2nam (24thang) = 13%
// lai suat khi vay 10nam (120thang) = 11%
// lai suat khi vay 20 nam (240 thang) = 9%
switch (b) {
    case 24 :
        laiThangDau = (a * 13 / 100) / 12;
        laiCacThangConLai = ((a - tienGocPhaiTraHangThang) * 9 / 100) / 12;
        alert(`Tien lai ban can dong thang dau la : ` + laiThangDau + ` va nhung thang con lai la : ` + laiCacThangConLai);
        break;
    case 120 :
        laiThangDau = (a * 11 / 100) / 12;
        laiCacThangConLai = ((a - tienGocPhaiTraHangThang) * 11 / 100) / 12;
        alert(`Tien lai ban can dong thang dau la : ` + laiThangDau + ` va nhung thang con lai la : ` + laiCacThangConLai);
        break;
    case 240 :
        laiThangDau = (a * 9 / 100) / 12;
        laiCacThangConLai = ((a - tienGocPhaiTraHangThang * 13 / 100)) / 12;
        alert(`Tien lai ban can dong thang dau la : ` + laiThangDau + ` va nhung thang con lai la : ` + laiCacThangConLai);
        break;
    default:
        alert(`Ban hay nhap lai dung so thang da quy dinh`);
}