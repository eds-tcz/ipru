// Function to replace <picture> with <img> at the same hierarchical level
// Function to add <img> tag below <picture> and set up hover functionality
function addImageBelowPicture(className, imgAttributes) {
  // Select the element with the specified class
  const element = document.querySelector(`.${className}`);

  if (element) {
    // Find the <picture> tag inside the selected element
    const pictureTag = element.querySelector('picture');

    if (pictureTag) {
      // Create a new <img> tag
      const imgTag = document.createElement('img');

      // Add attributes to the <img> tag
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(imgAttributes)) {
        imgTag.setAttribute(key, value);
      }

      // Initially hide the <img> tag
      imgTag.style.display = 'none';

      // Insert the <img> tag after the <picture> tag
      pictureTag.insertAdjacentElement('afterend', imgTag);

      // Set up hover functionality
      element.addEventListener('mouseenter', () => {
        pictureTag.style.display = 'none'; // Hide <picture>
        imgTag.style.display = 'block'; // Show <img>
      });

      element.addEventListener('mouseleave', () => {
        pictureTag.style.display = 'block'; // Show <picture>
        imgTag.style.display = 'none'; // Hide <img>
      });
    } else {
      //   console.warn('No <picture> tag found inside the element with the specified class.');
    }
  } else {
    // console.error(`No element found with the class: ${className}`);
  }
}

// Example usage:
// Add <img> tag below <picture> and set up hover functionality
addImageBelowPicture('wbo-cards-1', {
  src: '../../images/ipru-wbo/wbo-1.gif',
  alt: 'Sample Image',
  width: '300',
  height: '200',
});

addImageBelowPicture('wbo-cards-2', {
  src: '../../images/ipru-wbo/wbo-2.gif',
  alt: 'Sample Image',
  width: '300',
  height: '200',
});

addImageBelowPicture('wbo-cards-3', {
  src: '../../images/ipru-wbo/wbo-3.gif',
  alt: 'Sample Image',
  width: '300',
  height: '200',
});

addImageBelowPicture('wbo-cards-4', {
  src: '../../images/ipru-wbo/wbo-4.gif',
  alt: 'Sample Image',
  width: '300',
  height: '200',
});

addImageBelowPicture('wbo-cards-5', {
  src: '../../images/ipru-wbo/wbo-5.gif',
  alt: 'Sample Image',
  width: '300',
  height: '200',
});

addImageBelowPicture('tool-cta', {
  src: '../../images/ipru-wbo/term-insurense.gif',
  alt: 'Sample Image',
  width: '495',
  height: '359',
});
