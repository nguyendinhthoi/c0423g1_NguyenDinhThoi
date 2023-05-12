function check() {
    let nhap    = +document.getElementById('month').value;
    switch (nhap) {
        case 1 :
            case 3 : case 5 : case 7 : case 8 : case 10 : case 12:
            nhap = `Tháng`  + nhap + `có 31 ngày`
            break
        case 2 :
            nhap = `Tháng`  + nhap + `có 28 hoặc 29 ngày`
            break
        case 4 : case 6 : case 9 : case 11 :
            nhap = `Tháng`  + nhap + `có 30 ngày`
            break
    }
    document.getElementById('kq').innerHTML =  nhap
}


