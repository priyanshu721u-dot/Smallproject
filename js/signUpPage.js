const SignUpCloseBtn = document.getElementById('closebtn');
if (SignUpCloseBtn) {
    SignUpCloseBtn.addEventListener('click', function () {
        // Redirect back to home page
        const confirmed = confirm('Are you sure you want to go back?');
        if (confirmed) {
            window.location.href = '../index.html';
        }
    });
}
//taking the in the variable
const signupForm = document.getElementById('SignupForm');

if (signupForm) {   //checking if the form existed or not

    // function(e) = the code to run when form is submitted
    signupForm.addEventListener('submit', function (e) {
        // Normally, forms refresh the page when submitted
        // e.preventDefault() stops that from happening
        e.preventDefault();
        //taking the input(username) from the form
        const username = document.getElementById('username').value.trim(); //trim removes the extra spaces
        const password = document.getElementById('password').value; //no trim space can be intentional
        const confirmPassword = document.getElementById('confirmpassword').value;   //same
        const errorMessage = document.getElementById('errorMessage');
        // If user tried to signup before and got an error, this clears it
        errorMessage.textContent = '';
        if (username.length < 3) {
            // Display error message to user
            errorMessage.textContent = 'Username must be at least 3 characters';
            return;
        }
        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters';
            return;
        }
        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match';
            return;
        }
        function saveUser(newUser) {
            // Get existing users
            const users = JSON.parse(localStorage.getItem("users")) || [];
            // Add new user
            users.push(newUser);
            // Save back to localStorage
            localStorage.setItem("users", JSON.stringify(users));
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // ===== CHECK DUPLICATE =====
        const exists = users.some(user => user.username === username);
        if (exists) {
            errorMessage.textContent = 'Username already exists';
            return;
        }
        
        // ========== ALL VALIDATIONS PASSED - NOW CREATE USER ==========

        const userData = {
            username: username,              // The username they chose
            password: password,
            createdAt: new Date().toISOString()  // Current date and time
        };
        // saveUser() is a function from storage.js
        // It adds this user to the array of all users
        saveUser(userData);
        alert('Account created successfully! Please login.');
        window.location.href = 'Dashboard.html';

    });
}