"use strict";
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const dobInput = document.getElementById('dob');
const gradeInput = document.getElementById('grade');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const dobError = document.getElementById('dobError');
const gradeError = document.getElementById('gradeError');
function validateForm() {
    let isValid = true;
    // Validate name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isValid = false;
    }
    else {
        nameError.style.display = "none";
    }
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Invalid email format.";
        emailError.style.display = "block";
        isValid = false;
    }
    else {
        emailError.style.display = "none";
    }
    // Validate phone
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = "Phone number must be 10 digits.";
        phoneError.style.display = "block";
        isValid = false;
    }
    else {
        phoneError.style.display = "none";
    }
    // Validate date of birth
    if (dobInput.value === "") {
        dobError.textContent = "Date of birth is required.";
        dobError.style.display = "block";
        isValid = false;
    }
    else {
        dobError.style.display = "none";
    }
    // Validate grade
    if (gradeInput.value === "") {
        gradeError.textContent = "Please select a grade.";
        gradeError.style.display = "block";
        isValid = false;
    }
    else {
        gradeError.style.display = "none";
    }
    return isValid;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert("Registration successful!");
    }
});
