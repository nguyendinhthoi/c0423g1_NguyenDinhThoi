// Bài 1: Viết một chương trình để nhập lương nhân viên, tính thuế thu nhập và lương ròng
// (số tiền lương thực sự mà nhân viên đó nhận được).
// Với các thông số giả sử như sau (không theo luật lương, chỉ là con số giả sử để dễ tính toán):
// 20% thuế thu nhập nếu lương là 15 triệu.
// 10% thuế thu nhập nếu lương từ 7 đến 15 triệu.
// 5% thuế thu nhập nếu lương dưới 7 triệu
let a = +prompt(`Please enter your salary this month~~ (VND)`);
if (a === 15000000) {
    personalIncomeTax = (a * 20) / 100;
} else if (a > 7000000 && a < 15000000) {
    personalIncomeTax = (a * 10) / 100;
} else {
    personalIncomeTax = (a * 5) / 100;
}
let netSalary = a - personalIncomeTax;
alert(`Your Personal Income Tax is: ${personalIncomeTax} VND. Your Net Salary is ${netSalary} VND`);
