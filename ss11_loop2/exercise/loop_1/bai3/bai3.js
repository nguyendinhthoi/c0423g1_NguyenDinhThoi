let number = 20;
let so1 = 0, so2 = 1, so3;
for (i = 0; i < number; i++) {
    document.writeln(so2); //khi đạt điều kiện thì sẽ in ra số 2
    so3 = so1 + so2; //sau đó ta lấy số 1 + số 2 để gán cho số 3
    so1 = so2 // và khi có số 3 ta sẽ tiếp tục gán số 2 vào số 1
    so2 = so3 // số 3 vào số 2    =>>>>>> sau đo chạy lại vòng lặp sẽ in ra được các số đầu của fibonacci
}