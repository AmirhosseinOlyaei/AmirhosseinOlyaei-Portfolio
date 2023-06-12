// Create a new date object
const today = new Date();

// Retrieve the current year
const thisYear = today.getFullYear();

// Select the <footer> element from the DOM
const footer = document.querySelector('footer');

// Create a new paragraph element
const copyright = document.createElement('p');

// Set the inner HTML of the copyright element
copyright.innerHTML = `Copyright &copy; Amirhossein Olyaei ${thisYear}`;

// Append the copyright element to the footer
footer.appendChild(copyright);
