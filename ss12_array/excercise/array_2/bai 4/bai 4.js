// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi
let a = prompt(`Hay nhap so phan tu bat ki`);
let result = [];
let count = 0;
for (i = 0; i < a; i++) {
    result[i] = prompt(`Hay nhap phan tu ban muon ` + (i + 1));
    if (result[i] % 1 !== 0) {
        count++;
    }
}
document.write(count);
