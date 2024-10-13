const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const title = document.querySelector("h1");

// Mostrar menú al hacer clic en el botón de hamburguesa
open.addEventListener("click", () => {
    nav.classList.add("visible");
    open.style.display = "none"; // Oculta el botón de hamburguesa
    close.style.display = "block"; // Muestra el botón de cerrar (X)
    title.style.display = "none"; // Oculta el título
});

// Cerrar menú al hacer clic en el botón de cerrar (X)
close.addEventListener("click", () => {
    nav.classList.remove("visible");
    close.style.display = "none"; // Oculta el botón de cerrar (X)
    open.style.display = "block"; // Muestra el botón de hamburguesa
    title.style.display = "block"; // Muestra el título
});

// Detectar cambios de tamaño de ventana
window.addEventListener("resize", () => {
    if (window.innerWidth > 750) {
        // Si estamos en pantallas grandes, oculta el botón open y close
        open.style.display = "none";
        close.style.display = "none"; 
        title.style.display = "block"; // Muestra el título
        nav.classList.remove("visible");  // Cierra el menú si está abierto
    } else {
        // Si estamos en pantallas pequeñas, muestra el botón de hamburguesa
        open.style.display = "block";
        // Aseguramos que el título se mantenga visible
        title.style.display = "block";
    }
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires City, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087.jpg"
      },
      {
        templeName: "Madrid Spain",
        location: "Madrid City, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-27298.jpg"
      }
  ];

  const navItems = document.querySelectorAll('.nav-list li a'); 
  const imageContainer = document.querySelector('.image-container'); 
  
  // Función para mostrar todos los templos
  const displayTemples = (templesToDisplay) => {
      imageContainer.innerHTML = ''; // Limpia el contenedor antes de mostrar los templos
  
      templesToDisplay.forEach(temple => {
          const templeCard = `
              <div class="temple-card">
                  <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                  <h3>${temple.templeName}</h3>
                  <p>${temple.location}</p>
                  <p>Area: ${temple.area} ft²</p>
                  <p>Dedication Date: ${temple.dedicated}</p>
              </div>
          `;
          imageContainer.innerHTML += templeCard; 
      });
  };
  
  // Mostrar todos los templos al cargar la página
  displayTemples(temples);
  
  // Agregar evento de click a los elementos de navegación
  navItems.forEach(item => {
      item.addEventListener('click', (e) => {
          e.preventDefault(); 
  
          const filter = item.textContent.toLowerCase(); // Obtiene el texto del elemento en minúsculas
  
          let filteredTemples;
  
          // Filtrar templos según la opción
          switch (filter) {
              case 'old':
                  filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                  break;
              case 'new':
                  filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                  break;
              case 'large':
                  filteredTemples = temples.filter(temple => temple.area > 90000);
                  break;
              case 'small':
                  filteredTemples = temples.filter(temple => temple.area < 10000);
                  break;
              case 'home':
              default:
                  filteredTemples = temples; 
                  break;
          }
  
          displayTemples(filteredTemples);
      });
  });
  