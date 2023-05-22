// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau
// để bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm.
// Đoạn mã có dạng như sau:
function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    alert(result)
    return result;
}

result = 0;
alert(result = addNumbers())