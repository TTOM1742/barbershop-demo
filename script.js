// Get the carousel element and initialize it with Bootstrap
const carouselElement = document.getElementById('carouselExampleIndicators');
const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 5000,  // Auto-slide every 5 seconds
    wrap: true       // Loop back to first slide
});

// Optional: Add event listeners for custom behavior
document.getElementById('slide-arrow-next').addEventListener('click', () => {
    carousel.next();
});

document.getElementById('slide-arrow-prev').addEventListener('click', () => {
    carousel.prev();
});