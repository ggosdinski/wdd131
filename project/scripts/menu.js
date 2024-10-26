document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const dishName = button.parentElement.querySelector('h3').textContent;
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            if (!favorites.includes(dishName)) {
                favorites.push(dishName);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert(`${dishName} ha sido agregado a tus favoritos.`);
            } else {
                alert(`${dishName} ya está en tus favoritos.`);
            }
        });
    });
});
