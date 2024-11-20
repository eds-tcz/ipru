export default function decorate(block) {
  const parent = block.closest('.ipru-hero'); // Find the parent with the ipru-hero class

  // Create the 'prev' button
  const prevButton = document.createElement('button');
  prevButton.classList.add('prev');
  prevButton.textContent = '❮'; // Add left arrow

  // Create the 'next' button
  const nextButton = document.createElement('button');
  nextButton.classList.add('next');
  nextButton.textContent = '❯'; // Add right arrow

  // Create the 'indicator' div
  const indicatorDiv = document.createElement('div');
  indicatorDiv.classList.add('indicators');

  // Add 6 spans inside the 'indicator' div
  for (let i = 1; i <= 6; i += 1) {
    const span = document.createElement('span');
    span.dataset.slide = i; // Add data attribute for slide number
    span.classList.add('indicator');
    if (i === 1) {
      span.classList.add('active'); // Mark the first slide as active initially
    }
    indicatorDiv.appendChild(span);
  }

  // Add 'prev' button before the ipru-hero
  parent.parentNode.insertBefore(prevButton, parent);

  // Add 'next' button after the ipru-hero
  parent.parentNode.insertBefore(nextButton, parent.nextSibling);

  // Add 'indicator' div after the next button
  parent.parentNode.insertBefore(indicatorDiv, nextButton.nextSibling);

  // Process slides as before
  [...block.children].forEach((row, r) => {
    row.classList.add('ipru-hero-slide');
    row.classList.add('hero-slide-'.concat(r + 1));
    if (r === 0) {
      row.classList.add('active');
    }
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('slide-body');
        const img = div.querySelector('img');
        if (img) {
          div.style.backgroundImage = `url(${img.src})`;
          img.remove();
        }
        const pTag = div.querySelector(':scope > p:first-child');
        if (pTag) {
          pTag.remove();
        }
      }
      const phead = div.querySelector('p');
      if (phead) {
        phead.classList.add('hero-cta');
      }

      const table = div.querySelector('table');
      if (table) {
        [...table.rows].forEach((tr, i) => {
          tr.classList.add('tab-row-'.concat(i + 1));
        });
      }
    });
  });
}
