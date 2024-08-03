// Fetch the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log("JSON Data:", data); // Log the entire JSON data to the console

        // Display one key-value pair to test the reading of the JSON file
        data.forEach(record => {
            console.log(`Name: ${record.name}`); // Display the 'name' field for each record
        });

        // Write the JSON data to the HTML
        displayData(data);

        // Call functions to display formatted strings
        document.getElementById('output').innerHTML += `<p>${getNames(data)}</p>`;
        document.getElementById('output').innerHTML += `<p>${getAverageAge(data)}</p>`;
        document.getElementById('output').innerHTML += `<p>${getStudentsCount(data)}</p>`;
    })
    .catch(error => console.error('Error fetching JSON:', error));

// Function to display JSON data as HTML
function displayData(data) {
    const outputElement = document.getElementById('output');
    data.forEach(record => {
        const recordElement = document.createElement('div');
        recordElement.innerHTML = `
            <h3>${record.name}</h3>
            <p>Age: ${record.age}</p>
            <p>Student: ${record.isStudent}</p>
            <p>Courses: ${record.courses.join(', ')}</p>
            <p>Score: ${record.score}</p>
        `;
        outputElement.appendChild(recordElement);
    });
}

// Function to return a string of all names
function getNames(data) {
    const names = data.map(record => record.name);
    return `Names: ${names.join(', ')}`;
}

// Function to return the average age
function getAverageAge(data) {
    const totalAge = data.reduce((sum, record) => sum + record.age, 0);
    const averageAge = totalAge / data.length;
    return `Average Age: ${averageAge.toFixed(1)}`;
}

// Function to return the number of students
function getStudentsCount(data) {
    const studentCount = data.filter(record => record.isStudent).length;
    return `Number of Students: ${studentCount}`;
}
