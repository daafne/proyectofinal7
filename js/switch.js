const body= document.body;





const checkbox = document.querySelector(".checkbox");
console.log(checkbox); 

checkbox.addEventListener("click", function(){
    document.body.classList.toggle("dark");
})
    const SwitchSec = document.querySelector(".switchAlt")
    const sol = document.querySelector(".sol");
    const luna = document.querySelector(".luna");
    
    SwitchSec.addEventListener("click", function(){
    sol.classList.toggle("solEsconder")
    luna.classList.toggle("lunaActivar");
    body.classList.toggle("dark");


})
