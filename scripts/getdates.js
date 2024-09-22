// Obtengo el elemento por su ID
const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lasModified")

// Obtener o calcular valores
const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

// Asignar valores
currentYearElement.innerText = currentYear;
/* lastModifiedElement.innerText =  `Last modified: ${lastModifiedDate}`; */
lastModifiedElement.innerText =  lastModifiedDate;