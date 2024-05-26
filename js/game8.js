let btn=document.querySelector(".btn-nums3")
btn.addEventListener("click", biggestNum)
function biggestNum() {
    let NumsNum1 = parseFloat(document.getElementById("NumsNum1").value);
    let NumsNum2 = parseFloat(document.getElementById("NumsNum2").value);
    let NumsNum3 = parseFloat(document.getElementById("NumsNum3").value);
    let NumsAnswer = document.querySelector(".NumsAnswer");

    if (isNaN(NumsNum1) || isNaN(NumsNum2) || isNaN(NumsNum3)) {
      NumsAnswer.textContent = "Введите числа во все поля";
    } else {
      if (NumsNum1 >= NumsNum2 && NumsNum1 >= NumsNum3) {
        NumsAnswer.textContent = "Перше число найбільше";
      } else if (NumsNum2 >= NumsNum1 && NumsNum2 >= NumsNum3) {
        NumsAnswer.textContent = "Друге число найбільше";
      } else {
        NumsAnswer.textContent = "Третє число найбільше";
      }
    }
  }