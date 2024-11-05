export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('ipru-wbo-heading');
    }
    if (r === 1) {
      row.classList.add('ipru-wbo-cards');
      [...row.children].forEach((div, d) => {
        div.classList.add('wbo-cards');
        div.classList.add('wbo-cards-'.concat(d + 1));
      });
    }
  });
}
