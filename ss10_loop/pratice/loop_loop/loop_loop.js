let table = `<table border="1" cellpadding="5" cellspacing="0">`
for (i = 1; i <= 10; i++) {
    table += `<tr>`;
    for (j = 1; j <= 10; j++) {
        table += `<td>` + i * j + `<td/>`;
    }
    table += `<tr/>`;
}
table += `<table/>`;
document.write(table);