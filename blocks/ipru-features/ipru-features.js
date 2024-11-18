export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('features-heading');
    }
    if (r !== 0) {
      row.classList.add('feat-cards');
      row.classList.add('feat-cards-'.concat(r));

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
    }
  });
}
