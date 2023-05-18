// Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn,
// in ra các phần tử trong mảng. Chú ý: Sử dụng vòng lặp for lồng nhau
// Ví dụ mảng sau:let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
// Kết quả mẫu
//
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
let a = [
    [3, 5, 7, 27],
    [7, 14, 0, 2],
    [8, 0, 11, 30],
    [10, 5, 30, 14],
    [5, 10, 30, 8],
];
for (let i in a) {                                          // Duyệt các index từ đầu đến hết a
    document.writeln("row " + i + `<br/>`);
    for (let j in a[i]) {                                   // Duyệt j  từ đầu đến cuối trong các phần tử của mảng a
        document.writeln(" " + a[i][j] + `<br/>`);
    };
};