const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent = "Message sent successfully!";

    form.reset();
});