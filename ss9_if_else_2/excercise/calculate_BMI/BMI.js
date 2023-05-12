function check() {
    let weight = document.getElementById('kg').value;
    let height = document.getElementById('m').value;
    let bmi = weight / (height^2)
    if (bmi<18.5){
        document.getElementById('kq').innerHTML = 'Chỉ số BMI của bạn là: ' +bmi +`. <b>Underweight</b>`
    }else if (bmi<25){
        document.getElementById('kq').innerHTML = 'Chỉ số BMI của bạn là: ' +bmi +`. <b>Normal</b>`
    }else if (bmi<30){
        document.getElementById('kq').innerHTML = 'Chỉ số BMI của bạn là: ' +bmi +`. <b>Overweight</b>`
    }else {
        document.getElementById('kq').innerHTML = 'Chỉ số BMI của bạn là: ' +bmi +`. <b>Obese</b>`
    }
}
// '<div> <p style="float: left"> Chỉ số BMI của bạn là: '+  +bmi +`. <h3 style="float: left">Underweight</h3>` + '</p></div>'