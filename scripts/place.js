// Variables estáticas para la temperatura y la velocidad del viento
const temperature = 25; // en grados Celsius
const windSpeed = 15; // en km/h

// Función para calcular el factor de enfriamiento por viento
function calculateWindChill() {
    let windChill;
    
    // Verificar si las condiciones son adecuadas para el cálculo
    if (temperature <= 10 && windSpeed > 4.8) {
        // Fórmula para calcular el wind chill en grados Celsius
        windChill = (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2); // Redondear a 2 decimales
    } else {
        windChill = "N/A"; // No aplicable
    }

    // Mostrar el resultado en el elemento correspondiente
    document.getElementById("feelsLike").innerHTML = windChill + " °C";
}

// Calcular y mostrar el wind chill al cargar la página
window.addEventListener("load", calculateWindChill);
