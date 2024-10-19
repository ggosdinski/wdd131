document.querySelectorAll('input[name="rating"]').forEach(star => {
    star.addEventListener('change', () => {
        const ratingValue = star.value;
        // Clear previously selected stars
        document.querySelectorAll('.star').forEach((label, index) => {
            if (index < ratingValue) {
                label.style.color = '#ffa500'; // Change to selected color
            } else {
                label.style.color = '#ccc'; // Reset to default color
            }
        });
    });
});

// Array de productos
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Función para poblar el select con opciones de productos
function populateProductSelect() {
    const productSelect = document.getElementById("product-name");
    
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // ID del producto como valor
        option.textContent = product.name; // Nombre del producto como texto
        productSelect.appendChild(option);
    });
}

// Llama a la función al cargar el documento
document.addEventListener("DOMContentLoaded", populateProductSelect);

// Contador de reseñas en localStorage
function updateReviewCounter() {
    // Verifica si existe el contador en localStorage
    let reviewCount = localStorage.getItem("reviewCount");
    
    // Si no existe, inicializa el contador a 0
    if (!reviewCount) {
        reviewCount = 0;
    }
    
    // Convierte a número y añade 1
    reviewCount = Number(reviewCount) + 1;
    
    // Guarda el nuevo valor en localStorage
    localStorage.setItem("reviewCount", reviewCount);
}

// Llama a la función de contador cuando se carga review.html
if (window.location.pathname.includes("review.html")) {
    updateReviewCounter();
}
