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

// Regular expressions
const singleWord = /^[a-zA-z]+$/;
const singleWordWithNum = /^[a-zA-Z0-9_]*$/
const multipleWords = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
const multipleWordsAndNum = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/;
const oneNumOneCharMin = /(?=.*\d)(?=.*[a-zA-Z])/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (firstName.value.trim() === '') {
        firstNameError.innerHTML = 'First name cannot be empty';
    } else if (!singleWord.test(firstName.value)) {
        firstNameError.innerHTML = 'Please enter a valid first name';
    } else if (firstName.value.length > 50) {
        firstNameError.innerHTML = 'The first name you entered is too long';
    } else {
        firstNameError.innerHTML = '';
    }

    if (lastName.value.trim() === '') {
        lastNameError.innerHTML = 'Last name cannot be empty';
    } else if (!multipleWords.test(lastName.value)) {
        lastNameError.innerHTML = 'Please enter a valid last name';
    } else if (lastName.value.length > 50) {
        lastNameError.innerHTML = 'The last name you entered is too long';
    } else {
        lastNameError.innerHTML = '';
    }

    if (dateOfBirth.value.trim() === '') {
        dateOfBirthError.innerHTML = 'Date of birth cannot be empty';
    } else {
        dateOfBirthError.innerHTML = '';
    }

    if (email.value.trim() === '') {
        emailError.innerHTML = 'Email cannot be empty';
    } else if (!emailRegex.test(email.value)) {
        emailError.innerHTML = 'Please enter a valid email address';
    } else {
        emailError.innerHTML = '';
    }

    if (username.value.trim() === '') {
        usernameNameError.innerHTML = 'Username cannot be empty';
    } else if (!multipleWordsAndNum.test(username.value)) {
        usernameNameError.innerHTML = 'Please enter a valid username';
    } else if (username.value.length > 20) {
        usernameNameError.innerHTML = 'Username is too long';
    } else {
        usernameNameError.innerHTML = '';
    }

    if (password.value.trim() === '') {
        passwordError.innerHTML = 'Password cannot be empty';
    } else if (!singleWordWithNum.test(password.value)) {
        passwordError.innerHTML = 'Please enter a password with only letters, numbers and no spaces';
    } else if (!oneNumOneCharMin.test(password.value)) {
        passwordError.innerHTML = 'Password must contain one number and one letter';
    } else if (password.value.length < 8) {
        passwordError.innerHTML = 'Password must be more that 8 characters';
    } else {
        passwordError.innerHTML = '';
    }

    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.innerHTML = 'Confirm password cannot be empty';
    } else if (!singleWordWithNum.test(confirmPassword.value)) {
        confirmPasswordError.innerHTML = 'Please enter a password with only letters, numbers and no spaces';
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.innerHTML = 'Confirm password must match password';
    } else {
        confirmPasswordError.innerHTML = '';
    }
});
