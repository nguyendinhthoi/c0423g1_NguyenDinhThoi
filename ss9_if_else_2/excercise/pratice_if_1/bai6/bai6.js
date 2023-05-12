let doanhthu = +prompt(`Doanh thu cua ban la : `)
let hoahong
if (doanhthu>=100000000){
     hoahong = (doanhthu * 7)/100
}else if (doanhthu>=50000000){
     hoahong = (doanhthu * 5)/100
}else {
     hoahong = (doanhthu *2)/100
}
alert(`Hoa hong cua ban la :`  + hoahong + `VND` )
