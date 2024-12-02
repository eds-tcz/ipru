// // Function to restructure the DOM as described
// function restructureAccordion() {
//   // Select the parent container
//   const parentContainer = document.querySelector('.ipru-faq-acc-container');

//   if (parentContainer) {
//     // Select the target wrapper where elements will be moved
//     const targetWrapper = parentContainer.querySelector('.ipru-faq-acc');

//     // Select all elements with the "accordion-wrapper" class
//     const accordionWrappers =
//       parentContainer.querySelectorAll('.accordion-wrapper');

//     if (targetWrapper && accordionWrappers.length > 0) {
//       // Move each accordion-wrapper inside ipru-faq-acc-wrapper
//       accordionWrappers.forEach((wrapper) => {
//         targetWrapper.appendChild(wrapper);
//       });

//       //   console.log('Accordion wrappers have been moved into the target wrapper.');
//     } else {
//       //   console.error('Target wrapper or accordion wrappers not found.');
//     }
//   } else {
//     // console.error('Parent container not found.');
//   }
// }

// // Call the function
// restructureAccordion();
