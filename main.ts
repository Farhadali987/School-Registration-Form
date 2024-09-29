const form = document.getElementById('registrationForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const dobInput = document.getElementById('dob') as HTMLInputElement;
const gradeInput = document.getElementById('grade') as HTMLSelectElement;

const nameError = document.getElementById('nameError') as HTMLSpanElement;
const emailError = document.getElementById('emailError') as HTMLSpanElement;
const phoneError = document.getElementById('phoneError') as HTMLSpanElement;
const dobError = document.getElementById('dobError') as HTMLSpanElement;
const gradeError = document.getElementById('gradeError') as HTMLSpanElement;

function validateForm(): boolean {
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Invalid email format.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validate phone
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = "Phone number must be 10 digits.";
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    // Validate date of birth
    if (dobInput.value === "") {
        dobError.textContent = "Date of birth is required.";
        dobError.style.display = "block";
        isValid = false;
    } else {
        dobError.style.display = "none";
    }

    // Validate grade
    if (gradeInput.value === "") {
        gradeError.textContent = "Please select a grade.";
        gradeError.style.display = "block";
        isValid = false;
    } else {
        gradeError.style.display = "none";
    }

    return isValid;
}

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    if (validateForm()) {
        alert("Registration successful!");
    }
});
