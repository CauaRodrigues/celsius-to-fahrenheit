//Conversão de Celsius para Fahrenheit
function readDataCelsius() {
    var celsius = document.querySelector('[data-js="celsius"]').value;
    var fahrenheit = (9 * celsius + 160) / 5;
    var showResult = `Resultado: ${fahrenheit.toFixed(0)}ºF`;

    document
        .querySelector('[data-js="resultCelsius"]').innerHTML = showResult;
}

function clearFieldsCelsius(){
    document.querySelector('[data-js="celsius"]').value = "";
    document
        .querySelector('[data-js="resultCelsius"]').innerHTML = "";
}


//Conversão de Fahrenheit
function readDataFahrenheit() {
    var fahrenheit = document.querySelector('[data-js="fahrenheit"]').value;
    var celsius = (fahrenheit - 32) * (5 / 9);
    var showResultInFahrenheit = `Resultado: ${celsius.toFixed(0)}ºC`;

    document
        .querySelector('[data-js="resultFahrenheit"]').innerHTML = showResultInFahrenheit;
}

function clearFieldsFahrenheit() {
    document.querySelector('[data-js="fahrenheit"]').value = "";
    document
        .querySelector('[data-js="resultFahrenheit"]').innerHTML = "";
}