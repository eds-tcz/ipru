export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('cards-set');
    if (r === 0) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('set-a');
          const table = div.querySelector('table');
          if (table) {
            table.classList.add('insure-table-1');
            [...table.rows].forEach((tr) => {
              tr.classList.add('insure-card-row');
              [...tr.cells].forEach((td) => {
                td.classList.add('insure-card-cell');
                const parag = td.querySelectorAll('p');
                parag.forEach((p) => {
                  if (p.querySelector('strong')) {
                    p.classList.add('insure-pop');
                  }
                });

                if (td.classList.contains('insure-card-cell')) {
                  // Find the <p> tag that contains an <a> tag
                  const targetParagraph = [...td.querySelectorAll('p')].find(
                    (p) => p.querySelector('a')
                  );

                  if (targetParagraph) {
                    // Extract the <a> tag from the <p> tag
                    const linkElement = targetParagraph.querySelector('a');
                    if (linkElement) {
                      // Get the URL from the <a> tag's href attribute
                      const linkUrl = linkElement.getAttribute('href').trim();

                      // Create or find the wrapping <a> tag
                      let wrappingLink = td.querySelector('.insure-card-link');
                      if (!wrappingLink) {
                        wrappingLink = document.createElement('a');
                        wrappingLink.classList.add('insure-card-link');

                        // Move all child elements into the <a> tag
                        while (td.firstChild) {
                          wrappingLink.appendChild(td.firstChild);
                        }
                        td.appendChild(wrappingLink);
                      }

                      // Set the href of the wrapping <a> tag
                      wrappingLink.href = linkUrl;

                      // Remove the <p> tag that contained the <a>
                      targetParagraph.remove();
                    }
                  }
                }
              });
            });
          }
        }
        if (d === 1) {
          div.classList.add('set-b');
          const table = div.querySelector('table');
          if (table) {
            table.classList.add('insure-table-2');
            [...table.rows].forEach((tr) => {
              tr.classList.add('insure-row');
              [...tr.cells].forEach((td) => {
                td.classList.add('insure-cell');
                if (td.classList.contains('insure-cell')) {
                  // Find the <p> tag that contains an <a> tag
                  const targetParagraph = [...td.querySelectorAll('p')].find(
                    (p) => p.querySelector('a')
                  );

                  if (targetParagraph) {
                    // Extract the <a> tag from the <p> tag
                    const linkElement = targetParagraph.querySelector('a');
                    if (linkElement) {
                      // Get the URL from the <a> tag's href attribute
                      const linkUrl = linkElement.getAttribute('href').trim();

                      // Create or find the wrapping <a> tag
                      let wrappingLink = td.querySelector('.insure-link');
                      if (!wrappingLink) {
                        wrappingLink = document.createElement('a');
                        wrappingLink.classList.add('insure-link');

                        // Move all child elements into the <a> tag
                        while (td.firstChild) {
                          wrappingLink.appendChild(td.firstChild);
                        }
                        td.appendChild(wrappingLink);
                      }

                      // Set the href of the wrapping <a> tag
                      wrappingLink.href = linkUrl;

                      // Remove the <p> tag that contained the <a>
                      targetParagraph.remove();
                    }
                  }
                }
              });
            });
          }
        }
      });
    }
  });
}
