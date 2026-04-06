document.addEventListener('DOMContentLoaded', () => {
    // 1. Contact Form Alert
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple success animation/message
            const btn = contactForm.querySelector('button');
            btn.innerText = "Sending...";
            btn.style.opacity = "0.7";

            setTimeout(() => {
                alert("Thank you for reaching out! Barangay Fundacion will get back to you soon.");
                contactForm.reset();
                btn.innerText = "Send Message";
                btn.style.opacity = "1";
            }, 1500);
        });
    }

    // 2. Navigation Active Link Highlighter
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.style.background = "#ffcc00";
            item.style.color = "#003366";
        }
    });

    // Click logo to go home
const mainLogo = document.querySelector('.main-logo');
if (mainLogo) {
    mainLogo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
});

const backToTop = document.createElement('button');
backToTop.innerHTML = "↑";
backToTop.style.cssText = "position:fixed; bottom:20px; right:20px; display:none; border-radius:50%; width:50px; height:50px; cursor:pointer; z-index:1000;";
document.body.appendChild(backToTop);

window.onscroll = function() {
    backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
};

backToTop.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};