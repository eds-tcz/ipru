export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('insure-assure-heading');
      const para = row.querySelectorAll('p');
      para.forEach((p, i) => {
        p.classList.add('para-'.concat(i + 1));
      });
    }
    if (r === 1) {
      row.classList.add('insure-assure-body');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('left-card');
          const table = div.querySelector('table');
          if (table) {
            table.classList.add('grid-table');
            [...table.rows].forEach((tr, i) => {
              if (i === 0) {
                [...tr.cells].forEach((td, j) => {
                  if (i === 0 && j === 0) {
                    td.classList.add('active');
                  }
                  td.classList.add('card');
                  td.setAttribute('onclick', `showSlide(${j})`);
                });
              }
              if (i === 1) {
                [...tr.cells].forEach((td, j) => {
                  td.classList.add('card');
                  td.setAttribute('onclick', `showSlide(${j + 3})`);
                });
              }
              if (i === 2) {
                [...tr.cells].forEach((td, j) => {
                  if (j === 0) {
                    td.classList.add('card');
                    td.setAttribute('onclick', `showSlide(${6})`);
                  }
                });
              }
            });
          }
        }
        if (d === 1) {
          div.classList.add('right-card');
          const table = div.querySelector('table');
          if (table) {
            table.classList.add('right-card-table');
            [...table.rows].forEach((tr, i) => {
              [...tr.cells].forEach((td, j) => {
                td.classList.add('carousel-slide');
                if (i === 0 && j === 0) {
                  td.classList.add('active');
                }
              });
            });
          }
          const siblingP = div.querySelector('p:not(table p)');
          if (siblingP) {
            siblingP.classList.add('carousel-controls');
            const hlink = siblingP.querySelectorAll('picture');
            hlink.forEach((a, i) => {
              if (i === 0) {
                a.setAttribute('onclick', 'prevSlide()');
                a.removeAttribute('href');
              }
              if (i === 1) {
                a.setAttribute('onclick', 'nextSlide()');
                a.removeAttribute('href');
              }
            });
          }
        }
      });
    }
  });
}

let currentSlide = 0;

function updateCarousel() {
  document.querySelectorAll('.card').forEach((card, index) => {
    card.classList.toggle('active', index === currentSlide);
  });
  document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}

function showSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// prettier-ignore
function nextSlide() {
  currentSlide = (currentSlide + 1) % document.querySelectorAll('.carousel-slide').length;
  updateCarousel();
}
// prettier-ignore
function prevSlide() {
  currentSlide = (currentSlide - 1 + document.querySelectorAll('.carousel-slide').length) % document.querySelectorAll('.carousel-slide').length;
  updateCarousel();
}

// prettier-ignore
export {
  showSlide,
  nextSlide,
  prevSlide,
  updateCarousel,
};
