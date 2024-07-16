const input=document.querySelector("#inp2")
const btn=document.querySelector("#btn2")
const p=document.querySelector("#p2")

btn.addEventListener("click", gameClick)
function gameClick(){
    if (Number(input.value)==Math.round(Math.random()*100 )){
        p.textContent="Ви вгадали число"
        
    }
    else{
        p.textContent="Ви не вгадали число"
    }
}