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
  [...block.children].forEach((row) => {
    row.classList.add('sm-carousel');
    [...row.children].forEach((div, d) => {
      div.classList.add('sm-slide');
      div.classList.add('sm-slide-'.concat(d + 1));
      const pTag = div.querySelectorAll('p');
      pTag.forEach((p, i) => {
        if (i === 0) {
          p.classList.add('slide-cta');
        }
        if (i === 1) {
          p.classList.add('slide-img');
        }
      });
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
        $('.ipru-sm-carousel-wrapper .sm-carousel').owlCarousel({
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
            1200: { items: 3.8 },
          },
        });
      } catch (error) {
        // console.log(error.message);
      }
    }, 0);
  });
});
