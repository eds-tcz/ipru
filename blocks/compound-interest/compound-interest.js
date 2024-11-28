export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('compound-interest-heading');
    }
    if (r === 1) {
      row.classList.add('compound-interest-cards');
      [...row.children].forEach((div, d) => {
        div.classList.add('compound-interest');
        div.classList.add('compound-interest-'.concat(d + 1));
      });
    }
    if (r === 2) {
      row.classList.add('compound-interest-button');
    }
  });
}
