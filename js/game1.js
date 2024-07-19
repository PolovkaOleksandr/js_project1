const input=document.querySelector("#inp1")
const btn=document.querySelector("#btn1")
const p=document.querySelector("#p1")

btn.addEventListener("click", gameClick)
function gameClick(){
    if (Number(input.value)==1488) {
        console.log("Ти народився тоді коли експедиція Бартоломеу Діаша у  1488 році обігнула південний край Африки і у 1488 року відкрила мис, названий мисом Доброї Надії. Вітаю!")
    }
    if (Number(input.value)%4==0 ){
        p.textContent="Ви народилися у високосний рік"
    }
    else{
        p.textContent="Ви народилися не у високосний рік"
    }
}