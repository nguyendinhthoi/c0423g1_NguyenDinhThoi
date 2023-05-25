// Viết một lớp các đối tượng điện thoại lấy tên là Mobile, mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:
//
//     Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv)
//     Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
//     Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
//     Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
//     Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
//     Có chức năng bật và tắt điện thoại.
//     Có chức năng xạc pin điện thoại.
//     Có chức năng soạn tin nhắn.
//     Có chức năng nhận tin nhắn từ một chiếc mobile khác.
//     Có chức năng gửi tin nhắn tới một chiếc mobile khác.
//     Có chức năng xem tin trong hộp thư đến.
//     Có chức năng xem tin đã gửi.
//     Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
//     Các chức năng không thể hoạt động nếu điện thoại chưa bật.
//     Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
//
//     Có một chiếc điện thoại nokia và một chiếc iphone
// Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ và gửi cho chiếc iphoneChiếc iphone kiểm tra inbox và hiển thị tin đó.

class Mobile {
    constructor(telephoneNum) {
        this.battery = 100;
        this.enteringMess;
        this.inbox = [];
        this.sentStorage = [];
        this.status = true;
        this.telephoneNum = telephoneNum;
    }

    turnOnPhone() {
        alert(`The phone is turning on`);
        this.status = true;
    }

    turnOffPhone() {
        alert(`The phone is turning off`);
        this.status = false;
    }

    chargingBattery() {
        alert(`The battery is full`);
        this.battery = 100;
    }

    textingMess() {
        this.enteringMess = prompt(`Let enter your message!!`);
        let confirmMess = confirm(`Do you want to send?`);
        if (confirmMess) {
            let telNumOfReciever = +prompt(`Let enter the number of person you want to send!!`);
            this.sendMess(this.enteringMess, telNumOfReciever);
        }
    }

    sendMess(message, telNumofReciever) {
        let indexOfReciverNum = storageOfTelNum.indexOf(telNumofReciever);
        if (indexOfReciverNum !== -1) {
            alert(`The message is sent to ${telNumofReciever}`);
            let mobileRecieve = storageOfMobile[indexOfReciverNum];
            mobileRecieve.recieveMess(`${message} from ${this.telephoneNum}`);
        } else {
            alert(`The telephone number is not found`);
        }

    }

    recieveMess(message) {
        this.inbox.push(message);
    }

    checkInbox() {
        let allMessage = "";
        for (let i = 0; i < this.inbox.length; i++) {
            allMessage += this.inbox[i] + "\n";

        }
        let idScreen = "" + this.telephoneNum;
        document.getElementById(idScreen).value = allMessage;
    }
}

let storageOfTelNum = [];
let storageOfMobile = [];
let samsungOfCharlie = new Mobile(123);
let iphoneOfJackie = new Mobile(456);
storageOfMobile.push(samsungOfCharlie, iphoneOfJackie);
storageOfTelNum.push(samsungOfCharlie.telephoneNum, iphoneOfJackie.telephoneNum);
//tham khao
//
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta cha00rset="UTF-8">
//     <title><0/title>
//     </head>0
//     <body>0
//     <tabl00e border="1">
//     <tr>0
//     <th>Khô00i</th>
//     <th>Hạ0nh</th>
//     </tr>0
//     <tr>0
//     <td>0<textarea id="123"></textarea></td>
// <td><t00extarea id="500"></textarea></td>
// </tr>0
// <tr>00
// <td>0
// <butto0n onclick="samsungCuaKhoi.soanTinNhan()"> Soạn tin nhắn</button>
// </td>0
// <td>00
// <butto0n onclick="iphoneCuaHanh.soanTinNhan()"> Soạn tin nhắn</button>
// </td>0
// </tr>0
// <tr>0
// <td00>
// <00button onclick="samsungCuaKhoi.xemTinNhan()">Xem tin nhắn</button>
// 0</td>
// <td>
// <button onclick="iphoneCuaHanh.xemTinNhan()">Xem tin nhắn</button>
// </td>
// </tr>
// </table>
// <script>
// class Mobile {
//     constructor(soDienThoai) {
//         this.pin = 100;
//         this.tinNhanDangSoan;
//         this.hopThuDen = [];
//         this.hopThuDaGui = [];
//         this.trangThai = true;
//         this.soDienThoai = soDienThoai;
//0     }
//
//     batDienThoai() {
//         alert("Đã bật!");
//         this.trangThai = true;
//     }
//
//     tatDienThoai() {
//         alert("Đã tắt!");
//         this.trangThai = false;
//     }
//
//     sacPin() {
//         this.pin = 100;
//         alert("Pin đầy!");
//     }
//
//     soanTinNhan() {
//         this.tinNhanDangSoan = prompt("Mời bạn nhập tin nhắn: ");
//         let xacNhanGui = confirm("Bạn có muốn gửi cho ai không?");
//         if (xacNhanGui) {
//             let soDienThoaiNguoiNhan = +prompt("hãy nhập số điện thoại người nhận");
//             this.guiTinNhan(this.tinNhanDangSoan, soDienThoaiNguoiNhan);
//         }
//     }
//
//     guiTinNhan(tinNhan, soDienThoaiNguoiNhan) {
//         let viTriCuaSDT = khoLuuSoDienThoai.indexOf(soDienThoaiNguoiNhan);
//         if (viTriCuaSDT !== -1) {
//             alert("Sẽ gửi cho số " + soDienThoaiNguoiNhan);
//             let dienThoaiCanNhan = khoLuuDienThoai[viTriCuaSDT];
//             dienThoaiCanNhan.nhanTinNhan(tinNhan + " từ số " + this.soDienThoai);
//         } else {
//             alert("Không tìm thấy số điện thoại này.");
//         }
//     }
//
//     nhanTinNhan(tinNhan) {
//         this.hopThuDen.push(tinNhan);
//     }
//
//     xemTinNhan() {
//         let tatCaTinNhan = "";
//         for (let i = 0; i < this.hopThuDen.length; i++) {
//             tatCaTinNhan += this.hopThuDen[i] + "\n";
//         }
//         let idScreen = "" + this.soDienThoai;
//         document.getElementById(idScreen).value = tatCaTinNhan;
//     }
// }
//
// let khoLuuSoDienThoai = [];
// let khoLuuDienThoai = [];
//
// let samsungCuaKhoi = new Mobile(123);
// let iphoneCuaHanh = new Mobile(500);
// khoLuuDienThoai.push(samsungCuaKhoi, iphoneCuaHanh);
// khoLuuSoDienThoai.push(samsungCuaKhoi.soDienThoai, iphoneCuaHanh.soDienThoai);
// </script>
// </body>
// </html>
