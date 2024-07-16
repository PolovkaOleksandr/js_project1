const btnCam=document.querySelector("#btn31")
const btnNog=document.querySelector("#btn32")
const btnPap=document.querySelector("#btn33")

const pRes=document.querySelector("#p3")
const pVarComp=document.querySelector("#var-comp3")

const spanComp=document.querySelector("#rax-comp3")
const spanUser=document.querySelector("#rax-user3")
let Comp=0
let User=0

let Random=0
btnCam.addEventListener("click", gameClickCam)//1
btnNog.addEventListener("click", gameClickNog)//2
btnPap.addEventListener("click", gameClickPap)//3
pRes.textContent=""

function gameClickCam(){
    Random=Math.floor(Math.random() * 3)+1
    if (Random==1){
        pRes.textContent="Нічия"
        pVarComp.textContent="Камінь"
        console.log(Random)
    }
    else if(Random==2){
        pRes.textContent="Ви перемогли"
        pVarComp.textContent="Ножиці"
        User++
        spanUser.textContent=User
        console.log(Random)
    }
    else if(Random==3){
        pRes.textContent="Ви програли"
        pVarComp.textContent="Папір"
        Comp++
        spanComp.textContent=Comp
        console.log(Random)
    }
}


function gameClickNog(){
    Random=Math.floor(Math.random() * 3)+1
    if (Random==1){
        pRes.textContent="Ви програли"
        pVarComp.textContent="Камінь"
        Comp++
        spanComp.textContent=Comp
    }
    else if(Random==2){
        pRes.textContent="Нічия"
        pVarComp.textContent="Ножиці"
        
    }
    else if(Random==3){
        pRes.textContent="Ви перемогли"
        pVarComp.textContent="Папір"
        User++
        spanUser.textContent=User
    }
}


function gameClickPap(){
    Random=Math.floor(Math.random() * 3)+1
    if (Random==1){
        pRes.textContent="Ви перемогли"
        pVarComp.textContent="Камінь"
        User++
        spanUser.textContent=User
    }
    else if(Random==2){
        pRes.textContent="Ви програли"
        pVarComp.textContent="Ножиці"
        Comp++
        spanComp.textContent=Comp
    }
    else if(Random==3){
        pRes.textContent="Нічия"
        pVarComp.textContent="Папір"
        
    }
}