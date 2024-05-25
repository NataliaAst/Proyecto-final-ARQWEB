function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('room1').style.display = 'block';
}

function checkAnswer1(answer) {
    if (answer === 'ajo') {
        document.getElementById('room1').style.display = 'none';
        document.getElementById('room2').style.display = 'block';
    } else {
        alert('PIIINNNGGG!!! INCORRECTO!');
    }
}

function checkAnswer2(answer) {
    if (answer === 'una vela') {
        document.getElementById('room2').style.display = 'none';
        document.getElementById('room3').style.display = 'block';
    } else {
        alert('buuu! *le tira un tómate*');
    }
}

function checkAnswer3(answer) {
    if (answer === 'un perro, un gato y un loro') {
        document.getElementById('room3').style.display = 'none';
        document.getElementById('room4').style.display = 'block';
    } else {
        alert('Mal mal mal maaal!');
    }
}

function checkAnswer4(answer) {
    if (answer === 'las nubes') {
        document.getElementById('room4').style.display = 'none';
        document.getElementById('room5').style.display = 'block';
    } else {
        alert('Duérmete un rato mejor');
    }
}