function heroCarousel() {
  const slides = document.querySelectorAll('.ipru-hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;

  // prettier-ignore
  function updateCarousel() {
    document.querySelector('.ipru-hero-slide.active').classList.remove('active');
    document.querySelector('.indicator.active').classList.remove('active');

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');

    document.querySelector('.ipru-hero').style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  // prettier-ignore
  prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    updateCarousel();
  });
  // prettier-ignore
  nextBtn.addEventListener('click', () => {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    updateCarousel();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });
}

heroCarousel();
