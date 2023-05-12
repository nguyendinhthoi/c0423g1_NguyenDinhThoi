let sophut = +prompt(`Hay nhap so phut ban goi`)
sotienbatbuoc = 25000
let sotien
if (sophut <= 50) {
    sotien = sotienbatbuoc + sophut * 600
} else if (sophut <= 150) {
    sotien = sotienbatbuoc + sophut * 400
} else {
    sotien = sotienbatbuoc + sophut * 200
}
alert(`So tien cuoc cua ban la : `  + sotien + `VND`)