// Form
const form = document.querySelector('form');

// Input fields
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const dateOfBirth = document.querySelector('#dateOfBirth');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const signUpBtn = document.querySelector('.submit-btn');

// Error outputs
const firstNameError = document.querySelector('.error-text__first-name');
const lastNameError = document.querySelector('.error-text__last-name');
const dateOfBirthError = document.querySelector('.error-text__dateOfBirth');
const emailError = document.querySelector('.error-text__email');
const usernameNameError = document.querySelector('.error-text__username');
const passwordError = document.querySelector('.error-text__password');
const confirmPasswordError = document.querySelector('.error-text__confirmPassword');

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
});
