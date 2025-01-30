// Asynchronous function to fetch user data from the API
async function fetchUserData() {
    // URL for fetching user data
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the element where the data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';
        
        // Create a <ul> element to list the user names
        const userList = document.createElement('ul');
        
        // Loop through the users array and create a <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // If there's an error, display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Call fetchUserData when the document has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
