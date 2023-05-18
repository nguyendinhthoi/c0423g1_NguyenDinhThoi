let a = prompt(`Hay nhap chuoi bat ki `);
let c = a.split(``);
for (i = 0; i < c.length; i++) {
    if (c[i] === `-`) {
        c[i] = `_`;
    }
}
alert(c.join(``));