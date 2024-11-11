export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('ot-cal-heading');
    }
    if (r === 1) {
      row.classList.add('ot-cal-body');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('tool-table');
        }
        if (d === 1) {
          div.classList.add('tool-cta');
        }
      });
    }
  });
}
