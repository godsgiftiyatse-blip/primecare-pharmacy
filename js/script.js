// ======================================
// PRIMECARE PHARMACY V8 SCRIPT
// ======================================

// MOBILE MENU

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }

});

// ======================================
// ANIMATED COUNTERS
// ======================================

function animateCounter(id, target) {

    const counter = document.getElementById(id);

    if (!counter) return;

    let current = 0;

    const increment = target / 100;

    function updateCounter() {

        if (current < target) {

            current += increment;

            counter.innerText = Math.floor(current);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

}

animateCounter("customers-count", 5000);
animateCounter("products-count", 1200);
animateCounter("experience-count", 15);
animateCounter("pharmacists-count", 12);

// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const revealElements = document.querySelectorAll(
    ".card, .stat-card, .testimonial-card"
);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (elementTop < screenHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ======================================
// STICKY HEADER EFFECT
// ======================================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow =
            "0 2px 10px rgba(0,0,0,.08)";

    }

});

// ======================================
// SMOOTH ACTIVE LINK HIGHLIGHT
// ======================================

const currentPage =
    window.location.pathname.split("/").pop();

const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.style.color = "#16a34a";
        link.style.fontWeight = "700";

    }

});

// ======================================
// FOOTER YEAR
// ======================================

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} PrimeCare Pharmacy. All Rights Reserved.`;

}
