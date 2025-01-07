// Initialize EmailJS with the public key
emailjs.init('sdN9P7xbhqbPdS-Km'); 

// Handle Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const serviceID = 'service_bems0h7'; 
    const templateID = 'template_xk691z4'; 

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams)
        .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('responseMessage').style.display = 'block';
            document.getElementById('responseMessage').textContent = 'Your message has been sent successfully!';
        })
        .catch(error => {
            console.error('FAILED...', error);
            document.getElementById('responseMessage').style.display = 'block';
            document.getElementById('responseMessage').textContent = 'Failed to send your message. Please try again.';
        });

    // Reset the form after submission
    event.target.reset();
});

// Function to create falling hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️"; 

    // Randomize heart position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    // Add heart to the container
    document.getElementById("heartShower").appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 4000); // Match the duration of the fall animation
}

// Generate hearts at intervals
setInterval(createHeart, 200);
