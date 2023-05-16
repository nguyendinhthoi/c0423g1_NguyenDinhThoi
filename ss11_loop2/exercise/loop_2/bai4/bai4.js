for (i = 0; i < 7; i++) {
    for (j = 0; j < 21; j++) {
        if (j == 0 || i ==0 || i == 6 || j == 20 ) {
            document.writeln(`*`)
        }else {
            document.writeln(`&nbsp`+`&nbsp`)
        }
    }
    document.writeln(`<br/>`)
}
document.writeln(`<br/>`)