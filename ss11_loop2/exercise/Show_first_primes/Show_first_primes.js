// // Kiểm tra được số nguyên tố và in ra số đó
// // Lặp lại đủ 20 lần.
// // đếm số nguyên tố đã tìm được.
// let countPrimeFound = 0;
// let number = 2;
// do {
//     // số tự nhiên
//     let count = 0; // biến này để đếm ước của number.
//     for (let i = 1; i <= number ; i++) {
//         if(number % i === 0){
//             count++;
//         }
//     }
//     if(count === 2) { // nếu số ước bằng 2 thì number là số nguyên tố.
//         document.write(number + " là số nguyên tố. <br>" );
//         countPrimeFound++;
//     }
//     number++;
// } while (countPrimeFound < 20);
//
//
let countUoc = 0;
let number = 1;
do {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        ;
        document.write(number + `<br>`);
        countUoc++;
    }
    number++;
} while (countUoc < 20);