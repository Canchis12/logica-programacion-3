function calcularFactorial() {
    const num = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(num) || num < 0) {
        resultado.textContent = "Por favor ingresa un número válido (0 o mayor).";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    resultado.textContent = `El factorial de ${num} es: ${factorial}`;
}
