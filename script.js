document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Lazy load images
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.loading = "lazy";
    });

    // Fade-in animation for services
    const services = document.querySelectorAll(".service");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    services.forEach(service => observer.observe(service));

    // Replace broken images
    images.forEach(img => {
        img.onerror = function () {
            this.src = "placeholder.jpg"; // Make sure to have a default placeholder image
        };
    });
});
