function callFunction() {
  let currentSlide = 0;

  // Named function to update the carousel
  function updateCarousel() {
    document.querySelectorAll('.ia-card').forEach((card, index) => {
      card.classList.toggle('active', index === currentSlide);
    });
    document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
  }

  // Named function to display a specific slide
  function showSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  // Named function to move to the next slide
  function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }

  // Named function to move to the previous slide
  function prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Assign named functions to `window` for global access
  window.updateCarousel = updateCarousel;
  window.showSlide = showSlide;
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
}

callFunction();
