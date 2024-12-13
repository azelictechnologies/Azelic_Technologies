// Select elements for toggling
const servicesLink = document.querySelector("strong");
const servicesList = document.querySelector(".services-list");

const quoteLink = document.querySelectorAll("li strong")[1];
const quoteInfo = document.querySelector(".quote-info");

const supportLink = document.querySelectorAll("li strong")[2];
const supportInfo = document.querySelector(".support-info");

// Toggle functionality for "What services do you offer?"
servicesLink.addEventListener("click", function () {
    servicesList.style.display = servicesList.style.display === "block" ? "none" : "block";
});

// Toggle functionality for "How can I get a quote for a service?"
quoteLink.addEventListener("click", function () {
    quoteInfo.style.display = quoteInfo.style.display === "block" ? "none" : "block";
});

// Toggle functionality for "Do you offer customer support after service delivery?"
supportLink.addEventListener("click", function () {
    supportInfo.style.display = supportInfo.style.display === "block" ? "none" : "block";
});