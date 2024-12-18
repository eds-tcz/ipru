// // script.js

// const track = document.querySelector('.ipru-test-monials'); // Updated selector
// const cards = Array.from(track.children);
// const nextButton = document.querySelector('.right-arrow');
// const prevButton = document.querySelector('.left-arrow');
// const dotsNav = document.querySelector('.carousel-dots');
// const dots = Array.from(dotsNav.children);

// const cardWidth = cards[0].getBoundingClientRect().width;

// // Clone first, second, and last slides for continuous effect
// const firstClone = cards[0].cloneNode(true);
// const secondClone = cards[1].cloneNode(true);
// const lastClone = cards[cards.length - 1].cloneNode(true);

// track.appendChild(firstClone); // Add the first clone at the end
// track.appendChild(secondClone); // Add the second clone at the end
// track.prepend(lastClone); // Add the last clone at the beginning

// // Update the track's new position
// const totalSlides = cards.length + 3; // Including 2 clones at the back and 1 at the front
// let currentIndex = 1; // Start at the first actual slide
// updateCarousel(currentIndex, false); // Set the initial position instantly

// // Update carousel position
// function updateCarousel(index, transition = true) {
//   if (!transition) track.classList.add('no-transition');
//   else track.classList.remove('no-transition');

//   track.style.transform = `translateX(-${index * cardWidth}px)`;

//   // Update dots
//   dots.forEach((dot, idx) => {
//     dot.classList.toggle(
//       'active',
//       idx === (index - 1 + dots.length) % dots.length
//     );
//   });
// }

// // Move to the next slide
// function moveToNext() {
//   currentIndex++;
//   updateCarousel(currentIndex);

//   // Handle looping
//   if (currentIndex === totalSlides - 2) {
//     setTimeout(() => {
//       currentIndex = 1; // Go to first real slide instantly
//       updateCarousel(currentIndex, false);
//     }, 500); // Delay to sync with the transition
//   }
// }

// // Move to the previous slide
// function moveToPrev() {
//   currentIndex--;
//   updateCarousel(currentIndex);

//   // Handle looping
//   if (currentIndex === 0) {
//     setTimeout(() => {
//       currentIndex = totalSlides - 3; // Go to last real slide instantly
//       updateCarousel(currentIndex, false);
//     }, 500); // Delay to sync with the transition
//   }
// }

// // Adjust the initial carousel position
// function updateCarouselPosition() {
//   updateCarousel(currentIndex, false);
// }

// // Dots navigation
// dotsNav.addEventListener('click', (e) => {
//   if (e.target.classList.contains('dot')) {
//     const targetIndex = dots.findIndex((dot) => dot === e.target);
//     currentIndex = targetIndex + 1; // Account for the cloned slides
//     updateCarousel(currentIndex);
//   }
// });

// // Event Listeners for arrows
// nextButton.addEventListener('click', moveToNext);
// prevButton.addEventListener('click', moveToPrev);

// // Auto-play functionality
// setInterval(moveToNext, 5000);
