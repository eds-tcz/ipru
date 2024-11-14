export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('ipru-hero-slide');
    row.classList.add('hero-slide-'.concat(r + 1));
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('slide-body');
        const img = div.querySelector('img');
        if (img) {
          div.style.backgroundImage = `url(${img.src})`;
        }
        img.remove();
        const pTag = div.querySelector(':scope > p:first-child');
        if (pTag) {
          pTag.remove();
        }
      }
      const phead = div.querySelector('p');
      phead.classList.add('hero-cta');

      const table = div.querySelector('table');
      if (table) {
        [...table.rows].forEach((tr, i) => {
          tr.classList.add('tab-row-'.concat(i + 1));
        });
      }
    });
  });
}
