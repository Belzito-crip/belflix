let timeLeft = 5; // segundos
const countdownElement = document.getElementById("count");
const progressBar = document.getElementById("progress");

const totalTime = timeLeft;

const timer = setInterval(function() {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    // Atualiza a largura da barra de progresso
    const progressPercent = (timeLeft / totalTime) * 100;
    progressBar.style.width = progressPercent + "%";

    if (timeLeft <= -1) {
        clearInterval(timer);
        window.close();
    }
}, 1000);