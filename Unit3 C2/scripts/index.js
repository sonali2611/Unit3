// Add the coffee to local storage with key "coffee"
const url=`https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch(url).then(function(res){
    return res.json();
}).then(function(res){
    console.log(res);
    display_data(res.menu.data)
})
// let res=awaitfetch(url)
// let data=await res.json();
// // let coffee=data
// console.log(data)
let arr=JSON.parse(localStorage.getItem("coffee"))||[]
let total_sum=arr.length;
let container=document.querySelector("#coffee_count");
container.innerText=total_sum

function display_data(data)
{
    data.map(function(el){
        var box=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.image;
        let name=document.createElement("h2")
        name.innerText=el.title;
        let price=document.createElement("h2")
        price.innerText=el.price;

        let bookbutton=document.createElement("button")
        bookbutton.innerText="Add to Bucket"
        bookbutton.setAttribute("id","add_to_bucket")
        bookbutton.addEventListener("click",function(){
            add_bucket(el);
        })
        box.append(image,name,price,bookbutton)
        console.log(box)
        document.querySelector("#menu").append(box)
    })

    function add_bucket(el){
            arr.push(el)
            localStorage.setItem("coffee",JSON.stringify(arr))
            let total_sum=arr.length;
            let container=document.querySelector("#coffee_count");
            container.innerText=total_sum
    }
}