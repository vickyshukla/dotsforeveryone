document.addEventListener('mousemove', function (event) {
    const navbar = document.querySelector('.navbar-slide');

    if (event.clientY <= 50) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});