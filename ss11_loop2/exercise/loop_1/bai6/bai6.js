//tính tổng 30 số đầu tiên chia hết cho 7?
// ta sẽ tìm và liệt kê những số tự nhiên chia hết cho 7
// sau đó ta sẽ cộng chúng lại với nhau
let a = 1; // số tự nhiên % 7
let count = 0; //biến đếm
let b = 30; // ngưỡng 30 số
let sum = 0;
while (count < b) {
    if (a % 7 === 0) {
        document.writeln(a);
        sum += a;
        count++;
    }
    a++;
}
document.writeln(`<br/> tong 30 so la ` + sum);
