// footer //
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

// weather //
function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        let windChill = 13.12 + 0.6215 * temperature - 13.957 * Math.pow(windSpeed, 0.16) + 0.4867 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1);
    } else {
        return "N/A";
    }
}

function getWeatherCondition(temperature, windSpeed) {
    let condition = '';

    if (temperature <=0) {
        condition = "Very Cold";
    } else if (temperature > 0 && temperature <= 10) {
        condition = "Cold";
    } else if (temperature > 10 && temperature <= 20) {
        condition = "Cool";
    } else if (temperature > 20 && temperature <=30) {
        condition = "Warm";
    } else {
        condition = "very Hot";    
    } 

    if (windSpeed > 30) {
        condition += " (Windy) ";
    }

    return condition;
}


const temperature = 5;
const windSpeed = 10;
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill"),textContent = windChill;

window.onload = () => {
    const temperature = 5;
    const windSpeed = 12;
    const windchill = calculateWindChill(temperature, windSpeed);
    const weatherCondition = getWeatherCondition(temperature, windSpeed);
    document.getElementById("windchill").textContent = windChill;
    document.getElementById("conditions").textContent = Conditions;
}