var count=0
document.querySelector("#form").addEventListener("submit",myFunction)
var arr= JSON.parse(localStorage.getItem("data")) || []

function myFunction(){
    arr=[]
    event.preventDefault()
    let c1 = document.querySelector("#mcAlooTikki:checked")
    if(c1!=null){
        arr. push(c1.value)
    }
    let c2 = document.querySelector("#mcPuff:checked")
    if(c2!=null){
      
        arr.push(c2.value)
    }
    let c3 = document.querySelector("#mcEgg:checked")
    if(c3!=null){
    
        arr.push(c3.value)
    }
    let c4 = document.querySelector("#maharajaMc:checked")
    if(c4!=null){
        arr.push(c4.value)
    
    }
    let c5 = document.querySelector("#mcFloat:checked")
    if(c5!=null){
    
        arr.push(c5.value)
    }
    let c6 = document.querySelector("#mcFlurry:checked")
    if(c6!=null){
        arr.push(c6.value)
    
    }
    let c7 = document.querySelector("#filetOFish:checked")
    if(c7!=null){
        arr.push(c7.value)
    
    }
    let c8 = document.querySelector("#mcNuggets:checked")
    if(c8!=null){
        arr.push(c8.value)
    
    }
    let c9 = document.querySelector("#hashbrown:checked")
    if(c9!=null){
        arr.push(c9.value)
    
    }
    let c10 = document.querySelector("#mcChicken:checked")
    if(c10!=null){
        arr.push(c10.value)
    
    }

localStorage.setItem("data",JSON.stringify(arr))

var farr = JSON.parse(localStorage.getItem("data"))
console.log(farr)



    let my_promise = new Promise(function(resolve,reject){
        
let time = Math.random()*3000


if(farr != []){
            setTimeout(function(){


                resolve(count)

            
            },time)
        }
        else if(farr==[]){
            reject("Sorry we cant deliver this item")
        }
    }) 
    
    document.querySelector("#show").innerHTML=""
    my_promise.then(function(count) {
            var a=  document.createElement("div")
            a.innerText=`Your order id ${count} is ready`

        // document.querySelector("#show").append(a)
        
        var simg = document.createElement("div")
        
        for(var i=0;i<farr.length;i++){
            var img = document.createElement("img")
            img.src=farr[i]
            
            simg.append(img)
            
        }
        document.querySelector("#show").append(a,simg)
    })
    count++
}