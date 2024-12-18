export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('rate-of-return-heading');
    }
    if (r === 1) {
      row.classList.add('rate-of-return-cards');
      [...row.children].forEach((div) => {
        div.classList.add('rate-of-return');
      });
    }
    if (r === 2) {
      row.classList.add('rate-of-return-points');
    }
  });
}
