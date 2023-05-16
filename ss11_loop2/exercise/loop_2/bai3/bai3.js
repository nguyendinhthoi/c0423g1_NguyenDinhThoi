// hinh 1
let h = 5;
for (i = 0; i < h; i++) {
    for (j = 0; j < h; j++) {
        if (j <= i)
            document.writeln(`*`);
    }
    document.writeln(`<br/>`);
}
document.writeln("<br/>")
// hinh 2

for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        if (j + i <= 4) {
            document.writeln(`*`)
        }
    }
    document.writeln(`<br/>`)
}
document.writeln(`<br/>`)
// hinh 3

for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        if (j + i >= 4) {
            document.writeln(`*`)
        }else {
            document.writeln(`&nbsp`+`&nbsp`)
        }
    }
    document.writeln(`<br/>`)
}
document.writeln(`<br/>`)
//hinh 4
for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        if (j >= i) {
            document.writeln(`*`)
        }else {
            document.writeln(`&nbsp`+`&nbsp`)
        }
    }
    document.writeln(`<br/>`)
}
document.writeln(`<br/>`)