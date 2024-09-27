const input = document.getElementById("favchap");
const button = document.querySelector('button');
const list = document.getElementById('list');

// Escuchar el evento de clic en el botón
button.addEventListener('click', function() {
    // Verificar que el input no esté vacío
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        const deletebtn = document.createElement('button');

        li.textContent = input.value; // Asigna el valor del input al li
        deletebtn.textContent = "❌"; // Botón de eliminar

        // Agregar funcionalidad al botón de eliminar
        deletebtn.addEventListener('click', function() {
            list.removeChild(li); // Eliminar el li de la lista
        });

        li.append(deletebtn); // Añadir el botón al li
        list.append(li); // Añadir el li a la lista

        input.value = ""; // Limpiar el input
    } else {
        alert("Please, enter a chapter"); // Mensaje si el input está vacío
    }
});

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        button.click(); // Simular clic en el botón
    }
});
