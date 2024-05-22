document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = sanitizeInput(document.getElementById("order-email").value.trim());
        const mobileNo = sanitizeInput(document.getElementById("phone").value.trim());

        console.log("Form submitted"); 

        if (email === "" || mobileNo === "") {
            alert("All fields are required!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(mobileNo)) {
            alert("Please enter a valid mobile number.");
            return;
        }

        if (confirm("Do you want to place the order?")) {
            alert("Order placed successfully!");
            orderForm.reset();
        } else {
            alert("Order not placed.");
        }
    });

    function sanitizeInput(input) {
        const element = document.createElement('div');
        element.innerText = input;
        return element.innerHTML;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        // Assuming the phone number should be 10 digits and only numeric
        const re = /^\d{10}$/;
        return re.test(phone);
    }
});
