export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('time-weighted-return-heading');
    }
    if (r === 1) {
      row.classList.add('time-weighted-return-cards');
      [...row.children].forEach((div) => {
        div.classList.add('time-weighted-return');
      });
    }
    if (r === 2) {
      row.classList.add('time-weighted-return-points');
    }
  });
}