document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultDisplay = document.getElementById('result');

    if (isNaN(temperatureInput)) 
    {
        resultDisplay.textContent = "Please enter a valid number!!";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature, convertedUnit;

    if (unit === "Celsius") 
    {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } 
    else if (unit === "Fahrenheit") 
    {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
    } 
    else if (unit === "Kelvin") 
    {
        convertedTemperature = temperature - 273.15;
        convertedUnit = "Celsius";
    }

    // Convert Kelvin to Fahrenheit
    if (unit === "Kelvin") 
    {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        convertedUnit = "Fahrenheit";
    }

    // Convert Celsius to Kelvin
    if (unit === "Celsius") 
    {
        convertedTemperature = temperature + 273.15;
        convertedUnit = "Kelvin";
    }

    // Convert Fahrenheit to Kelvin
    if (unit === "Fahrenheit") 
    {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        convertedUnit = "Kelvin";
    }

    resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
});
