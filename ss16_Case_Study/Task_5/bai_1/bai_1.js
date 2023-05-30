let row = +prompt(`Hãy nhập số hàng của bạn~~`);
let col = +prompt(`Hãy nhập số cột của bạn~~`);
let arr = [];
let sum = 0;

for (let i = 0; i < row; i++) {
    arr[i] = [];
    for (let j = 0; j < col; j++) {
        arr[i][j] = +prompt(`Hãy nhập các phần tử arr${i}${j}`)
        if (arr[i][j] % 2 === 0) {
            sum += arr[i][j];
        }
    }
}
document.write(`Tổng của bạn là : ${sum}`);
