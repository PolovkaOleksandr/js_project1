const number1=document.querySelector("#number1")
const number2=document.querySelector("#number2")


const plus=document.querySelector("#plus")
const minus=document.querySelector("#minus")
const mnog=document.querySelector("#mnog")
const dilen=document.querySelector("#dilen")

const dorivn=document.querySelector("#dorivn")


const p4=document.querySelector("#result4")

plus.addEventListener("click", plusClick)
minus.addEventListener("click", minusClick)
mnog.addEventListener("click", mnogClick)
dilen.addEventListener("click", dilenClick)

dorivn.addEventListener("click", dorivnClick)
 let result=p.textContent
function plusClick(){
    dorivn.classList.remove("minus", "mnog", "dilen")
    dorivn.classList.add("plus")
    console.log(1)
}

function minusClick(){
    dorivn.classList.remove("plus", "mnog", "dilen")
    dorivn.classList.add("minus")
    console.log(1)
}

function mnogClick(){
    dorivn.classList.remove("minus", "plus", "dilen")
    dorivn.classList.add("mnog")
    console.log(1)
}

function dilenClick(){
    dorivn.classList.remove("minus", "mnog", "plus")
    dorivn.classList.add("dilen")
    console.log(1)
}

function dorivnClick(){
    if (dorivn.classList.contains("plus")){
        p4.textContent=Number(number1.value)+Number(number2.value)
        console.log(1)}
    else if (dorivn.classList.contains("minus")){
        p4.textContent=Number(number1.value)-Number(number2.value)
        console.log(1)}
    else if (dorivn.classList.contains("mnog")){
        p4.textContent=Number(number1.value)*Number(number2.value)
        console.log(1)}
    else if (dorivn.classList.contains("dilen")){
        p4.textContent=Number(number1.value)/Number(number2.value)
        console.log(1)}
}