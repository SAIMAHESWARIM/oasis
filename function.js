function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    
    var kelvin = celsius + 273.15;
    document.getElementById("kelvin").value = kelvin.toFixed(2);
}