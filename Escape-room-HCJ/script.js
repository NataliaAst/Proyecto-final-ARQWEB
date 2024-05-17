function checkAnswer1() {
    const answer1 = document.getElementById('answer1').value.toLowerCase();
    if (answer1 === 'ajo' || answer1 === 'una almohada') {
        document.getElementById('room1').style.display = 'none';
        document.getElementById('room2').style.display = 'block';
    } else {
        alert('Respuesta incorrecta. ¡Inténtalo de nuevo!');
    }
}

function checkAnswer2() {
    const answer2 = document.getElementById('answer2').value.toLowerCase();
    if (answer2 === 'una vela') {
        document.getElementById('room2').style.display = 'none';
        document.getElementById('room3').style.display = 'block';
    } else {
        alert('Respuesta incorrecta. ¡Inténtalo de nuevo!');
    }
}
