// Bài 2: Tạo hàm nhận vào một đối số dạng số,
// tăng giá trị đối số đó lên 1 và trả lại giá trị cho lời gọi hàm.
// Gọi hàm từ trong phần <body> của trang web và hiển thị kết quả lên màn hình.
let a = +prompt(`Let enter the number`);

function num(number) {
    return number + ` is increased in value by 1 = ` + (number + 1);
}

alert(num(a));
