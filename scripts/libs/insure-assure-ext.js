function callFunction() {
  let currentSlide = 0;

  window.updateCarousel = function () {
    document.querySelectorAll('.card').forEach((card, index) => {
      card.classList.toggle('active', index === currentSlide);
    });
    document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
  };

  window.showSlide = function (index) {
    currentSlide = index;
    updateCarousel();
  };

  // prettier-ignore
  window.nextSlide = function () {
    currentSlide = (currentSlide + 1) % document.querySelectorAll('.carousel-slide').length;
  updateCarousel();
}
  // prettier-ignore
  window.prevSlide = function () {
    currentSlide = (currentSlide - 1 + document.querySelectorAll('.carousel-slide').length) % document.querySelectorAll('.carousel-slide').length;
  updateCarousel();
}
}

callFunction();
