lý1 = prompt("Nhập điểm Lý")
Hoá1 = prompt("Nhập điểm Hoá")
Toán1 = prompt("Nhập điểm Toán")
let Lý = parseFloat(lý1)
let Hoá = parseFloat(Hoá1)
let Toán = parseFloat(Toán1)

let Average1 = (Lý + Hoá + Toán)/3
let sum = Lý + Hoá +Toán
document.write("Điểm trung bình của bạn là : " + Average1)
document.write("<br>")
document.write("Tổng điểm của bạn là: " + sum)