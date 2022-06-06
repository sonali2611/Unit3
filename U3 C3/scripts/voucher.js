var user = JSON.parse(localStorage.getItem("user"))
var purch = JSON.parse(localStorage.getItem("purchase")) || []
var sum = +(user.Amount)
document.querySelector("#wallet_balance").innerHTML = sum
var url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
getval();

async function getval() {
    var res = await fetch(url)
    var data = await res.json()
    console.log(data[0].vouchers)
    append(data[0].vouchers)
}

function append(data) {
    data.forEach(element => {
        var box = document.createElement("div")
        box.setAttribute("class", "voucher")

        var img = document.createElement("img")
        img.src = element.image

        var name = document.createElement("h3")
        name.innerText = element.name

        var price = document.createElement("h3")
        price.innerText = element.price

        var btn = document.createElement("button")
        btn.innerText = "Buy"
        btn.setAttribute("class", "buy_voucher")
        btn.addEventListener("click", function () {
            buyer(element);
        })
        box.append(img, name, price, btn)
        document.querySelector("#voucher_list").append(box)
    });
}
function buyer(element) {

    var p = +(element.price)
    if (p > sum) {
        alert("Sorry! insufficient balance")
    }
    else {
        sum = sum - p
        document.querySelector("#wallet_balance").innerHTML = sum
        alert("Hurray! purchase successful")
        purch.push(element)
        localStorage.setItem("purchase", JSON.stringify(purch))

    }
}

