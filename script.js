// // document.addEventListener("DOMContentLoaded", function () {
// //     const form = document.getElementById("pizzaForm");
// //     const nameInput = document.getElementById("name");
// //     const phoneInput = document.getElementById("phone");
// //     const quantityInput = document.getElementById("quantity");
// //     const addressInput = document.getElementById("address");
// //     const timeInput = document.getElementById("time");
// //     const paymentSelect = document.getElementById("payment");
// //     const submitButton = document.getElementById("submit");

// //     // Validate Name
// //     nameInput.addEventListener("input", function () {
// //         if (nameInput.value.length >= 5) {
// //             nameInput.classList.remove("invalid");
// //         } else {
// //             nameInput.classList.add("invalid");
// //         }
// //         checkFormValidity();
// //     });

// //     // Validate Phone
// //     phoneInput.addEventListener("input", function () {
// //         const phonePattern = /^[0-9]{10}$/;
// //         if (phonePattern.test(phoneInput.value)) {
// //             phoneInput.classList.remove("invalid");
// //         } else {
// //             phoneInput.classList.add("invalid");
// //         }
// //         checkFormValidity();
// //     });

// //     // Validate Address (auto-expand)
// //     addressInput.addEventListener("input", function () {
// //         addressInput.style.height = "auto";
// //         addressInput.style.height = (addressInput.scrollHeight) + "px";

// //         if (addressInput.value.length >= 20 && addressInput.value.length <= 200) {
// //             addressInput.classList.remove("invalid");
// //         } else {
// //             addressInput.classList.add("invalid");
// //         }
// //         checkFormValidity();
// //     });

// //     // Validate Delivery Time
// //     timeInput.addEventListener("input", function () {
// //         const selectedTime = timeInput.value;
// //         const [hours, minutes] = selectedTime.split(":").map(Number);
// //         if (hours >= 10 && hours <= 22) {
// //             timeInput.classList.remove("invalid");
// //         } else {
// //             timeInput.classList.add("invalid");
// //         }
// //         checkFormValidity();
// //     });

// //     // Check if at least one topping is selected
// //     function validateToppings() {
// //         const toppings = document.querySelectorAll("input[name='toppings']:checked");
// //         return toppings.length > 0;
// //     }

// //     // Validate form before submission
// //     function checkFormValidity() {
// //         const isValid =
// //             nameInput.value.length >= 5 &&
// //             /^[0-9]{10}$/.test(phoneInput.value) &&
// //             document.querySelector("input[name='size']:checked") &&
// //             validateToppings() &&
// //             quantityInput.value >= 1 && quantityInput.value <= 10 &&
// //             addressInput.value.length >= 20 && addressInput.value.length <= 200 &&
// //             timeInput.value &&
// //             timeInput.value.split(":")[0] >= 10 &&
// //             timeInput.value.split(":")[0] <= 22 &&
// //             paymentSelect.value !== "";

// //         submitButton.disabled = !isValid;
// //     }

// //     // Event listeners for toppings and pizza size selection
// //     document.querySelectorAll("input[name='size']").forEach(input => {
// //         input.addEventListener("change", checkFormValidity);
// //     });

// //     document.querySelectorAll("input[name='toppings']").forEach(input => {
// //         input.addEventListener("change", checkFormValidity);
// //     });

// //     // Show Popup on Successful Submission
// //     form.addEventListener("submit", function (event) {
// //         event.preventDefault();
        
// //         const selectedSize = document.querySelector("input[name='size']:checked").value;
// //         const selectedToppings = [...document.querySelectorAll("input[name='toppings']:checked")]
// //             .map(t => t.value).join(", ");
// //         const orderDetails = `
// //             <strong>Thank you, ${nameInput.value}!</strong><br>
// //             Your ${selectedSize} pizza with ${selectedToppings} will be delivered at ${timeInput.value}.
// //         `;
// //         document.getElementById("orderDetails").innerHTML = orderDetails;
// //         document.getElementById("popup").style.display = "flex";
// //     });

// //     // Close Popup
// //     window.closePopup = function () {
// //         document.getElementById("popup").style.display = "none";
// //         form.reset();
// //         submitButton.disabled = true;
// //     };

// //     // Reset form
// //     form.addEventListener("reset", function () {
// //         setTimeout(() => {
// //             submitButton.disabled = true;
// //         }, 10);
// //     });
// // });

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("pizzaForm");
//     const submitButton = document.getElementById("submit");
//     const outputDiv = document.createElement("div");
//     outputDiv.id = "output";
//     document.body.appendChild(outputDiv);

//     function validateForm() {
//         let valid = true;

//         // Name validation (only letters, 10 characters)
//         const name = document.getElementById("name");
//         if (!/^[a-zA-Z]{6,}$/.test(name.value)) {
//             valid = false;
//             name.style.border = "2px solid red";
//         } else {
//             name.style.border = "";
//         }

//         // Email validation
//         const email = document.getElementById("email");
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
//             valid = false;
//             email.style.border = "2px solid red";
//         } else {
//             email.style.border = "";
//         }

//         // Password validation
//         const password = document.getElementById("password");
//         if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password.value)) {
//             valid = false;
//             password.style.border = "2px solid red";
//         } else {
//             password.style.border = "";
//         }

//         // Gender validation
//         const gender = document.querySelector("input[name='gender']:checked");
//         if (!gender) {
//             valid = false;
//         }

//         // Phone validation (exactly 10 digits)
//         const phone = document.getElementById("phone");
//         if (!/^\d{10}$/.test(phone.value)) {
//             valid = false;
//             phone.style.border = "2px solid red";
//         } else {
//             phone.style.border = "";
//         }

//         // Country validation
//         const country = document.getElementById("country");
//         if (country.value === "") {
//             valid = false;
//         }

//         // Address validation (auto-resizing)
//         const address = document.getElementById("address");
//         if (address.value.length < 10) {
//             valid = false;
//             address.style.border = "2px solid red";
//         } else {
//             address.style.border = "";
//         }

//         // Age validation
//         const age = document.getElementById("age");
//         if (age.value < 1 || age.value > 100) {
//             valid = false;
//             age.style.border = "2px solid red";
//         } else {
//             age.style.border = "";
//         }

//         // Time validation (between 10 AM and 10 PM)
//         const time = document.getElementById("time");
//         const selectedTime = time.value;
//         if (!selectedTime || selectedTime < "10:00" || selectedTime > "22:00") {
//             valid = false;
//             time.style.border = "2px solid red";
//         } else {
//             time.style.border = "";
//         }

//         // Date validation
//         const date = document.getElementById("date");
//         if (!date.value) {
//             valid = false;
//         }

//         submitButton.disabled = !valid;
//     }

//     // Add event listeners to all inputs for real-time validation
//     form.querySelectorAll("input, select, textarea").forEach(input => {
//         input.addEventListener("input", validateForm);
//     });

//     // Form submission
//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         if (submitButton.disabled) return;

//         const formData = new FormData(form);
//         let outputHTML = "<h2>Submitted Details:</h2><ul>";

//         formData.forEach((value, key) => {
//             outputHTML += `<li><strong>${key}:</strong> ${value}</li>`;
//         });

//         outputHTML += "</ul>";
//         outputDiv.innerHTML = outputHTML;
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pizzaForm");
    const submitButton = document.getElementById("submit");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const genderInputs = document.querySelectorAll("input[name='gender']");
    const phoneInput = document.getElementById("phone");
    const countrySelect = document.getElementById("country");
    const addressInput = document.getElementById("address");
    const ageInput = document.getElementById("age");
    const timeInput = document.getElementById("time");
    const dateInput = document.getElementById("date");
    const outputDiv = document.getElementById("output");

    function validateForm() {
        const nameValid = /^[A-Za-z]{10}$/.test(nameInput.value);
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
        const passwordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(passwordInput.value);
        const genderValid = [...genderInputs].some(input => input.checked);
        const phoneValid = /^\d{10}$/.test(phoneInput.value);
        const countryValid = countrySelect.value !== "";
        const addressValid = addressInput.value.trim() !== "";
        const ageValid = ageInput.value.trim() !== "";
        const timeValid = timeInput.value.trim() !== "";
        const dateValid = dateInput.value.trim() !== "";

        const allValid = nameValid && emailValid && passwordValid && genderValid && phoneValid && countryValid && addressValid && ageValid && timeValid && dateValid;
        submitButton.disabled = !allValid;
    }

    function displayFormData(event) {
        event.preventDefault();

        const selectedGender = [...genderInputs].find(input => input.checked)?.value || "Not Selected";

        outputDiv.innerHTML = `
            <h3>Submitted Details:</h3>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Password:</strong> (Hidden for security)</p>
            <p><strong>Gender:</strong> ${selectedGender}</p>
            <p><strong>Phone:</strong> ${phoneInput.value}</p>
            <p><strong>Country:</strong> ${countrySelect.value}</p>
            <p><strong>Address:</strong> ${addressInput.value}</p>
            <p><strong>Age:</strong> ${ageInput.value}</p>
            <p><strong>Time:</strong> ${timeInput.value}</p>
            <p><strong>Date:</strong> ${dateInput.value}</p>
        `;
    }

    form.addEventListener("input", validateForm);
    form.addEventListener("submit", displayFormData);
    validateForm();
});

