//store the products array in localstorage as "products"
var arr=JSON.parse(localStorage.getItem("products"))||[]
document.querySelector("#products").addEventListener("click",myStudent)

function Product(t,d,p,i)
{
this.type=t;
this.desc=d;
this.price=p;
this.image=i;
}

function myStudent()
{
event.preventDefault()
let form =document.getElementById("products");
var type=form.type.value;
var desc=form.desc.value;
var price=form.price.value;
var image=form.image.value;

var show=new Product(type,desc,price,image)
arr.push(show)
// console.log(arr)
localStorage.setItem("products",JSON.stringify(arr))
}