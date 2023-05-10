function changeMoney(){
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;
    let amount = document.getElementById("volume").value;
    if (from == "VND" && to == "USD") {

        let amount1 = amount / 23000;
        document.write("Result : " + amount1)
    }else
        {
            let amount2 = amount * 23000
            document.write("Result : " + amount2)
        }
    }




