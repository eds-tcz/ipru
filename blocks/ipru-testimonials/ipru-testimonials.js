export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('ipru-test-heading');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('test-head-data');
        }
        if (d === 1) {
          div.classList.add('test-head-cta');
        }
      });
    }
    if (r === 1) {
      row.classList.add('ipru-test-body');
      const tableMain = row.querySelector('table');
      tableMain.classList.add('table-main');
      const tbodyMain = tableMain.querySelector('tbody');
      if (tbodyMain) {
        tbodyMain.classList.add('table-main-tbody');
      }
      [...tableMain.rows].forEach((card, c) => {
        card.classList.add('test-card', 'test-card-'.concat(c + 1));
        const tableSub = card.querySelector('table');
        tableSub.classList.add('table-sub');
        [...tableSub.rows].forEach((box, b) => {
          box.classList.add('test-box', 'test-box-'.concat(b + 1));
          const boxtd = box.querySelectorAll('td');
          boxtd.forEach((td, t) => {
            td.classList.add('box-data-'.concat(t + 1));
          });
        });
      });
    }
  });
}
