
let calcTimeInp = document.querySelector(".calc-time-inp");
let calcTimeInpBtn = document.querySelector(".calc-time-inp-btn");
let answer = document.querySelector(".calc-time-text");

function formatTime(secs) {
  let days = Math.floor(secs / 86400);
  let hours = Math.floor((secs - days * 86400) / 3600);
  let minutes = Math.floor(((secs - days * 86400) - hours * 3600) / 60);
  let seconds = Math.floor(secs - days * 86400 - hours * 3600 - minutes * 60);

  return `Це буде ${days} днів, ${hours} годин, ${minutes} хвилин та ${seconds} секунд`;
}

calcTimeInpBtn.addEventListener("click", () => {
  const inputValue = parseInt(calcTimeInp.value);
  if (!isNaN(inputValue)) {
    answer.textContent = formatTime(inputValue);
  } else {
    answer.textContent = "Введіть коректне значення";
  }
});