
    var ss=JSON.parse(localStorage.getItem("products"))||[];
    var container =document.getElementById("#all_products");
    ss.map(function(ele,index){

    var bag = document.createElement("div");

    var type=document.createElement("p");
    type.innerText=ele.type
    var desc=document.createElement("p");
    desc.innerText=ele.desc
    var price=document.createElement("p");
    price.innerText=ele.price
    var image=document.createElement("img");
    image.src=ele.image
    
    var remove=document.createElement("button");
    remove.innerText="REMOVE"
    remove.style.backgroundColor="red"
    remove.style.border="none"
    remove.style.borderRadius="5px"
    
    remove.setAttribute("id","remove_product")
    remove.addEventListener("click",function() {
        removeProduct(ele,index);
    })
    bag.append(type,desc,price,image,remove)
    document.querySelector("#all_products").append(bag)
    })

    function removeProduct(ele,index)
    {
        ss.splice(index,1);
        localStorage.setItem("products",JSON.stringify(ss))
        window.location.reload();
    }