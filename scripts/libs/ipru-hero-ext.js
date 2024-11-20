function heroCarousel() {
  const slides = document.querySelectorAll('.ipru-hero-slide');
  const indicators = document.querySelectorAll('.indicators span'); // Select individual spans
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0; // Start at the first slide

  // prettier-ignore
  function updateCarousel() {
    // Remove active class from all slides and indicators
    slides.forEach((slide) => slide.classList.remove('active'));
    indicators.forEach((indicator) => indicator.classList.remove('active'));

    // Add active class to the current slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');

    // Set the correct transform value for the slides
    document.querySelector('.ipru-hero').style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Event listener for the 'prev' button
  prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    updateCarousel();
  });

  // Event listener for the 'next' button
  nextBtn.addEventListener('click', () => {
    // Immediately reset to the first slide after the last one
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
    updateCarousel();
  });

  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index; // Set the slide to the clicked indicator
      updateCarousel();
    });
  });

  // Initialize the carousel
  updateCarousel();
}

heroCarousel();
