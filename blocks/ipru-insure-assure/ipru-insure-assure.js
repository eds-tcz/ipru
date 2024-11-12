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
        }
        if (d === 1) {
          div.classList.add('right-card');
          const table = div.querySelector('table');
          if (table) {
            table.classList.add('right-card-table');
            [...table.rows].forEach((tr, i) => {
              tr.classList.add('card-no-'.concat(i + 1));
            });
          }
        }
      });
    }
  });
}
