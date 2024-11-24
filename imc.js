function imcFcn() {
    let peso = document.querySelector('#peso').value;
    peso = parseFloat(peso);
    let altura = document.querySelector('#altura').value;
    altura = parseFloat(altura);
    altura = Math.pow(altura,2);
    let imc = peso / altura;
    let colorFondo;
    let simc = '';
    switch (true) {
        case imc <= 18.5:
            simc = 'Bajo peso (Delgado)';
            colorFondo = 'rgb(29,145,208)';
        break;
        case imc >= 18.5 && imc < 25:
            simc = 'Adecuado (Aceptable)';
            colorFondo = 'rgb(90,181,230)';
        break;
        case imc >= 25 && imc < 30:
            simc = 'Sobrepeso (Sobrepeso)';
            colorFondo = 'rgb(47,161,72)';
        break;
        case imc >= 30 && imc < 35:
            simc = 'Obesidad grado I (Obesidad)';
            colorFondo = 'rgb(244,204,53)';
        break;
        case imc >= 35 && imc < 40:
            simc = 'Obesidad grado II (Obesidad)';
            colorFondo = 'rgb(247,167,22)';
        break;
        case imc > 40:
            simc = 'Obesidad grado III (Obesidad)';
            colorFondo = 'rgb(212,34,43)';
        break;
    }

    document.querySelector('#imc').value = imc.toFixed(2);
    document.querySelector('#imc').style.backgroundColor = colorFondo;
    document.querySelector('#imc').style.color = 'white';
    document.querySelector('#estadoimc').value = simc;
    document.querySelector('#estadoimc').style.backgroundColor = colorFondo;
    document.querySelector('#estadoimc').style.color = 'white';
}

function temperatureFcn() {
    let temp1 = parseFloat(document.querySelector('#temp1').value);       
    
    let select1 = parseFloat(document.querySelector('#select1').value);      
    let select2 = parseFloat(document.querySelector('#select2').value);
    let resultado = 0;
    if(select1 == select2) {
        resultado = temp1;        
    } else if(select1 == 1 && select2 == 2){
        resultado = (9/5)*temp1 + 32;
    } else if(select1 == 1 && select2 == 3){
        resultado = temp1 + 273;
    } else if(select1 == 1 && select2 == 4){
        resultado = (temp1 + 273)*(9/5);
    } else if(select1 == 2 && select2 == 3){
        resultado = (temp1 - 273)*(9/5) + 32;
 
    } else if(select1 == 2 && select2 == 4){
        resultado = temp1 - 460;

    } else if(select1 == 3 && select2 == 4){
        resultado = temp1 / 1.8;

    } else if(select1 == 2 && select2 == 1){
        resultado = (temp1 - 32)*5/9; /* Aquí */

    } else if(select1 == 3 && select2 == 1){
        resultado = temp1 - 273;

    } else if(select1 == 3 && select2 == 2){
        resultado = (temp1 - 273)*9/5 + 32;

    } else if(select1 == 4 && select2 == 1){
        resultado = (temp1 - 492) * 5/9;

    } else if(select1 == 4 && select2 == 2){
        resultado = temp1 - 460;

    } else if(select1 == 4 && select2 == 3){
        resultado = temp1 * 5/9;

    }

    document.querySelector('#resulttemp').textContent = resultado.toFixed(2);
}