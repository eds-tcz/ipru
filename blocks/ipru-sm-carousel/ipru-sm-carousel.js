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
