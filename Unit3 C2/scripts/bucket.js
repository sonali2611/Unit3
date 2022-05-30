// On clicking remove button the item should be removed from DOM as well as localstorage.
let arr = JSON.parse(localStorage.getItem("coffee"))
console.log(arr.price)
let total =arr.reduce(function(sum,{price}){
    return sum + Number(price);
})

let tot_val=document.querySelector("#total_amount")
tot_val.innerText="Total Price"+total;

arr.map(function(el,i){
    var box=document.createElement("div")
    let image=document.createElement("img")
        image.src=el.image;
        let name=document.createElement("h2")
        name.innerText=el.title;
        let price=document.createElement("h2")
        price.innerText="RS"+" "+el.price;
       
        let rebutton = document.createElement("button")
        rebutton.innerText="REMOVE"
        rebutton.style.backgroundColor="red";
        rebutton.setAttribute("id","remove_coffee")
        rebutton.addEventListener("click",function(){
            remove(el,index);
        })
        box.append(image,name,price.rebutton)
        console.log(box)
        document.querySelector("#bucket").append(box)
})
function remove(el,i){
    arr.splice(i,1)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload();
}














