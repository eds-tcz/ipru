export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('ipru-prom-cards');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('prom-card-title');
      }
      if (d !== 0) {
        div.classList.add('prom-card-data', 'prom-data-'.concat(d));
      }
    });
  });
}
