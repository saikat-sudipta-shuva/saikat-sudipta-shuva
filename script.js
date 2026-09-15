/* ==================================================
   MOBILE MENU
================================================== */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking navigation */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==================================================
   DARK / LIGHT THEME
================================================== */

const themeBtn = document.getElementById("theme-btn");


function setTheme(theme) {

    const lightMode = theme === "light";

    document.body.classList.toggle(
        "light",
        lightMode
    );

    // Same icon for both Dark & Light mode
    const icon = themeBtn.querySelector("i");

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    localStorage.setItem(
        "theme",
        theme
    );
}


themeBtn.addEventListener("click", () => {

    const currentTheme =
        document.body.classList.contains("light")
            ? "dark"
            : "light";

    setTheme(currentTheme);

});


/* Load saved theme */

if (localStorage.getItem("theme") === "light") {

    setTheme("light");

}

/* ==================================================
   RESUME TABS
================================================== */

const tabButtons =
    document.querySelectorAll(".tab-btn");

const tabContents =
    document.querySelectorAll(".tab-content");


tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.tab;


        /* Remove active from buttons */

        tabButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* Hide all contents */

        tabContents.forEach(content => {

            content.classList.remove("active");

        });


        /* Activate selected tab */

        button.classList.add("active");

        const selectedContent =
            document.getElementById(target);

        if (selectedContent) {

            selectedContent.classList.add("active");

        }

    });

});


/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


window.addEventListener(
    "load",
    updateActiveNavigation
);


/* ==================================================
   TYPING EFFECT
================================================== */

const words = [

    "CSE Graduate",
    "Software Developer",
    "Web Developer",
    "Programmer",
    "Problem Solver"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


const typingElement =
    document.querySelector(".typing");


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}


typeEffect();


/* ==================================================
   PROJECT SLIDER
================================================== */

const projects = [

    {
        number: "01",
        title: "Online Payment System",
        description: "An online payment system using HTML, CSS, and JavaScript, focuses on providing a smooth payment experience with interactive forms, payment method selection, input validation, transaction history, and responsive design for different screen sizes.",
        tech: "HTML, CSS, JS",
        image: "assets/digitalbanking.png",
        alt: "Online payment system",

        live: "https://saikat-sudipta-shuva.github.io/OnlineBanking/",
        github: "https://github.com/saikat-sudipta-shuva/OnlineBanking"
    },

    {
        number: "02",
        title: "Hospital Management System",
        description: "A user-friendly hospital management system that manages patients, doctors, medical records, and billing efficiently through a centralized digital platform.",
        tech: "HTML, CSS, PHP, MySQL",
        image: "assets/hospital.png",
        alt: "Hospital Management System",

        live: "https://example.com",
        github: "https://github.com/"
    },

    {
        number: "03",
        title: "Gachpala Online Nursery",
        description: "An online nursery project developed using HTML, Bootstrap CSS, PHP and JavaScript, with MongoDB used as the database.",
        tech: "HTML, Bootstrap CSS, PHP, JavaScript, MongoDB",
        image: "assets/project3.jpg",
        alt: "Gachpala Online Nursery",

        live: "https://example.com",
        github: "https://github.com/"
    },

    {
        number: "04",
        title: "Wholesale Database Management System",
        description: "A wholesale database management system designed with ERDPlus and implemented using XAMPP and MySQL to manage products, stock, customers, orders, payments, and deliveries.",
        tech: "ERDPlus, XAMPP, MySQL",
        image: "assets/wholesale.png",
        alt: "Wholesale Database Management System",

        live: "https://example.com",
        github: "https://github.com/saikat-sudipta-shuva/Wholesale-Database-Management-System"
    },

    {
        number: "05",
        title: "Pharmacy Shop Management System",
        description: "A pharmacy shop management system developed using ERDPlus, Oracle APEX, and PL/SQL to efficiently manage medicines, inventory, customers, sales, suppliers, and transactions through a structured database.",
        tech: "ERDPlus, Oracle APEX, PL/SQL",
        image: "assets/pharmacy.png",
        alt: "Pharmacy Shop Management System",

        live: "https://example.com",
        github: "https://github.com/saikat-sudipta-shuva/Pharmacy-Shop-Management-System"
    },

    {
        number: "06",
        title: "Automated Bangla Speech to Text",
        description: "A deep learning based Bangla speech-to-text conversion system that transforms spoken Bangla into meaningful written text, aiming to enhance voice recognition and support the advancement of Bangla-focused natural language processing applications.",
        tech: "Deep Learning, NLP",
        image: "assets/bangla.png",
        alt: "Automated Bangla Speech to Text",

        live: "https://example.com",
        github: "https://github.com/"
    }

];


/* ==================================================
   CURRENT PROJECT
================================================== */

let projectIndex = 0;


/* ==================================================
   HTML ELEMENTS
================================================== */

const projectNumber = document.getElementById("project-number");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectTech = document.getElementById("project-tech");
const projectImage = document.getElementById("project-image");

const projectLive = document.getElementById("project-live");
const projectGithub = document.getElementById("project-github");

const projectPrev = document.getElementById("project-prev");
const projectNext = document.getElementById("project-next");


/* ==================================================
   SHOW PROJECT
================================================== */

function showProject(index) {

    projectIndex = (index + projects.length) % projects.length;

    const project = projects[projectIndex];


    /* Project information */

    projectNumber.textContent = project.number;

    projectTitle.textContent = project.title;

    projectDescription.textContent = project.description;

    projectTech.textContent = project.tech;

    projectImage.src = project.image;

    projectImage.alt = project.alt;


    /* ==================================================
       UPDATE LIVE PROJECT LINK
    ================================================== */

    projectLive.href = project.live;


    /* ==================================================
       UPDATE GITHUB LINK
    ================================================== */

    projectGithub.href = project.github;

}


/* ==================================================
   PREVIOUS BUTTON
================================================== */

projectPrev.addEventListener("click", function () {

    showProject(projectIndex - 1);

});


/* ==================================================
   NEXT BUTTON
================================================== */

projectNext.addEventListener("click", function () {

    showProject(projectIndex + 1);

});


/* ==================================================
   LOAD FIRST PROJECT
================================================== */

showProject(0);













/* ==================================================
   ===== EMAILJS CONTACT FORM + AUTO REPLY =====
================================================== */


/* ==================================================
   ===== EMAILJS INITIALIZE =====
================================================== */

emailjs.init({
    publicKey: "suyjrkT1LHt_1Nfz3"
});


/* ==================================================
   ===== ELEMENTS =====
================================================== */

const contactForm =
    document.getElementById("contact-form");

const successPopup =
    document.getElementById("success-popup");

const popupClose =
    document.getElementById("popup-close");


/* ==================================================
   ===== CONTACT FORM SUBMIT =====
================================================== */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            /* ==========================================
               GET SUBMIT BUTTON
            ========================================== */

            const button =
                contactForm.querySelector(".btn");


            const originalText =
                button.textContent;


            /* ==========================================
               DISABLE BUTTON
            ========================================== */

            button.disabled = true;

            button.textContent = "Sending...";


            try {

                /* ==========================================
                   1. SEND MESSAGE TO YOU
                   
                   This template sends the visitor's
                   message to your email.
                ========================================== */

                await emailjs.sendForm(
                    "service_jj618nw",
                    "template_jjmotqg",
                    contactForm
                );


                /* ==========================================
                   2. SEND AUTO REPLY TO VISITOR
                   
                   IMPORTANT:
                   In this EmailJS template,
                   "To Email" must be {{email}}
                ========================================== */

                await emailjs.sendForm(
                    "service_jj618nw",
                    "template_4aptzwj",
                    contactForm
                );


                /* ==========================================
                   SUCCESS
                ========================================== */

                contactForm.reset();

                if (successPopup) {
                    successPopup.classList.add("active");
                }


            } catch (error) {

                /* ==========================================
                   ERROR
                ========================================== */

                console.error(
                    "EmailJS Error:",
                    error
                );


                alert(
                    "Sorry! Your message could not be sent. Please try again."
                );


            } finally {

                /* ==========================================
                   ENABLE BUTTON
                ========================================== */

                button.disabled = false;

                button.textContent =
                    originalText;

            }

        }
    );

}


/* ==================================================
   ===== CLOSE SUCCESS POPUP =====
================================================== */

if (popupClose && successPopup) {

    popupClose.addEventListener(
        "click",
        function () {

            successPopup.classList.remove("active");

        }
    );

}


/* ==================================================
   ===== CLOSE POPUP BY CLICKING OUTSIDE =====
================================================== */

if (successPopup) {

    successPopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target === successPopup
            ) {

                successPopup.classList.remove("active");

            }

        }
    );

}















/* ==================================================
   PROFILE IMAGE AUTO FLIP WHEN HOME IS OPENED
================================================== */

const profileCard = document.querySelector(".profile-card");

function homeFlip() {
    if (!profileCard) return;

    // Start from normal position
    profileCard.classList.remove("flipped");

    // Flip
    setTimeout(() => {
        profileCard.classList.add("flipped");

        // Back to normal after 2 seconds
        setTimeout(() => {
            profileCard.classList.remove("flipped");
        }, 2000);

    }, 50);
}

// Run when page is refreshed
window.addEventListener("load", () => {
    if (location.hash === "#home" || location.hash === "") {
        homeFlip();
    }
});

// Run whenever user goes to Home
window.addEventListener("hashchange", () => {
    if (location.hash === "#home") {
        homeFlip();
    }
});

// Manual click on profile card
profileCard?.addEventListener("click", () => {
    profileCard.classList.toggle("flipped");
});






















 
// ==================================================
// EXPERIENCE CARD IMAGE ON HOVER
// ==================================================

const experienceCards = document.querySelectorAll(".experience-card");

experienceCards.forEach((card) => {

    // Save original content
    const originalContent = card.innerHTML;

    card.addEventListener("mouseenter", function () {

        // Don't change if already showing image
        if (this.classList.contains("show-image")) return;

        const imagePath = this.dataset.image;

        // Create image
        const image = document.createElement("img");
        image.src = imagePath;
        image.alt = "Achievement Certificate";
        image.classList.add("achievement-image");

        // Clear card and show image
        this.innerHTML = "";
        this.appendChild(image);

        this.classList.add("show-image");
    });

    card.addEventListener("mouseleave", function () {

        // Restore original card
        this.innerHTML = originalContent;
        this.classList.remove("show-image");
    });

});