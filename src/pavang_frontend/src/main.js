document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = this[0].value;
    const email = this[1].value;
    const message = this[2].value;

    alert(`Thank you, ${name}! Your message has been received.`);
    // Here you can add functionality to send the message to a server or email service.
    
    this.reset(); // Reset form fields
});