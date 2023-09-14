// Function to handle form submission for user login
function handleLogin(event) {
  event.preventDefault();

  // Get the entered username and password
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the entered username and password match
  if (username === 'admin' && password === 'password') {
      // Save the logged-in status in local storage
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('username', username);

      // Redirect the user to the main page
      window.location.href = './index.html';
  } else {
      alert('Invalid username or password');
  }
}

// Add form submit event listener
document.getElementById('login-form').addEventListener('submit', handleLogin);
