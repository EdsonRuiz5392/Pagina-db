function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const listaResultados = document.getElementById('listaResultados');

    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, introduce valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    let mensaje = "";
    let claseColor = "";

    if (imc < 18.5) {
        mensaje = `IMC: ${imc.toFixed(2)} - Bajo peso`;
        claseColor = "verde";
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = `IMC: ${imc.toFixed(2)} - Peso normal`;
        claseColor = "azul";
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
        claseColor = "amarillo";
    } else if (imc >= 30 && imc < 34.9) {
        mensaje = `IMC: ${imc.toFixed(2)} - Obesidad tipo I`;
        claseColor = "cafe";
    } else if (imc >= 35 && imc < 39.9) {
        mensaje = `IMC: ${imc.toFixed(2)} - Obesidad tipo II`;
        claseColor = "naranja";
    } else {
        mensaje = `IMC: ${imc.toFixed(2)} - Obesidad tipo III`;
        claseColor = "rojo";
    }

    const resultadoElemento = document.createElement("li");
    resultadoElemento.textContent = mensaje;
    resultadoElemento.classList.add(claseColor);
    listaResultados.appendChild(resultadoElemento);
}
