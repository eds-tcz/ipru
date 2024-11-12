let currentSlide = 0;

function showSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function nextSlide() {
  currentSlide =
    (currentSlide + 1) % document.querySelectorAll('.carousel-slide').length;
  updateCarousel();
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + document.querySelectorAll('.carousel-slide').length) %
    document.querySelectorAll('.carousel-slide').length;
  updateCarousel();
}

function updateCarousel() {
  document.querySelectorAll('.card').forEach((card, index) => {
    card.classList.toggle('active', index === currentSlide);
  });
  document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}
