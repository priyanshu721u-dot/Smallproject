const loginCloseBtn = document.getElementById('closebtn');
if (loginCloseBtn) {
    loginCloseBtn.addEventListener('click', function () {
        // Redirect back to home page
        const confirmed = confirm('Are you sure you want to go back?');
        if (confirmed) {
            window.location.href = '../index.html';
        }
    });
}
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const SuccessMessage = document.getElementById('SMessage');
    
    errorMessage.textContent = '';
    if (username.length < 3) {
        errorMessage.textContent = 'Username must be 3 character';
        return;
    }
    if (password.length < 3) {
        errorMessage.textContent = 'password must be 6 digits';
        return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];  //getting the users name to check
    const user = users.find(user => user.username === username);
    if (!user) {
        errorMessage.textContent = 'User not find';
        return;
    }
    if (user.password !== password) {
        errorMessage.textContent = "Incorrect password";
        return;
    }
    localStorage.setItem("currentUser", username);
    SuccessMessage.textContent = 'Welcome back';
    setTimeout(function() {
        window.location.href = "Dashboard.html";
        console.log("logged in");
    },1000);
});
