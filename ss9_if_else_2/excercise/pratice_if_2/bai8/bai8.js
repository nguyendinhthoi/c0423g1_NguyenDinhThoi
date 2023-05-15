let a = +prompt(`Hay nhap tuoi cua ban`);
if (a > 0) {
    if (a < 120) {
        alert(`Day la tuoi cua ban`);
    } else {
        alert(`Chuc mung ban, ban la nguoi song lau nhat the gioi!!!`);
    }
} else {
    alert(`Vui long nhap lai tuoi cua ban`);
}