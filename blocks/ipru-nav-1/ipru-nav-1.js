export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('ipru-header');
    [...row.children].forEach((div, d) => {
      if (d === 0){
        div.classList.add('ipru-nav-logo');
      }
      if (d === 1){
        div.classList.add('ipru-search-bar');
        const pTag = div.querySelector('p');
        if (pTag) {
        pTag.remove();
        }
        // Create and append the search bar dynamically
        const searchBarContainer = document.createElement('div');
        searchBarContainer.classList.add('search-bar-container');
        const searchBar = document.createElement('div');
        searchBar.classList.add('search-bar');
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'Search';
        const searchIcon = document.createElement('span');
        searchIcon.classList.add('search-icon');
        const searchImage = document.createElement('img');
        searchImage.src = '../../images/ipru-nav-img/search-maroon.png'; // Set your search icon URL
        searchImage.alt = 'Search Icon';
        searchIcon.appendChild(searchImage);
        // Append input and icon to search bar
        searchBar.appendChild(inputField);
        searchBar.appendChild(searchIcon);
        // Append search bar to the container
        searchBarContainer.appendChild(searchBar);
        // Append the search bar container to the main div
        div.appendChild(searchBarContainer);
      }
      if (d === 2){
          div.classList.add('ipru-nav-items');
      }
      if (d === 3){
          div.classList.add('ipru-track-app');
      }
      if (d === 4){
          div.classList.add('ipru-noti-icon');
      }
      if (d === 5){
          div.classList.add('ipru-nav-login');
      }
    });
  });
}
