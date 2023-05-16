do {
    c = +prompt(`Hay nhap nhiet do cua ban`);
    if (c > 100) {
        alert(`hay giam nhiet do`);
    } else if (c < 20) {
        alert(`hay tang nhiet do`);
    }
}
while (c > 100 || c < 20);
alert(`Nhiet do cua ban la ` + c);