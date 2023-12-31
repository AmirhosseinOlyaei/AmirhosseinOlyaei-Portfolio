To refactor your code for a safe API call using an environment variable on Vercel, you'll need to create a serverless function that handles the GitHub API requests. This function will use the environment variable to authenticate requests to the GitHub API.

### Step 1: Set Up Environment Variable on Vercel

1. **Create a Personal Access Token on GitHub** as described in the previous message.
2. **Add the Token to Vercel's Environment Variables**:
   - Go to your project settings on Vercel.
   - Navigate to the Environment Variables section.
   - Add a new variable (e.g., `GITHUB_TOKEN`) and paste your GitHub personal access token as the value.

### Step 2: Create a Serverless Function on Vercel

In your project, create a directory (e.g., `/api`) and add a new file for your serverless function (e.g., `/api/github.js`). This function will handle fetching repositories.

```javascript
// /api/github.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const response = await fetch(
    "https://api.github.com/users/amirhosseinolyaei/repos",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data);
};
```

### Step 3: Refactor Your Frontend Code

Update your frontend code to call this serverless function instead of directly calling the GitHub API.

```javascript
function fetchRepositories() {
  const cachedRepos = sessionStorage.getItem("repositories");
  if (cachedRepos) {
    return Promise.resolve(JSON.parse(cachedRepos));
  } else {
    return fetch("/api/github") // Call your Vercel serverless function
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("repositories", JSON.stringify(data));
        return data;
      });
  }
}

// ... rest of your code ...
```

### Step 4: Deploy Your Application to Vercel

Deploy your application to Vercel. The serverless function will now use the environment variable to authenticate requests to the GitHub API, and your frontend will call this function to fetch data.

### Security Note

- By using a serverless function, your GitHub token is kept secure and not exposed in the client-side code.
- Ensure that your `.env` file or any file containing sensitive tokens is included in your `.gitignore` to prevent it from being pushed to your repository.

This approach allows you to securely authenticate GitHub API requests, leveraging Vercel's serverless functions and environment variables.

---

### Step 1: Install Vercel CLI

`npm install -g vercel`

### Step 2: Set Up Local Environment Variables

```
# .env file

GITHUB_TOKEN=your_github_personal_access_token
```

> Important: Ensure that your .env file is included in your .gitignore to prevent accidentally pushing your secrets to a public repository.

### Step 3: Log in to Vercel from CLI

`vercel login`

### Step 4: Run Your Project Locally

`vercel dev`

### Step 5: Test Your Application

With vercel dev running, your application is accessible at http://localhost:3000 (or another port if 3000 is in use). You can now test your application as if it's running on Vercel, including making requests to your serverless function.

# Sections 2-6: Personal Portfolio

## Overview

This ten-week project will teach you how to build your own personal portfolio website step-by-step. Be encouraged to really personalize this project using your own creativity and interests.

Each lesson is a an individual assignment, but you will work out of the same repository for the entire project. See instructions below for how to submit each week.

Grading for this project is less rigid, given the open-ended instructions ([View Grading Rubric](instructions/rubric.md)). Make sure to follow the checklist for each lesson, but how you implement each task is entirely up to you!

## Instructions

### **Section 2:** Git Basics

- [Lesson 2.1: Introduction to Git](instructions/section-2/lesson-2-1.md)

### **Section 3:** How the Web Works

- [Lesson 3.1: How the Web Works](instructions/section-3/lesson-3-1.md)

### **Section 4:** Web Basics

- [Lesson 4.1: HTML Basics](instructions/section-4/lesson-4-1.md)
- [Lesson 4.2: JavaScript and the DOM](instructions/section-4/lesson-4-2.md)
- [Lesson 4.3: HTML Forms and DOM Practice](instructions/section-4/lesson-4-3.md)
- [Lesson 4.4: CSS Basics](instructions/section-4/lesson-4-4.md)
- [Lesson 4.5: CSS Layout](instructions/section-4/lesson-4-5.md)

### **Section 5:** How the Internet Works

- [Lesson 5.1: How the Internet Works and Debugging](https://github.com/Code-the-Dream-School/intro-to-programming-section-5/blob/main/README.md)

**NOTE:** Section 5 is a debugging exercise. Clicking the above link takes you to a second Code the Dream School repository where a guessing game is already built... but it's not working as expected! Use the debugging skills you've learned so far in class to find and fix the bugs. Be sure you fork and clone the section 5 repository like you did in week 6. BE SURE YOU ARE **NOT** INSIDE YOUR LOCAL FOLDER FOR YOUR PORTFOLIO WHEN YOU CLONE SECTION 5!

### **Section 6:** AJAX Basics

- [Lesson 6.1: AJAX Basics](instructions/section-6/lesson-6-1.md)
- [Lesson 6.2: Working with the Fetch API](instructions/section-6/lesson-6-2.md)

---

## Issues and Feedback

Be encouraged to ask questions or point out issues in the assignment!

Mentors will be happy to help out and your fellow students will benefit from your input.

[Report an Issue](https://github.com/Code-the-Dream-School/intro-to-programming/issues)

---

Created by [Code the Dream](https://www.codethedream.org)
