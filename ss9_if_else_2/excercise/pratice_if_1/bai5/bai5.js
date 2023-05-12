let diemkiemtra = +prompt(`Nhap diem bai kiem thuong ky`);
let diemgiuaky = +prompt(`Nhap diem bai giua ky`);
let diemcuoiky = +prompt(`Nhap diem cuoi ky`);
    tongket = (diemkiemtra+diemgiuaky*2+diemcuoiky*3)/6;
    if (tongket >8){
        alert(`Hoc luc Gioi`)
    }else if (tongket>6.5){
        alert(`Hoc luc Kha`)
    }else if (tongket>5){
        alert(`Hoc luc TB`)
    }else{
        alert(`Hoc luc Yeu`)
    }