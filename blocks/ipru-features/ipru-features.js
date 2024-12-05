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
