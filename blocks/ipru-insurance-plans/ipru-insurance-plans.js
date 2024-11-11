export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('cards-set');
    if (r === 0) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('set-a');
          const table = div.querySelector('table');
          if (table) {
            table.classList.add('insure-table-1');
            [...table.rows].forEach((tr) => {
              tr.classList.add('insure-card-row');
              [...tr.cells].forEach((td) => {
                td.classList.add('insure-card-cell');
              });
            });
          }
        }
        if (d === 1) {
          div.classList.add('set-b');
          const table = div.querySelector('table');
          if (table) {
            table.classList.add('insure-table-2');
            [...table.rows].forEach((tr) => {
              tr.classList.add('insure-row');
              [...tr.cells].forEach((td) => {
                td.classList.add('insure-cell');
              });
            });
          }
        }
      });
    }
  });
}
