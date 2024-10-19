// Obtener los elementos del DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Inicializar el array con los capítulos de localStorage o un array vacío
let chaptersArray = getChapterList() || [];

// Recorrer el array y mostrar cada capítulo en la lista
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Escuchar el evento de clic en el botón
button.addEventListener('click', () => {
  if (input.value !== '') {  // Verificar que el input no esté vacío
    displayList(input.value); // Mostrar el capítulo en la lista
    chaptersArray.push(input.value);  // Agregar el capítulo al array
    setChapterList(); // Actualizar localStorage
    input.value = ''; // Limpiar el input
    input.focus(); // Volver el foco al input
  }
});

// Función para mostrar el capítulo en la lista
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // Mostrar el capítulo
  deletebutton.textContent = '❌'; // Crear el botón de eliminar
  deletebutton.classList.add('delete');
  li.append(deletebutton); // Añadir el botón al li
  list.append(li); // Añadir el li a la lista

  // Agregar evento al botón de eliminar
  deletebutton.addEventListener('click', function () {
    list.removeChild(li); // Eliminar el elemento de la lista
    deleteChapter(li.textContent); // Llamar a la función para eliminar
    input.focus(); // Volver el foco al input
  });
}

// Función para actualizar el localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Función para obtener la lista de capítulos desde localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Función para eliminar un capítulo del array y de localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Eliminar el símbolo '❌'
  chaptersArray = chaptersArray.filter(item => item !== chapter); // Filtrar el capítulo eliminado
  setChapterList(); // Actualizar localStorage
}
