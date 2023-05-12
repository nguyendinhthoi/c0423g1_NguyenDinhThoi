let a = +prompt(`Hay nhap so tien ban dau`)
let b = +prompt(`Ban vay trong vong bao nhieu thang? 24? 120? hay 240 thang`)
tiengocphaitrahangthang = a / b
// lai suat khi vay 2nam (24thang) = 13%
// lai suat khi vay 10nam (120thang) = 11%
// lai suat khi vay 20 nam (240 thang) = 9%
switch (b) {
    case 24 :
        laithangdau = (a * 13 / 100) / 12
        laicacthangconlai = ((a - tiengocphaitrahangthang)*9/100) / 12
        alert(`Tien lai ban can dong thang dau la : `+laithangdau+` va nhung thang con lai la : `+laicacthangconlai)
        break;
    case 120 :
        laithangdau = (a * 11 / 100) / 12
        laicacthangconlai = ((a - tiengocphaitrahangthang)*11/100) / 12
        alert(`Tien lai ban can dong thang dau la : `+laithangdau+` va nhung thang con lai la : `+laicacthangconlai)
        break;
    case 240 :
        laithangdau = (a * 9 / 100) / 12
        laicacthangconlai = ((a - tiengocphaitrahangthang*13/100)) / 12
        alert(`Tien lai ban can dong thang dau la : `+laithangdau+` va nhung thang con lai la : `+laicacthangconlai)
        break;
    default:
        alert(`Ban hay nhap lai dung so thang da quy dinh`)
}