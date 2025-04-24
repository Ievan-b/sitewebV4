document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const navLinks = document.querySelector(".navigation ul");

    burger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        burger.classList.toggle("toggle");
    });
});

// Bulles flottantes dans la section #Acceuil
window.addEventListener("DOMContentLoaded", () => {
    const accueilSection = document.getElementById("Acceuil");

    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement("div");
        bubble.className = "floating-bubble";
        const size = Math.random() * 60 + 20;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.bottom = Math.random() * 100 + 'px';
        bubble.style.animationDelay = Math.random() * 3 + 's';
        accueilSection.appendChild(bubble);
    }
});
