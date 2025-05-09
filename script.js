document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for contacting us! We’ll get back to you soon.");
});

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const destination = document.getElementById("destination").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const travelDate = document.getElementById("travel-date").value;

    alert(`Thank you for booking, ${name}! Your trip to ${destination} is confirmed for ${travelDate}. We will send confirmation details to ${email}.`);
});
