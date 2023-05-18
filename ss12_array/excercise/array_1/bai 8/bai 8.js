// /tìm max trong mảng, sau đó push max vào mảng mới

let num = [1, 7, 10, 13, 15, 11, 12, 5, 25, 17];
let max = [0]; // max tại phần tử đầu tiên
let result = [];
let lengthBegin = num.length;
for (j = 0; j < lengthBegin; j++) {
    for (i = 0; i < num.length; i++) { // Bước 1: tìm max trong mảng , cho max tại phần tử đầu tiên
        if (max < num[i]) {            // - So sánh từng phần tử với MAX
            max = num[i];              // - MAX mà bé hơn phần tử nào thì phần tử đó là MAX
        } else {
            max;                            // Khi có MAX rồi thì ta sẽ tiếp theo bước 2
        }
    }                                           // Bước 2: cho nó chạy n lần trong mảng num ban đầu, dài mảng vẫn không thay đổi
    result.push(max);                               // - Sau đó ta sẽ push nó vào 1 mảng rỗng mình đã khai báo;
    num.splice(num.indexOf(max), 1);         // - Thêm vào xong thì mình phải xoá trên mảng num ban đầu chứ? chứ không hắn vẫn nghĩ max là max (không thay đổi)
    max = [0];                                              // - Bước này ta phải giữ nguyên lại phần tử max ban đầu để khi chạy vòng lặp, vị trí ban đầu sẽ không thay đổi
}                                                               // *****NẾU KHÔNG NÓ SẼ CỘNG DỒN VỊ TRÍ LÊN MÀ CHẠY => SẼ LÀM MẤT ĐI PHẦN TỬ*****
document.write(result);                                               // ***** NÓ SẼ CHẠY VỚI VÒNG LẶP CỦA CHIỀU DÀI MẢNG KHÔNG ĐỔI *******