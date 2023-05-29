// Bài 2: Cho xâu kí tự. Hãy đếm số lượng ký tự khác nhau trong xâu đó
// Ví dụ: s = "cabca", thì kết quả differentSymbolsNaive(s) = 3.
// ⇨	Có 3 ký tự khác nhau là a, b và c.
let s = "cabca";
let arr = s.split(``);
let count = 0;
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
        count++;
    }
}
document.write(newArr.sort() + ` <br> differentSymbolsNaive(s) = ` + count);
