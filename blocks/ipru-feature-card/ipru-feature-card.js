export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('ipru-card-feat'.concat(r + 1));
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('card-feat-img');
      }
      if (d === 1) {
        div.classList.add('card-feat-body');
      }
      if (d === 2) {
        div.classList.add('card-feat-arrow');
      }
    });
  });
}
