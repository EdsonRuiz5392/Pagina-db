function convertirTemperatura() {
    let temp = parseFloat(document.getElementById("inputTemp").value);
    let escala = document.getElementById("inputEscala").value;
    let resultado;

    if (escala === "celsius") {
        resultado = {
            fahrenheit: (temp * 9 / 5) + 32,
            kelvin: temp + 273.15,
            rankine: (temp + 273.15) * 9 / 5
        };
    } else if (escala === "fahrenheit") {
        resultado = {
            celsius: (temp - 32) * 5 / 9,
            kelvin: (temp - 32) * 5 / 9 + 273.15,
            rankine: temp + 459.67
        };
    } else if (escala === "kelvin") {
        resultado = {
            celsius: temp - 273.15,
            fahrenheit: (temp - 273.15) * 9 / 5 + 32,
            rankine: temp * 9 / 5
        };
    } else if (escala === "rankine") {
        resultado = {
            celsius: (temp - 491.67) * 5 / 9,
            fahrenheit: temp - 459.67,
            kelvin: temp * 5 / 9
        };
    }

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    for (let unidad in resultado) {
        resultadoDiv.innerHTML += `<p>${unidad}: ${resultado[unidad].toFixed(2)}</p>`;
    }
}
