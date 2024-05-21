function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('room1').style.display = 'block';
}

function checkAnswer1(answer) {
    if (answer === 'ajo') {
        document.getElementById('room1').style.display = 'none';
        document.getElementById('room2').style.display = 'block';
    } else {
        alert('Respuesta incorrecta. ¡Inténtalo de nuevo!');
    }
}

function checkAnswer2(answer) {
    if (answer === 'una vela') {
        document.getElementById('room2').style.display = 'none';
        document.getElementById('room3').style.display = 'block';
    } else {
        alert('Respuesta incorrecta. ¡Inténtalo de nuevo!');
    }
}