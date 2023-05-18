// Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng.
// Chương trình này đếm số ký tự số trong mảng.
let a = prompt(`Hay nhap so phan tu bat ki`);                               //tạo 1 ô cho người nhập số phần tử bất kì
let result = [];
let count = 0;
for (let i = 0; i < a; i++) {
    result[i] = prompt(`Hay nhap gia tri thu ` + (i + 1));                  // cho người dùng nhập số phần tử họ muốn vào mảng result
    if (result[i] % 1 === 0) {                                                      // nêu mảng đó chia hết cho 1 thì là số và cộng biến đếm lên 1
        count++;
    }
}
document.write(count);
