// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự  [ 'c', 's', 'c', '2', '6', '1' ] sau khi thực hiện đảo ngược sẽ là "162csc"

let a = ['d', 't', 'a', '1', '4', '3']
let soDau = [0];
let soCuoi = a.length - 1;
while (soDau < soCuoi) {
    let temp = a[soDau];
    a[soDau] = a[soCuoi];
    a[soCuoi] = temp;
    soDau++;
    soCuoi;
}
document.writeln(a);