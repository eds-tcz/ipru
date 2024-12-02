/**
 * Changes the src of an img tag inside the specified structure.
 * @param {string} parentClass - The class of the parent div containing the img tag.
 * @param {string} newSrc - The new src URL for the img tag.
 */
// prettier-ignore
function changeImageSourceInStructure(parentClass, newSrc) {
  // Select the parent div with the specified class
  const parentDiv = document.querySelector(`.${parentClass}`);
  if (!parentDiv) {
    // console.error(`No element found with class "${parentClass}"`);
    return;
  }

  // Traverse to find the img tag
  const imgTag = parentDiv.querySelector('p picture img');
  if (imgTag) {
    imgTag.src = newSrc;
  } else {
    // console.error(
    //   `No <img> tag found inside the structure of "${parentClass}"`,
    // );
  }
}

// Example usage
// prettier-ignore
changeImageSourceInStructure(
  'wbo-cards-1',
  'https://example.com/new-image.jpg',
);

changeImageSourceInStructure();
