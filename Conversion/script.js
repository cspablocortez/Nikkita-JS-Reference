function convert(e) {
    const elementID = e.id;                                                      
    const degrees = document.getElementById(elementID).value;                                          
    const isFahrenheit = elementID === 'fahrenheit';

    const result = isFahrenheit ? getCelsius(degrees) : getFahr(degrees);
    const targetElement = document.getElementById(isFahrenheit ? 'celsius' : 'fahrenheit'); // grab the opposite box depending on function caller ID
    targetElement.value = result;
}

function getCelsius(degrees) {
    const f = parseFloat(degrees);
    return Math.floor((5/9) * (f - 32));
}

function getFahr(degrees) {
    const c = parseFloat(degrees);
    return Math.floor(((9/5) * c) + 32);
}