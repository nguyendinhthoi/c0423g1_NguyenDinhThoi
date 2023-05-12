let a = +prompt(`Hay nhap canh a`)
let b = +prompt(`Hay nhap canh b`)
let c = +prompt(`Hay nhap canh c`)
if (a>0 && b>0 && c>0 && a+b>c && b+c>a && a+c>b){
    alert(`Day la mot tam giac`)
}else {
    alert(`Day khong phai la 1 tam giac`)
}
