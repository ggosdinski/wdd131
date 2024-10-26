document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    // Show the button when the user scrolls down 20px from the top of the document
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    backToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
});





// JavaScript to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');
    const successMessage = document.getElementById('successMessage');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Show success message
        successMessage.style.display = 'block';

        // Optionally, reset the form fields
        reservationForm.reset();
    });
});
