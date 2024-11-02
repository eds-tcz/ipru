export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('ipru-header-notif');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('ipru-nav-notif-text');
      }
    });
  });
}
