const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const dinoImage = document.getElementById('dinoImage');
const cactusImage = document.getElementById('cactusImage');

let dino, cactus, isGameOver, score, scoreInterval;

function init() {
    dino = {
        x: 50,
        y: 260,
        width: 70,
        height: 70,
        dy: 0,
        gravity: 0.6,
        jumpPower: -15,
        isJumping: false
    };

    cactus = {
        x: canvas.width,
        y: 260,
        width: 60,
        height: 70,
        speed: 5
    };

    isGameOver = false;
    score = 0;
    restartButton.style.display = 'none';
    startButton.style.display = 'none';
    canvas.style.display = 'block';
    if (scoreInterval) clearInterval(scoreInterval);
    scoreInterval = setInterval(() => {
        if (!isGameOver) score++;
    }, 5); // збільшуємо рахунок кожні 100 мс
}

function drawDino() {
    ctx.drawImage(dinoImage, dino.x, dino.y, dino.width, dino.height);
}

function drawCactus() {
    ctx.drawImage(cactusImage, cactus.x, cactus.y, cactus.width, cactus.height);
}

function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Курс єни до гривні: ${score}`, 10, 30);
}

function updateDino() {
    if (dino.isJumping) {
        dino.dy += dino.gravity;
        dino.y += dino.dy;

        if (dino.y + dino.height >= canvas.height) {
            dino.y = canvas.height - dino.height;
            dino.isJumping = false;
        }
    }
}

function updateCactus() {
    cactus.x -= cactus.speed;
    if (cactus.x + cactus.width < 0) {
        cactus.x = canvas.width;
    }
}

function checkCollision() {
    if (
        dino.x < cactus.x + cactus.width &&
        dino.x + dino.width > cactus.x &&
        dino.y < cactus.y + cactus.height &&
        dino.y + dino.height > cactus.y
    ) {
        isGameOver = true;
        clearInterval(scoreInterval);
    }
}

function gameLoop() {
    if (isGameOver) {
        ctx.fillStyle = 'red';
        ctx.font = '48px Arial';
        // ctx.fillText('Гру завершено', 200, 100);
        restartButton.style.display = 'block';
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawDino();
    drawCactus();
    drawScore();
    updateDino();
    updateCactus();
    checkCollision();

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !dino.isJumping) {
        dino.dy = dino.jumpPower;
        dino.isJumping = true;
    }
});

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    init();
    gameLoop();
});

restartButton.addEventListener('click', () => {
    init();
    gameLoop();
});

// Після завантаження сторінки показуємо кнопку "Почати гру"
window.onload = () => {
    startButton.style.display = 'block';
};
window.addEventListener('keydown', (e) => {  
    if (e.keyCode === 32 && e.target === document.body) {  
      e.preventDefault();  
    }  
  });
