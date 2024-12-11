function updateRightSideContent(imageSrc, imageAlt, link, text) {
  // Update the image source and alt text
  const imageElement = document.querySelectorAll('img');
  imageElement.src = '../../images/ipru-wbo/term-insurense.gif';
  imageElement.alt = imageAlt;

  // Update the button text and link
  const buttonElement = document.querySelectorAll('.tool-cta a');
  buttonElement.textContent = text;
  // eslint-disable-next-line func-names
  buttonElement.onclick = function () {
    window.location.href = link;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  // Get all the buttons
  const buttons = document.querySelectorAll('.insure-click');

  // Add an event listener to each button
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Pass arguments based on the button clicked (or index, or any logic you want)
      if (index === 0) {
        updateRightSideContent(
          '../../images/ipru-wbo/term-insurense.gif',
          'term-insurance-gif',
          'https://www.iciciprulife.com/term-insurance-plans/iprotect-smart-term-insurance-calculator.html?UID=40759',
          'Calculate Term Insurance Premium',
        );
      } else if (index === 1) {
        // eslint-disable-next-line no-undef
        updateContent('image2.jpg', 'Text 2', 'https://example2.com');
      } else if (index === 2) {
        // eslint-disable-next-line no-undef
        updateContent('image3.jpg', 'Text 3', 'https://example3.com');
      }
    });
  });
});
