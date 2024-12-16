// Handle Login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow validation
    
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Here you would typically send the login data to your server
    console.log('Logging in with username:', username, 'and password:', password);

    // Simulating a successful login and redirecting to another page
    window.location.href = 'welcome.html'; // Redirect to a new page (you can customize this)
});
