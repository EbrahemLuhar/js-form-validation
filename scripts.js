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

// submit animations
const loader = document.querySelector('.loader');
const successMessage = document.querySelector('.success-box');

// Regular expressions
const singleWord = /^[a-zA-z]+$/;
const singleWordWithNum = /^[a-zA-Z0-9_]*$/
const multipleWords = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
const multipleWordsAndNum = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/;
const oneNumOneCharMin = /(?=.*\d)(?=.*[a-zA-Z])/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (
        validateFirstName() &&
        validateLastName() &&
        validateDateOfBirth() &&
        validateEmail() &&
        validateUsername() &&
        validatePassword() &&
        validateConfirmPassword()
        ) {
            formSuccessAnimation();
    }
});

firstName.addEventListener('focusout', validateFirstName);
lastName.addEventListener('focusout', validateLastName);
dateOfBirth.addEventListener('focusout', validateDateOfBirth);
email.addEventListener('focusout', validateEmail);
username.addEventListener('focusout', validateUsername);
password.addEventListener('focusout', validatePassword);
confirmPassword.addEventListener('focusout', validateConfirmPassword);
 
function validateFirstName() {
    if (firstName.value.trim() === '') {
        firstNameError.innerHTML = 'First name cannot be empty';
        return false;
    } else if (!singleWord.test(firstName.value)) {
        firstNameError.innerHTML = 'Please enter a valid first name';
        return false;
    } else if (firstName.value.length > 50) {
        firstNameError.innerHTML = 'The first name you entered is too long';
        return false;
    } else {
        firstNameError.innerHTML = '';
        return true;
    }
}

function validateLastName() {
    if (lastName.value.trim() === '') {
        lastNameError.innerHTML = 'Last name cannot be empty';
        return false;
    } else if (!multipleWords.test(lastName.value)) {
        lastNameError.innerHTML = 'Please enter a valid last name';
        return false;
    } else if (lastName.value.length > 50) {
        lastNameError.innerHTML = 'The last name you entered is too long';
        return false;
    } else {
        lastNameError.innerHTML = '';
        return true;
    }
}

function validateDateOfBirth() {
    if (dateOfBirth.value.trim() === '') {
        dateOfBirthError.innerHTML = 'Date of birth cannot be empty';
        return false;
    } else {
        dateOfBirthError.innerHTML = '';
        return true;
    }
}

function validateEmail() {
    if (email.value.trim() === '') {
        emailError.innerHTML = 'Email cannot be empty';
        return false;
    } else if (!emailRegex.test(email.value)) {
        emailError.innerHTML = 'Please enter a valid email address';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }
}

function validateUsername() {
    if (username.value.trim() === '') {
        usernameNameError.innerHTML = 'Username cannot be empty';
        return false;
    } else if (!multipleWordsAndNum.test(username.value)) {
        usernameNameError.innerHTML = 'Please enter a valid username';
        return false;
    } else if (username.value.length > 20) {
        usernameNameError.innerHTML = 'Username is too long';
        return false;
    } else {
        usernameNameError.innerHTML = '';
        return true;
    }
}

function validatePassword() {
    if (password.value.trim() === '') {
        passwordError.innerHTML = 'Password cannot be empty';
        return false;
    } else if (!singleWordWithNum.test(password.value)) {
        passwordError.innerHTML = 'Please enter a password with only letters, numbers and no spaces';
        return false;
    } else if (!oneNumOneCharMin.test(password.value)) {
        passwordError.innerHTML = 'Password must contain one number and one letter';
        return false;
    } else if (password.value.length < 8) {
        passwordError.innerHTML = 'Password must be more that 8 characters';
        return false;
    } else {
        passwordError.innerHTML = '';
        return true;
    }
}

function validateConfirmPassword() {
    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.innerHTML = 'Confirm password cannot be empty';
        return false;
    } else if (!singleWordWithNum.test(confirmPassword.value)) {
        confirmPasswordError.innerHTML = 'Please enter a password with only letters, numbers and no spaces';
        return false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.innerHTML = 'Confirm password must match password';
        return false;
    } else {
        confirmPasswordError.innerHTML = '';
        return true;
    }
}

function formSuccessAnimation() {
    loader.style.display = 'block';
    setTimeout(function() {
        loader.style.display = 'none';
        successMessage.style.display = 'flex';
    }, 2500);
}