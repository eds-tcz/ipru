export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('ipru-test-head');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('test-head-data');
      }
      if (d === 1) {
        div.classList.add('test-head-cta');
      }
    });
  });
}
