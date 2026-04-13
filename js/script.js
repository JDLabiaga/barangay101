document.addEventListener('DOMContentLoaded', () => {
    const brgyForm = document.getElementById('brgyForm');
    const submitBtn = document.getElementById('submitBtn');

    if (brgyForm) {
        brgyForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Capture Form Data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // 2. Simple Validation Check
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all required fields.");
                return;
            }

            // 3. Visual Feedback (Checking Purpose)
            submitBtn.innerHTML = "Sending... ⏳";
            submitBtn.style.opacity = "0.7";
            submitBtn.disabled = true;

            // Simulate a network delay (1.5 seconds)
            setTimeout(() => {
                console.log("Form Submitted Successfully:", { name, email, message });
                
                alert(`Salamat, ${name}! Your message has been sent to the Barangay Council.`);
                
                // Reset the button and form
                submitBtn.innerHTML = "Send Message 🚀";
                submitBtn.style.opacity = "1";
                submitBtn.disabled = false;
                brgyForm.reset();
            }, 1500);
        });
    }
});