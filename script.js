document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Form reload hone se rokta hai
    document.getElementById("successMessage").classList.remove("hidden"); // Success message dikhata hai
    this.reset(); // Form clear karta hai
});