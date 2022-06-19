

const api="hMs_d1xN3c09DTri6kMZtd2yL82D7yNq1bRH4XZ0AcI"

import {navbar} from "../components/navbar.js";
let x = document.getElementById('navbar')
x.innerHTML=navbar()

import {find,append} from "./fetch.js"

//======================================================================
//     appending data to body & featching data using Import Export
//========================================================================

let searchfun =(e)=>{
    if(e.key==="Enter"){
        let type = document.getElementById('query').value;
    find(api,type).then((data)=>{
        

        console.log(data)
        let container=document.getElementById('container')
        container.innerHTML=""
        append(data.results,container)
    });

    }
};
document.getElementById("query").addEventListener("keydown",searchfun);

//========================================================================
//       search funcionaliy accourding to conditions provided
//==========================================================================
let categories = document.getElementById("category").children;
// console.log(categories)


function catsearch(){
    console.log(this.id);
    find(api,this.id).then((data)=>{
        

        console.log(data)
        let container=document.getElementById('container')
        container.innerHTML=""
        append(data.results,container)
    });
}
for(let el of categories){
    el.addEventListener("click",catsearch);
}
