// B1: Tạo một hàm để khởi động game
// B2: Tạo ô nhập để người dùng chọn khoảng muốn đoán.
// B3: random một số ngẫu nhiên trong khoảng vừa chọn.
// B4: Cho người dùng đoán và kiểm tra với số đã random...
function start() {
    alert(`Chao mung ban den voi game doan so`);
    headPoint = +prompt(`Ban hay nhap so muon doan \n Tu`);
    endPoint = +prompt(`den`);//5-20
    alert(`so ban se doan tu khoang` + headPoint + `den` + endPoint);
    a = Math.round(Math.random() * (endPoint - headPoint) + headPoint);
    for (let i = 0; i < 3; i++) {
        let numberGuess = +prompt(`ban hay nhap so ma ban doan lan thu ` + (i + 1));
        if (numberGuess === a) {
            alert(`Congratulation~~ You win`);
            break;
        } else if (numberGuess < a) {
            alert(`Hay nhap so lon hon`);
        } else if (numberGuess > a) {
            alert(`Hay nhap so be hon`);
        } else {
            alert(`You lose~~`);
        }
        if(i === 2) {
            document.getElementById("startAgain").innerText = `Restart`;
        }
    }
}
// baimau
// function startGame() {
//     alert("Chào mừng bạn đến với game đoán số!");
//     let headPoint = +prompt("Xin mời chọn khoảng muốn đoán\n Từ: ");
//     let endPoint = +prompt("Đến: ");
//     alert("Bạn sẽ đoán trong khoảng từ " + headPoint + " đến " + endPoint);
//
//     // Max mong muốn: endPoint
//     // Min mong muốn: headPoint
//     // 2 -> 15
//     let randomNumber = Math.round(Math.random() * (endPoint - headPoint) + headPoint);
//
//     for (let i = 0; i < 3; i++) {
//         let numberGuess = +prompt("Mời bạn đoán lần thứ " + (i + 1));
//         if (numberGuess === randomNumber) {
//             alert("You win!");
//             break;
//         } else if (numberGuess < randomNumber) {
//             alert("Số bạn đoán bé hơn");
//         } else if (numberGuess > randomNumber) {
//             alert("Số bạn đoán lớn hơn");
//         } else {
//             alert("Bạn đã đoán sai, vui lòng đoán lại.");
//         }
//         if(i === 2) {
//             document.getElementById("btnStartGame").innerText = "Chơi lại";
//         }
//     }
// }