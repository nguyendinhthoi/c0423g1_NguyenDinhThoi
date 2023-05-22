// Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus.
// Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo.
// Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất.
// Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao.
// Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. Nói cách khác, trả lại tên chòm sao của ngôi sao đó.
// Trong phần <body> của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào.
// Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào. Cho kết quả hiển thị trên màn hình.


let star = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let constellation = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
let content = prompt(`Let enter a Star!!!`);
let flag = false;

function checkConstellation(text) {
    for (let i = 0; i < star.length; i++) {
        if (text === star[i]) {
            result = star[i] = constellation[i];
            flag = true;
            return `Constellation of ${text} is : ${result}`;
        }
    }
    if (flag === false) {
        return `Not found . Please try again!~~`;
    }
}

document.write(checkConstellation(content));