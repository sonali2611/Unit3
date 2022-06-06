document.querySelector("form").addEventListener("submit",myFunction)

arr=[];
function myFunction()
{
    event.preventDefault();
    var data={  
    Name:form.name.value,
    Email:form.email.value,
    Address:form.address.value,
    Amount:form.amount.value
};
arr.push(data);
localStorage.setItem("user",JSON.stringify(arr))
// console.log(arr)
window.location.reload();
}