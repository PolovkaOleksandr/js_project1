const canvas = document.getElementById('gameCanvas2');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

// Встановлюємо розміри поля
canvas.width = 900;
canvas.height = 300;

const ball = {
    radius: 20,
    x: canvas.width / 2,
    y: canvas.height / 2
};

let gameActive = false;

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function moveBall(e) {
    if (!gameActive) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let newX = mouseX;
    let newY = mouseY;

    if (mouseX - ball.radius < 0) {
        newX = ball.radius;
    } else if (mouseX + ball.radius > canvas.width) {
        newX = canvas.width - ball.radius;
    }

    if (mouseY - ball.radius < 0) {
        newY = ball.radius;
    } else if (mouseY + ball.radius > canvas.height) {
        newY = canvas.height - ball.radius;
    }

    ball.x = newX;
    ball.y = newY;

    drawBall();
}

function startGame() {
    gameActive = true;
}

function stopGame() {
    gameActive = false;
}

startBtn.addEventListener('click', startGame);
stopBtn.addEventListener('click', stopGame);
canvas.addEventListener('click', moveBall);

// Початкове малювання м'яча
drawBall();


window.addEventListener('keydown', (e) => {  
    if (e.keyCode === 32 && e.target === document.body) {  
      e.preventDefault();  
    }  
  });
