export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('cards-set-a');
      // Add classes to the table, tr, and td elements inside cards-set-a
      const table = row.querySelector('table');
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
    if (r === 1) {
      row.classList.add('cards-set-b');
      // Add classes to the table, tr, and td elements inside cards-set-a
      const table = row.querySelector('table');
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
