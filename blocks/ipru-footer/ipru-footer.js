export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('footer-section');
    if (r === 0) {
      [...row.children].forEach((div, d) => {
        // if (d === 0) {
        div.classList.add('col-'.concat(d + 1));
        div.querySelectorAll('h3').forEach((h3) => {
          h3.classList.add('col-heading');
        });
        div.querySelectorAll('ul').forEach((ul) => {
          ul.classList.add('col-list-lev-1');
        });
        div.querySelectorAll('ol').forEach((ol) => {
          ol.classList.add('col-list-lev-2');
        });
      });
    }
    if (r === 1) {
      [...row.children].forEach((div) => {
        div.classList.add('footer-info');
      });
    }
    if (r === 2) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('footer-warn-text');
        }
        if (d === 1) {
          div.classList.add('footer-warn-button');
        }
      });
    }
  });
}
