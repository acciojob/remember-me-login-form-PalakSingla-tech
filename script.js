//your JS code here. If required.

document.body.innerHTML = `
  <h1>Login Form</h1>

  <form id="login-form">
    <input
      type="text"
      id="username"
      placeholder="Username"
      required
    />
    <br /><br />

    <input
      type="password"
      id="password"
      placeholder="Password"
      required
    />
    <br /><br />

    <input type="checkbox" id="checkbox" />
    <label for="checkbox">Remember me.</label>
    <br /><br />

    <input type="submit" id="submit" value="Submit" />
  </form>

  <button id="existing" style="display: none;">
    Login as existing user
  </button>
`;

const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const existingButton = document.getElementById("existing");

// Show existing-user button if credentials are saved
function updateExistingButton() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  existingButton.style.display =
    savedUsername !== null && savedPassword !== null
      ? "inline-block"
      : "none";
}

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (rememberCheckbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  updateExistingButton();
});

// Login using saved credentials
existingButton.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername !== null && savedPassword !== null) {
    alert(`Logged in as ${savedUsername}`);
  } else {
    updateExistingButton();
  }
});

// Initialize on page load
updateExistingButton();
