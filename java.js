const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Contador
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Función para el movimiento automático
setInterval(() => {
  counter++;
  if (counter >= carouselImages.length) {
    counter = 0;
  }
  carouselSlide.style.transition = 'transform 1s ease-in-out';
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 3000); // Cambia la imagen cada 3 segundos