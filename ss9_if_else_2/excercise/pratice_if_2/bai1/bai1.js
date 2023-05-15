let doC = +prompt(`Nhap do C vao day : `);
f = doC * 1.8 + 32;
if (doC == ``) {
    alert(`Hay nhap lai`);
} else {
    alert(`Do F cua ban la ` + f);
}