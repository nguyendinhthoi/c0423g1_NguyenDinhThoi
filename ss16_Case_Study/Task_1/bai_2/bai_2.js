// Bài 2: Viết chương trình kiểm tra một ký tự trong bảng chữ cái tiếng anh là nguyên âm hay phụ âm.
// Ký tự là bất kỳ được nhập từ bàn phím.
// Các ký tự nguyên âm bao gồm: 'o', 'u', 'i', 'a', 'e' hoặc 'O', 'U', 'I', 'A', 'E'
let a = prompt(`Let enter any character!~~`);
switch (a) {
    case 'o':
    case 'u':
    case 'i':
    case 'a':
    case 'e':
    case 'O':
    case 'U':
    case 'I':
    case 'A':
    case 'E':
        alert(`${a} is a vowel`);
        break;
    default :
        alert(`${a} is not a vowel`);
}