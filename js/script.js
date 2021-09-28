function readData() {
    var celsius = document.querySelector('[data-js="celsius"]').value;
    document
        .querySelector('[data-js="result"]').innerHTML = convert(celsius);
}

function clearFields(){
    document.querySelector('[data-js="celsius"]').value = "";
    document
        .querySelector('[data-js="result"]').innerHTML = "";
}

function convert(c) {
    var fahrenheit = (9 * c + 160) / 5;
    var showResult = `Resultado: ${fahrenheit.toFixed(0)}ºF`;

    return (
        showResult
    );
}