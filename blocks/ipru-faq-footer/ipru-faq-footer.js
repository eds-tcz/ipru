export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('faq-footer');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('faq-all-links');
      }
    });
  });
}
