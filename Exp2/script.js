document.getElementById("regForm").addEventListener("submit", function(event) {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

    // First Name validation
    let namePattern = /^[A-Za-z]+$/;
    if (fname.length < 6 || !namePattern.test(fname)) {
        document.getElementById("fnameError").innerHTML =
            "First Name must contain only alphabets and be at least 6 characters.";
        valid = false;
    }

    // Last Name validation
    if (lname.trim() === "") {
        document.getElementById("lnameError").innerHTML =
            "Last Name cannot be empty.";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passError").innerHTML =
            "Password must be at least 6 characters.";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML =
            "Enter valid email (name@domain.com).";
        valid = false;
    }

    // Mobile validation
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").innerHTML =
            "Mobile number must be exactly 10 digits.";
        valid = false;
    }

    // Address validation
    if (address.trim() === "") {
        document.getElementById("addressError").innerHTML =
            "Address cannot be empty.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Stop form submission
    } else {
        alert("Registration Successful!");
    }

});
