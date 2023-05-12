let chieudai = +prompt(`Hay nhap chieu dai`)
let chieurong = +prompt(`Hay nhap chieu rong`)
S = chieudai * chieurong
if (chieudai, chieurong > 0) {
    if (chieudai > chieurong) {
        alert(`Dien tich hinh chu nhat cua ban la : ` + S + `m2`)
    } else
        alert(`Chieu dai lon hon chieu rong`)
} else {
    alert(`Chieu dai va chieu rong phai lon hon 0`)
}


