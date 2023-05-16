let khung, i, j;
khung = `<table border="10" width="300" cellspacing="0" cellpadding="5"; style="text-align: center" >`;
for (i = 1; i <= 10; i++) {
    khung = khung + `<tr>`;
    for (j = 1; j <= 10; j++) {
        khung = khung + `<td>` + j + `*` + i + `=` + j * i + `<td/>`;
    }
    khung = khung + `<tr/>`;
}
khung = khung + `<table/>`;
document.write(khung);