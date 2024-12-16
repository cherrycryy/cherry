// Create Account form submission handler
document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    
    // Here you would typically add logic to create an account (e.g., API request)
    console.log('Account Created');

    // Redirect to the dashboard
    window.location.href = "dashboard.html";  // Redirect to dashboard after account creation
});

// Login form submission handler
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    
    // Here you would typically add logic to log the user in (e.g., API request)
    console.log('User Logged In');
    
    // Redirect to the dashboard
    window.location.href = "dashboard.html";  // Redirect to dashboard after login
});
