const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const containerTop = container.getBoundingClientRect().top;
    const containerVisible = containerTop < windowHeight;

    if (containerVisible) {
        container.classList.add('show');
    }
});
