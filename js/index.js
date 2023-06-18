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
// You should see your list of skills beneath the "Skills" heading


// Handle Message Form Submit
// Using "DOM Selection", select the "leave_message" form by name attribute and store it in a variable named messageForm
const messageForm = document.querySelector('form[name="leave_message"]');

// Add an event listener to the messageForm element that handles the "submit" event
messageForm.addEventListener('submit', function(event) {
    // Inside the callback function for your event listener, prevent the default refreshing behavior of the "submit" event
    event.preventDefault();

    // Inside the callback function for your event listener, create a new variable for each of the three form fields and retrieve the value from the event
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Inside the callback function for your event listener, log the three variables
    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);

    // Inside the callback function for your event listener, clear the form fields
    messageForm.reset();
});



// Display Messages in List
// Open index.js and start inside the event listener callback function on the line above where you reset the form
// Using "DOM Selection", select the #messages section by id and store it in a variable named messageSection
// Using "DOM Selection", query the messageSection (instead of the entire document) to find the <ul> element and store it in a variable named messageList
// Create a new list item (li) element and store it in a variable named newMessage
// On the next line, set the inner HTML of your newMessage element with the following information:
//     <a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix)
//         <span> element that displays the "message"
//  Create a new <button> element and store it in a variable named removeButton
// Set the inner text to "remove"
// Set the type attribute to "button"
// Add an event listener to the removeButton element that handles the "click" event
// Inside the callback function, find the button's parent element using DOM Traversal (hint: parentNode property) and store it in a variable named entry
// Remove the entry element from the DOM (hint: remove method)
//  Append the removeButton to the newMessage element
// hint: appendChild method
//  Append the newMessage to the messageList element
//  Save and refresh your browser