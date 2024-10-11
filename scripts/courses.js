const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],

    // Método para inscribir un estudiante en una sección
    enrollStudent: function(sectionNum) {
        // Encontramos la sección que coincide con el número de sección dado
        const index = this.sections.findIndex(section => section.sectionNum === sectionNum);
        // Si la sección existe, incrementamos el número de inscritos
        if (index !== -1) {
            this.sections[index].enrolled += 1;
            this.renderSections(); // Actualizamos la vista llamando a renderSections
        } else {
            console.log(`La sección ${sectionNum} no existe.`);
        }
    },
    // Método para dar de baja a un estudiante de una sección
    dropStudent: function(sectionNum) {
        // Encontramos la sección por su número
        const index = this.sections.findIndex(section => section.sectionNum === sectionNum);
        // Si la sección existe y tiene inscritos, restamos uno
        if (index !== -1 && this.sections[index].enrolled > 0) {
            this.sections[index].enrolled -= 1;
            this.renderSections(); // Actualizamos la vista llamando a renderSections
        } else {
            console.log(`La sección ${sectionNum} no existe o no tiene estudiantes inscritos.`);
        }
    },
    // Método para renderizar las secciones en una tabla
    renderSections: function() {
        displaySections(this.sections); // Llama a la función displaySections para mostrar los datos en pantalla
    }
};

/* console.log(aCourse.sections[1]); */

function setCourse(course){
    let courseNameElement = document.getElementById('courseName');
    let courseCodeElement = document.getElementById('courseCode');

    courseNameElement.textContent = course.name;
    courseCodeElement.textContent = course.code;
   
}



function displaySections(sections) {
    // Seleccionar el cuerpo de la tabla (tbody) donde se agregarán las filas
    const sectionsBody = document.getElementById('sections');
    
    // Limpiar el contenido existente en el tbody (en caso de que haya filas previas)
    sectionsBody.innerHTML = '';
    
    // Recorre cada sección en el array y crea una fila en la tabla
    sections.forEach(section => {
    // Crea una nueva fila
    const row = document.createElement('tr');
        
    // Crea y agrega celdas a la fila
    const sectionNum = document.createElement('td');
    sectionNum.textContent = section.sectionNum; // Número de sección
    row.appendChild(sectionNum);
        
    const roomNum = document.createElement('td');
    roomNum.textContent = section.roomNum; // Número de sala
    row.appendChild(roomNum);
        
    const enrolled = document.createElement('td');
    enrolled.textContent = section.enrolled; // Número de inscritos
    row.appendChild(enrolled);
        
    const days = document.createElement('td');
    days.textContent = section.days; // Días de la clase
    row.appendChild(days);
        
    const instructor = document.createElement('td');
    instructor.textContent = section.instructor; // Instructor
    row.appendChild(instructor);
        
    // Agrega la fila al tbody
    sectionsBody.appendChild(row);
    });
}

function displaySections(sections) {
    const sectionsBody = document.getElementById('sections');
    sectionsBody.innerHTML = '';

    sections.forEach(section => {
        const row = document.createElement('tr');
        
        const sectionNum = document.createElement('td');
        sectionNum.textContent = section.sectionNum; 
        row.appendChild(sectionNum);
        
        const roomNum = document.createElement('td');
        roomNum.textContent = section.roomNum; 
        row.appendChild(roomNum);
        
        const enrolled = document.createElement('td');
        enrolled.textContent = section.enrolled; 
        row.appendChild(enrolled);
        
        const days = document.createElement('td');
        days.textContent = section.days; 
        row.appendChild(days);
        
        const instructor = document.createElement('td');
        instructor.textContent = section.instructor; 
        row.appendChild(instructor);
        
        sectionsBody.appendChild(row);
    });
}

// Event listener para el botón de inscribir estudiante
document.querySelector('#enrollStudent').addEventListener('click', (e) => {
    const sectionNumber = parseInt(document.querySelector('#sectionNumber').value);
    aCourse.enrollStudent(sectionNumber); // Llama al método de aCourse para inscribir
});

// Event listener para el botón de dar de baja estudiante
document.querySelector('#dropStudent').addEventListener('click', (e) => {
    const sectionNumber = parseInt(document.querySelector('#sectionNumber').value);
    aCourse.dropStudent(sectionNumber); // Llama al método de aCourse para dar de baja
});


setCourse(aCourse);
displaySections(aCourse.sections);