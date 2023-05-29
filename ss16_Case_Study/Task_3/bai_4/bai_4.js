let a;
let total;
let b;
do {
    a = +prompt("1 (cafe)" + "\n2 (cam vắt)"
        + "\n3 (nước ép cà rốt)" + "\n4 (nước ép cà chua)"
        + "\n5 (nước lọc)" + "\n6 (nước dừa)" + "\n7 (thoát gọi món)");
    if (a === 7) {
        alert(`Mình ế quá nè bạn ơi!!!`);
        break;
    }
} while (a >= 7)
switch (a) {
    case 1:
        b = +prompt(`Cafe có giá 15k, bạn muốn order mấy ly nè?`);
        total = b * 15000;
        alert(`Bạn order ${b} ly và tổng số tiền bạn cần phải trả là ${total} VND `);
        break;
    case 2 :
        b = +prompt(`Cam vắt có giá 20k, bạn muốn order mấy ly nè?`);
        total = b * 20000;
        alert(`Bạn order ${b} ly và tổng số tiền bạn cần phải trả là ${total} VND `);
        break;
    case 3:
        b = +prompt(`Nước ép cà rốt có giá 10k, bạn muốn order mấy ly nè?`);
        total = b * 10000;
        alert(`Bạn order ${b} ly và tổng số tiền bạn cần phải trả là ${total} VND `);
        break;
    case 4:
        b = +prompt(`Nước ép cà chua có giá 10k, bạn muốn order mấy ly nè?`);
        total = b * 10000;
        alert(`Bạn order ${b} ly và tổng số tiền bạn cần phải trả là ${total} VND `);
        break;
    case 5:
        b = +prompt(`Nước lọc có giá 5k, bạn muốn order mấy ly nè?`);
        total = b * 5000;
        alert(`Bạn order ${b} ly và tổng số tiền bạn cần phải trả là ${total} VND `);
        break;
    case 6:
        b = +prompt(`Nước dừa có giá 20k, bạn muốn order mấy ly nè?`);
        total = b * 20000;
        alert(`Bạn order ${b} ly và tổng số tiền bạn cần phải trả là ${total} VND `);
        break;
    default:
        alert(`Cảm ơn bạn vì đã đến!!`);
}