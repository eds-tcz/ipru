export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('test-card', 'swiper-slide', 'test-card-'.concat(r + 1));
    const tableSub = row.querySelector('table');
    tableSub.classList.add('table-sub');
    [...tableSub.rows].forEach((box, b) => {
      box.classList.add('test-box', 'test-box-'.concat(b + 1));
      const boxtd = box.querySelectorAll('td');
      boxtd.forEach((td, t) => {
        td.classList.add('box-data-'.concat(t + 1));
      });
    });
  });
  const testimonials = block.closest('.ipru-test-monials');
  if (testimonials) {
    // Add the class 'swiper-wrapper' to 'ipru-test-monials'
    testimonials.classList.add('swiper-wrapper');

    // Add the class 'swiper' to the parent of 'ipru-test-monials'
    const parentElement = testimonials.parentElement;
    if (parentElement) {
      parentElement.classList.add('swiper');
    }
    // Add the raw HTML directly as a sibling
    testimonials.insertAdjacentHTML(
      'afterend',
      `
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>

      `
    );
  }
}
