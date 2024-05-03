const input = document.querySelector("#add");
const btn = document.querySelector(".topla");
const ul = document.querySelector(".create");
const todo = document.querySelector("#todo");

function ElaveEt() {
    const todoMetin = input.value;
    if (todoMetin.trim() !== "") { 
        input.style.border = "2px solid black";
        const li = document.createElement("li");
        li.textContent = todoMetin;
        ul.append(li);
        input.value = "";
    }
    else{
        input.style.border = "2px solid red";
    }
 
}
// function clear() {
//     console.log("sara");
// }
let clear = document.querySelector(".btn")
clear.addEventListener("click" , ()=>{
    ul.innerHTML="";
})