// Bài 3: Cho hai xâu kí tự, tìm số lượng kí tự chung giữa chúng.
//     Ví dụ: s1 = "aabcc" và s2 = "adcaa", thì kết quả commonCharacterCount(s1, s2) = 3.
// ⇨	2 xâu s1 và s2 có 3 kí tự chung: 2 k.ý tự 'a' và 1 kí tự 'c'
let s1 = "aabcc"
let s2 = "adcaa"
arr1 = s1.split(``);
arr2 = s2.split(``);
let newArr = [];
let count = 0;
let index;
let index1;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            newArr.push(s1[i]);
            arr2.splice(j, 1);
            break;
        }
    }
}
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
        count++;
        index = i;
    } else {
        newArr[i];
        index1 = i;
    }
}
document.write(`demSoKiTuChung(s1, s2) = ${newArr.length} <br>`);
document.write(`Hai xâu kí tự có ${newArr.length} kí tự chung là ${count + 1} kí tự ${newArr[index]} và 1 kí tự ${newArr[index1]}`);