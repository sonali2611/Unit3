var purch = JSON.parse(localStorage.getItem("purchase"))
purch.forEach(element => {
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
    box.append(img, name, price)
    document.querySelector("#purchased_vouchers").append(box)
});