

const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mnog = document.querySelector("#mnog");
const dilen = document.querySelector("#dilen");

const dorivn = document.querySelector("#dorivn");
const p4 = document.querySelector("#result4");

plus.addEventListener("click", plusClick);
minus.addEventListener("click", minusClick);
mnog.addEventListener("click", mnogClick);
dilen.addEventListener("click", dilenClick);
p4.textContent = "";
dorivn.addEventListener("click", dorivnClick);

function plusClick() {
  dorivn.classList.remove("minus", "mnog", "dilen");
  dorivn.classList.add("plus");
  console.log(1);
}

function minusClick() {
  dorivn.classList.remove("plus", "mnog", "dilen");
  dorivn.classList.add("minus");
  console.log(1);
}

function mnogClick() {
  dorivn.classList.remove("minus", "plus", "dilen");
  dorivn.classList.add("mnog");
  console.log(1);
}

function dilenClick() {
  dorivn.classList.remove("minus", "mnog", "plus");
  dorivn.classList.add("dilen");
  console.log(1);
}

function dorivnClick() {
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);

  if (isNaN(num1) || isNaN(num2)) {
    p4.textContent = "Введіть коректне значення";
    return;
  }

  if (dorivn.classList.contains("plus")) {
    p4.textContent = num1 + num2;
  } else if (dorivn.classList.contains("minus")) {
    p4.textContent = num1 - num2;
  } else if (dorivn.classList.contains("mnog")) {
    p4.textContent = num1 * num2;
    if (num1 * num2 === Infinity) {
      console.log("Бесконечность не предел");
    }
  } else if (dorivn.classList.contains("dilen")) {
    if (num2 === 0) {
      p4.textContent = "Ділення на нуль не можливе";
    } else {
      p4.textContent = num1 / num2;
    }
  }
}