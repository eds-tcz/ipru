export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('ipru-header-2');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('ipru-nav-list');
      }
    });
  });
}
