function sum() {
    let so1 = document.getElementById("number1").value;
    let so2 = document.getElementById("number2").value;
    let so11 = parseInt(so1)
    let so22 = parseInt(so2)
    let tong = so11 + so22
    document.write("Result : " + tong)
}
function sub() {
    let so1 = document.getElementById("number1").value;
    let so2 = document.getElementById("number2").value;
    let so11 = parseInt(so1)
    let so22 = parseInt(so2)
    let tru = so11 - so22
    document.write("Result : " + tru)
}
function mul() {
    let so1 = document.getElementById("number1").value;
    let so2 = document.getElementById("number2").value;
    let so11 = parseInt(so1)
    let so22 = parseInt(so2)
    let nhan = so11 * so22
    document.write("Result : " + nhan)
}
function div() {
    let so1 = document.getElementById("number1").value;
    let so2 = document.getElementById("number2").value;
    let so11 = parseInt(so1)
    let so22 = parseInt(so2)
    let chia = so11 / so22
    document.write("Result : " + chia)

}