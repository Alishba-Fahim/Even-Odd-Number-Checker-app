function checkEvenOdd() {
    const number = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(number)) {
        resultDiv.textContent = "Please enter a valid number.";
        resultDiv.style.color = "#e76f51"; 
        resultDiv.style.display = 'block';
        return;
    }

    if (number % 2 === 0) {
        resultDiv.textContent = `${number} is an Even number.`;
        resultDiv.style.color = "#2a9d8f"; 
    } else {
        resultDiv.textContent = `${number} is an Odd number.`;
        resultDiv.style.color = "#264653"; 
    }

    resultDiv.style.display = 'block'; 
}
