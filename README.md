# WEBDEV-FINAL-SPRINT
Q3 FINAL SPRINT WEB DEV

I asked ChatGPT to give me a report on my project.

Brief Overview:

HTML File: Serves as the structure of your webpage.

CSS File: Provides the styling for your webpage.

JavaScript File: Manages the data fetching, processing, and dynamic content generation.

JSON File: Contains the data used in your webpage.


Detailed Report:

1. HTML File (index.html):

  Structure: This file sets up the HTML structure for displaying data fetched by the JavaScript.
  Elements: It includes a header, a main content area where the data will be displayed, and a footer.
  Linking: It links to the CSS file for styling and the JavaScript file that will manage the data processing and display.

2. CSS File (styles.css):
   
  Styling: Provides styles for the entire webpage including typography, colors, layout, and element dimensions.
  Classes: Defines classes for different sections like .top-bar, .mid-bar, .bottom-bar, and others for consistent design across the site.
  Responsive Design: While not explicitly responsive through media queries, the fixed widths ensure a consistent look at specific resolutions.

3. JavaScript File (script.js):
   
  Data Fetching: It fetches the JSON data from a local file.
  Data Processing: Processes and logs data, including functions to calculate the average age and count of students.
  DOM Manipulation: Dynamically generates HTML content to display the data in the content-area of the HTML file.

4. JSON File (data.json):
 
  Data Structure: Contains an array of objects, each representing an individual with attributes like name, age, student status, courses, and score.
  Usage: This data is used by the JavaScript file to generate a detailed view for each individual and perform calculations.
  Interaction Flow:
  User loads the webpage: The HTML file is fetched by the browser.
  CSS styling is applied: As the HTML loads, the linked CSS styles the content.
  JavaScript executes: It fetches and processes the JSON data.
  Data Display: Processed data is then dynamically displayed in the HTML through DOM manipulation.
  This setup allows you to easily update the data in the JSON file and see those changes reflected on your webpage without modifying the HTML or JavaScript    code directly. It's a basic yet effective way to manage and display data dynamically on webpages.

Overview

Objective: Create a JSON file, read its contents using JavaScript, and display the data in the browser console and as HTML.
Tools: Visual Studio Code, JavaScript, HTML, JSON.
Output: Demonstrate understanding of JavaScript basics by managing JSON data and displaying it on a web page.
Steps to Complete the Project
Setup HTML and JavaScript Files

Create an HTML file and a linked JavaScript file in Visual Studio Code.
Use the <script> tag in the HTML file to link the JavaScript file.
Test the connection by using console.log() to print a message in the browser's console.
Create a JSON File

Write a JSON file with at least five records, each containing various data types (e.g., strings, numbers, booleans).
Save the JSON file in the same directory as your HTML and JavaScript files.
Read JSON File Using Fetch API

Use the Fetch API in JavaScript to read the JSON file.
Ensure the server is serving the JSON file correctly (this might require using a simple HTTP server).
Iterate Over JSON Data

Use a forEach loop in JavaScript to iterate over the records in the JSON file.
Log one key-value pair from each record to the console to verify that reading is successful.
Create Functions to Process JSON Data

Write three JavaScript functions that return formatted strings describing the contents of the JSON file.
Display these results as HTML elements on the web page.
Display Data in the Browser

Use JavaScript to write the contents of the JSON file to the browser window as HTML.
Also, ensure that the JSON data is written to the console for verification.
Learning Outcomes
Ability to create, read, and display JSON data using JavaScript.
Understanding of linking JavaScript files to HTML pages.
Proficiency in using the Fetch API to retrieve and process JSON data.
Capability to iterate over JSON records and display data using JavaScript functions.
Project Deliverables
GitHub Repository: Upload all project files, including the HTML, JavaScript, and JSON files, to a personal GitHub repository.
Submission: Submit the GitHub repository URL for marking via the assignment portal.
Additional Tips
Ensure all files are correctly linked and paths are properly set.
Test your project in different browsers to ensure compatibility.
Use comments in your code for clarity and documentation.
Use console logs effectively for debugging and testing purposes.
This project will enhance your understanding of JavaScript's interaction with JSON data and demonstrate your ability to implement basic web development skills.
