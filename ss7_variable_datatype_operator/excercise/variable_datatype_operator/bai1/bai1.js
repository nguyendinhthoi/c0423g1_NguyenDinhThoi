ly1 = prompt("Nhập điểm Lý");
Hoa1 = prompt("Nhập điểm Hoá");
Toan1 = prompt("Nhập điểm Toán");
let Ly = parseFloat(ly1);
let Hoa = parseFloat(Hoa1);
let Toan = parseFloat(Toan1);

let Average1 = (Ly + Hoa + Toan) / 3;
let sum = Ly + Hoa + Toan;
document.write("Điểm trung bình của bạn là : " + Average1);
document.write("<br>");
document.write("Tổng điểm của bạn là: " + sum);