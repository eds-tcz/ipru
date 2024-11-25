// prettier-ignore
function loadExternalResources(resources) {
  return Promise.all(
    resources.map(
      (resource) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        new Promise((resolve, reject) => {
          let element;

          if (resource.type === 'script') {
            element = document.createElement('script');
            element.src = resource.src;
            // element.async = true;
            element.onload = resolve;
            element.onerror = reject;
          } else if (resource.type === 'link') {
            element = document.createElement('link');
            element.href = resource.href;
            element.rel = 'stylesheet';
            element.onload = resolve;
            element.onerror = reject;
          }

          document.head.appendChild(element);
        }),
    ),
  );
}
export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('feat-cards');
    row.classList.add('feat-cards-'.concat(r + 1));

    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('feat-table');
      }
      if (d === 1) {
        div.classList.add('feat-body');
      }
      if (d === 2) {
        div.classList.add('feat-line');
      }
      if (d === 3) {
        div.classList.add('feat-cta');
      }
    });
  });
}

loadExternalResources([
  {
    type: 'script',
    src: 'https://www.research360.in/dist/js/jquery-3.7.1.min.js',
  },
]).then(() => {
  loadExternalResources([
    {
      type: 'script',
      src: 'https://www.research360.in/dist/js/owl.carousel-min.js',
    },
    {
      type: 'link',
      href: 'https://www.research360.in/dist/style/carousel.min.css',
    },
  ]).then(() => {
    setTimeout(() => {
      try {
        // eslint-disable-next-line no-undef
        $('.ipru-features').owlCarousel({
          loop: true,
          margin: 15,
          autoHeight: true,
          // dots: false,
          nav: true,
          responsiveClass: true,
          responsive: {
            0: { items: 1 },
            768: { items: 1 },
            992: { items: 2 },
            1200: { items: 3.5 },
          },
        });
      } catch (error) {
        // console.log(error.message);
      }
    }, 0);
  });
});
