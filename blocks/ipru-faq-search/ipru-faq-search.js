export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('faq-search');
      while (row.firstChild) {
        row.removeChild(row.firstChild);
      }

      // Create the input element
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Have a question? Search here';
      input.className = 'faq-search-input';

      // Create the button element
      const button = document.createElement('button');
      button.type = 'submit';
      button.className = 'faq-search-button';

      // Create the search icon (you can use an inline SVG or an image)
      const icon = document.createElement('img');
      icon.src = '../../images/ipru-faq-search/search-icon.png'; // Replace with your icon path
      icon.alt = 'Search';
      button.appendChild(icon);

      // Append the input and button to faq-search
      row.appendChild(button);
      row.appendChild(input);
    }
    if (r === 1) {
      row.classList.add('faq-buttons');
      [...row.children].forEach((div) => {
        div.classList.add('tags');
        const ptag = div.querySelectorAll('p');
        ptag.forEach((p, i) => {
          p.classList.add('tag');
          if (i === 0) {
            p.classList.add('active');
          }
        });
      });
    }
  });
}
