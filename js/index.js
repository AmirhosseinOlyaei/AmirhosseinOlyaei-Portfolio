// Insert Copyright Text in Footer via JavaScript
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



// Create List of Skills
// Open your index.js file
// List your technical skills by creating an Array of String values and store it in a variable named skills
const skills = ['JavaScript', 'HTML', 'CSS', 'React'];

// Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
// hint: querySelector or getElementById method
const skillsSection = document.querySelector('#skills');

// Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
const skillsList = skillsSection.querySelector('ul');

// Create a for loop to iterate over your skills Array, starting at index 0
// Inside the loop, create a new list item (li) element and store it in a variable named skill
// hint: createElement method
// On the next line, set the inner text of your skill variable to the value of the current Array element
// hint: access the Array element using bracket notation
// On the next line, append the skill element to the skillsList element
// hint: appendChild method
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// Save and refresh your browser
// You should see your list of skills beneath the "Skills" heading
