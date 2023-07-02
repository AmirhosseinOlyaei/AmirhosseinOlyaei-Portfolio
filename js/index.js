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
// List your technical skills by creating an Array of String values and store it in a variable named skills
const skills = [
    'Prototyping: Figma',
    'Project management: Agile-Scrum in ZenHub',
    'Web Development: HTML, CSS, TailwindCSS, DaisyUI, JavaScript, React.js, API',
    'Version control: Git, GitHub',
    'IDEs: WebStorm, VSCode, CodeSandbox, JSitor, Replit',
    'Database: Navicat, Supabase, PostgreSQL',
    'Knowledge base / Note taking: Markdown in Logseq, .md, and presentations',
    'Production / Deployment: Vercel',
    'Introduction to Node.js, Docker, and AWS',
    'Collaboration: Slack, Zoom, Around'
];

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
messageForm.addEventListener('submit', function (event) {
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

    // Display Messages in List
    // Inside the callback function for your event listener, select the #messages section by id and store it in a variable named messageSection
    const messageSection = document.querySelector('#usersMessage');

    // Inside the callback function for your event listener, query the messageSection to find the <ul> element and store it in a variable named messageList
    const messageList = messageSection.querySelector('ul');

    // Create a new list item (li) element and store it in a variable named newMessage
    const newMessage = document.createElement('li');

    // Create a new <div> element to contain the message content and buttons
    const messageContent = document.createElement('div');

    // Set the inner HTML of your newMessage element with the information from the form fields
    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>wrote: ${usersMessage}</span>
    <button class="remove-button">remove</button>
    <button class="edit-button">edit</button>
  `;

// Append the messageContent to the newMessage element
    messageContent.appendChild(newMessage)

// Append the newMessage to the messageList element
    messageList.appendChild(messageContent);

// Inside the callback function for your event listener, clear the form fields
    messageForm.reset();

// Show the messageSection since the list is not empty
    messageSection.style.display = 'block';

// Add an event listener for the "edit" button
    const editButton = newMessage.querySelector('.edit-button')
    editButton.addEventListener('click', function () {
        // Create an input field for the user to edit the message
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = usersMessage;

        // Replace the message text with the input field
        const messageSpan = newMessage.querySelector('span');
        messageSpan.replaceWith(inputField);

        // Create a "save" button
        const saveButton = document.createElement('button');
        saveButton.innerText = 'save';

        // Add an event listener for the "save" button
        saveButton.addEventListener('click', function () {

            // Get the new message from the input field
            const newMessage = inputField.value;

            // Replace the input field with the updated message text
            inputField.replaceWith(messageSpan);

            // Update the message text with the new input value
            messageSpan.innerText = newMessage;
            // Remove the save button after saving
            saveButton.remove();
        });

// Add the save button after the input field
        newMessage.appendChild(saveButton);

// Remove the edit button
        editButton.remove();
    });

// Add an event listener for the "remove" button
    const removeButton = newMessage.querySelector('.remove-button');
    removeButton.addEventListener('click', function () {
// Find the message entry using DOM Traversal
        const entry = removeButton.closest('li');

        // Remove the entry element from the DOM
        entry.remove();

// Check if the messageList is empty
        if (messageList.childElementCount === 0) {
            // If the list is empty, hide the messageSection
            messageSection.style.display = 'none';
        }

    });

});