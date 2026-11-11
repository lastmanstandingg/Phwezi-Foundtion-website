/* =====================================================
   PHWEZI FOUNDATION WEBSITE JAVASCRIPT
   ===================================================== */


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu when link clicked */

document.querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });


/* =====================================================
   BACK TO TOP
   ===================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   CURRENT YEAR
   ===================================================== */

document.getElementById("year")
    .textContent = new Date().getFullYear();


/* =====================================================
   ADMISSION FORM
   ===================================================== */

const admissionForm =
    document.getElementById("admissionForm");

const formMessage =
    document.getElementById("formMessage");


admissionForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const institution =
        document.getElementById("institution").value;

    const message =
        document.getElementById("message").value.trim();


    if (
        !name ||
        !email ||
        !phone ||
        !institution ||
        !message
    ) {

        formMessage.textContent =
            "Please complete all fields.";

        return;

    }


    formMessage.textContent =
        "Thank you, " +
        name +
        ". Your admission enquiry has been received. " +
        "The admissions office will contact you.";

    admissionForm.reset();

});


/* =====================================================
   CONTACT FORM
   ===================================================== */

const contactForm =
    document.getElementById("contactForm");

const contactMessage =
    document.getElementById("contactMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    contactMessage.textContent =
        "Thank you for contacting Phwezi Foundation. " +
        "Your message has been received.";

    contactForm.reset();

});


/* =====================================================
   REVEAL ANIMATION
   ===================================================== */

const revealElements =
    document.querySelectorAll(
        ".school-card-large, " +
        ".facility, " +
        ".academic-box, " +
        ".news-card, " +
        ".chart-card, " +
        ".branch-card"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
   ===================================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    document.querySelectorAll(".nav-links a")
        .forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

});