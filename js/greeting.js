const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";

const DISPLAY_HIDDEN = "hidden";

function onloginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(DISPLAY_HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username} !`;
  greeting.classList.remove(DISPLAY_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show form
  loginForm.classList.remove(DISPLAY_HIDDEN);
  loginForm.addEventListener("submit", onloginSubmit);
} else {
  //greeting
  greeting.innerText = `Hello ${savedUsername} !`;
  greeting.classList.remove(DISPLAY_HIDDEN);
}
