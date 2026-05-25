// Contact Form
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
if (!name || !email) {
    feedback.textContent = "Please provide a name & email";
    feedback.classList.add("error");
    return;
}
feedback.textContent = "Thank you for reaching out!";
feedback.classList.remove("error");
form.reset();
})
