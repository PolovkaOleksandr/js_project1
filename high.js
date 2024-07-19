const buttons = document.querySelectorAll('.btn_g4');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Remove the highlighted class from all buttons
    buttons.forEach((btn) => btn.classList.remove('highlighted'));

    // Add the highlighted class to the clicked button
    e.currentTarget.classList.add('highlighted');
  });
});