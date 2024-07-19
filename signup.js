document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add code to handle sign up, such as sending the data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // For demonstration, just alert the user
    alert('Sign up successful!');
});
