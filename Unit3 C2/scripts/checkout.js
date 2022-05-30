document.querySelector("#confirm_checkout").addEventListener("click",check())


function check()
{
    alert("Yoor order is accepted")
    setTimeout(function()
    {
        alert("Your order is being prepared")
    },3000)
    setTimeout(function()
    {
        alert("Your order is being packed")
    },8000)
    setTimeout(function()
    {

        alert("Your order is out of delivery")
    },10000)
    setTimeout(function()
    {
        alert("Order delivered")
    },12000)
}