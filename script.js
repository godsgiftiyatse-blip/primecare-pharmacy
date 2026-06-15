// ==========================================
// PRIMECARE PHARMACY V3 JAVASCRIPT
// ==========================================

// Smooth Page Load Animation

document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";
    }, 100);

});


// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if(linkPage === currentPage){

        link.style.color = "#198754";
        link.style.fontWeight = "700";

    }

});


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
".card, .stat-card, section h2, .hero-content"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
    "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================================
// COUNTER ANIMATION
// ==========================================

function animateCounter(element, target){

    let count = 0;

    const increment = target / 100;

    const updateCounter = () => {

        if(count < target){

            count += increment;

            element.innerText =
            Math.floor(count);

            requestAnimationFrame(updateCounter);

        }else{

            element.innerText = target;

        }

    };

    updateCounter();

}

const statNumbers =
document.querySelectorAll(".stat-card h2");

const startCounters = () => {

    statNumbers.forEach(counter => {

        const text = counter.innerText;

        const target =
        parseInt(text.replace(/\D/g, ""));

        if(!isNaN(target)){

            animateCounter(counter, target);

        }

    });

};

if(statNumbers.length > 0){

    startCounters();

}


// ==========================================
// CARD HOVER EFFECT
// ==========================================

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


// ==========================================
// BUTTON CLICK EFFECT
// ==========================================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform =
        "scale(0.95)";

        setTimeout(() => {

            button.style.transform =
            "scale(1)";

        },150);

    });

});


// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

const forms =
document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert(
        "Thank you for contacting PrimeCare Pharmacy. We will get back to you shortly."
        );

        form.reset();

    });

});


// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "90px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0D6EFD";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ==========================================
// SIMPLE PRODUCT SEARCH
// ==========================================

const searchInput =
document.querySelector("input[type='text']");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const value =
        searchInput.value.toLowerCase();

        cards.forEach(card => {

            const text =
            card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

}


// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================

const footer =
document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} PrimeCare Pharmacy & Wellness Centre. All Rights Reserved.`;

}


// ==========================================
// END OF FILE
// ==========================================
