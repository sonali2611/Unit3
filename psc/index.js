

let id ;
function debounce (func,delay){
if(id){
   clearTimeout(id)
}
id = setTimeout(function(){
   func()
},delay)
}

async function main(){

 let movie_name = document.getElementById("search").value  

let url = `https://swapi.dev/api/people/?search=${movie_name}`

let res = await fetch(url);

let data = await res.json();

return data.results


}


function append(data){
    
let container = document.getElementById("container")
container.innerHTML=null;


data.forEach(function(el){


 var name = document.createElement("h3")
 name.innerText = el.name
 name.style.color="white"
 
 var birth = document.createElement("p")
 birth.innerText =el.birth_year
 birth.style.color="white"


 container.append(name,birth)

})


}


async function sonali(){
   let  data = await main()

   append(data)
}
