function dich() {
    let nhap1 = document.getElementById("nhap").value;
    let tienganh = ['duck', 'chicken', 'flower', 'handsome'];
    let tiengviet = ['dzịt', 'gà', 'hoa', 'đẹp trai'];
    for (i = 0; i < tiengviet.length; i++) {
        if (nhap1 === tienganh[i]) {
            document.getElementById("hien").innerText = tiengviet[i];
            break;
        } else {
            document.getElementById("hien").innerText = 'loi';
        }
    }
}