/* ==================================================
   ===== MOBILE MENU =====
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


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==================================================
   ===== DARK / LIGHT THEME =====
================================================== */

const themeBtn = document.getElementById("theme-btn");


function setTheme(theme) {

    const lightMode = theme === "light";

    document.body.classList.toggle(
        "light",
        lightMode
    );

    const icon = themeBtn.querySelector("i");

    /* Keep moon icon */
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

}


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    setTheme("light");

} else {

    setTheme("dark");

}


themeBtn.addEventListener("click", () => {

    const isLight =
        document.body.classList.contains("light");

    const newTheme =
        isLight ? "dark" : "light";

    setTheme(newTheme);

    localStorage.setItem(
        "theme",
        newTheme
    );

});


/* ==================================================
   ===== RESUME TABS =====
================================================== */

const tabButtons =
    document.querySelectorAll(".tab-btn");

const tabContents =
    document.querySelectorAll(".tab-content");


tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.tab;

        tabButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        tabContents.forEach(content => {

            content.classList.remove("active");

        });

        button.classList.add("active");

        const targetContent =
            document.getElementById(target);

        if (targetContent) {

            targetContent.classList.add("active");

        }

    });

});


/* ==================================================
   ===== ACTIVE NAVIGATION =====
================================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* ==================================================
   ===== TYPING EFFECT =====
================================================== */

const typingText =
    document.querySelector(".typing-text");


const typingWords = [

    "CSE Graduate",
    "Software Developer",
    "Web Developer",
    "Programmer",
    "Problem Solver"

];


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect() {

    if (!typingText) return;


    const currentWord =
        typingWords[wordIndex];


    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;
        }


    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            isDeleting = false;

            wordIndex =
                (wordIndex + 1) %
                typingWords.length;

        }

    }


    setTimeout(
        typeEffect,
        isDeleting ? 60 : 100
    );

}


typeEffect();


/* ==================================================
   ===== PROJECT SLIDER =====
================================================== */

const projects = [

    {
        number: "01",
        title: "Online Payment System",
        description:
            "A modern online payment system with interactive forms, payment method selection, input validation, transaction history, and responsive design.",
        tech: "HTML, CSS, JS",
        image: "assets/digitalbanking.png",
        live:
            "https://saikat-sudipta-shuva.github.io/OnlineBanking/",
        github:
            "https://github.com/saikat-sudipta-shuva/OnlineBanking"
    },


    {
        number: "02",
        title: "Hospital Management System",
        description:
            "A complete hospital management system that manages patients, doctors, medical records, and billing through a centralized digital platform.",
        tech: "HTML, CSS, PHP, MySQL",
        image: "assets/hospital.png",
        live: "#",
        github: "#"
    },


    {
        number: "03",
        title: "Gachpala Online Nursery",
        description:
            "An online nursery platform for browsing and managing plants with an easy-to-use interface and dynamic backend functionality.",
        tech:
            "HTML, Bootstrap CSS, PHP, JavaScript, MongoDB",
        image: "assets/project3.jpg",
        live: "#",
        github: "#"
    },


    {
        number: "04",
        title:
            "Wholesale Database Management System",
        description:
            "A database management system designed to organize wholesale business information, products, customers, and transactions.",
        tech: "ERDPlus, MySQL, XAMPP",
        image: "assets/wholesale.png",
        live: "#",
        github:
            "https://github.com/saikat-sudipta-shuva/Wholesale-Database-Management-System"
    },


    {
        number: "05",
        title:
            "Pharmacy Shop Management System",
        description:
            "A pharmacy management system for managing medicines, customers, sales, and inventory using database technologies.",
        tech:
            "ERDPlus, Oracle APEX, PL/SQL",
        image: "assets/pharmacy.png",
        live: "#",
        github:
            "https://github.com/saikat-sudipta-shuva/Pharmacy-Shop-Management-System"
    },


    {
        number: "06",
        title:
            "Automated Bangla Speech to Text",
        description:
            "A deep learning and NLP based system that converts Bangla speech into text automatically.",
        tech:
            "Deep Learning, NLP",
        image: "assets/bangla.png",
        live: "#",
        github: "#"
    }

];


let currentProject = 0;


const projectNumber =
    document.getElementById("project-number");

const projectTitle =
    document.getElementById("project-title");

const projectDescription =
    document.getElementById("project-description");

const projectTech =
    document.getElementById("project-tech");

const projectImage =
    document.getElementById("project-image");

const projectLive =
    document.getElementById("project-live");

const projectGithub =
    document.getElementById("project-github");

const projectPrev =
    document.getElementById("project-prev");

const projectNext =
    document.getElementById("project-next");


function showProject(index) {

    const project =
        projects[index];

    if (projectNumber) {

        projectNumber.textContent =
            project.number;

    }


    if (projectTitle) {

        projectTitle.textContent =
            project.title;

    }


    if (projectDescription) {

        projectDescription.textContent =
            project.description;

    }


    if (projectTech) {

        projectTech.textContent =
            project.tech;

    }


    if (projectImage) {

        projectImage.src =
            project.image;

        projectImage.alt =
            project.title;

    }


    if (projectLive) {

        projectLive.href =
            project.live;

    }


    if (projectGithub) {

        projectGithub.href =
            project.github;

    }

}


projectPrev.addEventListener(
    "click",
    () => {

        currentProject--;

        if (currentProject < 0) {

            currentProject =
                projects.length - 1;

        }

        showProject(currentProject);

    }
);


projectNext.addEventListener(
    "click",
    () => {

        currentProject++;

        if (
            currentProject >=
            projects.length
        ) {

            currentProject = 0;

        }

        showProject(currentProject);

    }
);


showProject(0);


/* ==================================================
   ===== EMAILJS CONTACT FORM + AUTO REPLY =====
================================================== */

emailjs.init({

    publicKey:
        "suyjrkT1LHt_1Nfz3"

});


const contactForm =
    document.getElementById(
        "contact-form"
    );


const successPopup =
    document.getElementById(
        "success-popup"
    );


const popupClose =
    document.getElementById(
        "popup-close"
    );


/* ==================================================
   EMAILJS IDs
================================================== */

const SERVICE_ID =
    "service_jj618nw";


/* Your existing Contact/Admin template */

const CONTACT_TEMPLATE_ID =
    "template_jjmotqg";


/* Your NEW Auto Reply template */

const AUTOREPLY_TEMPLATE_ID =
    "template_4aptzwj";


/* ==================================================
   CONTACT FORM SUBMIT
================================================== */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const button =
                contactForm.querySelector(
                    ".btn"
                );


            const originalText =
                button.textContent;


            /* Disable button */

            button.disabled = true;

            button.textContent =
                "Sending...";


            try {

                /* ======================================
                   1. SEND MESSAGE TO ADMIN
                ====================================== */

                await emailjs.sendForm(

                    SERVICE_ID,

                    CONTACT_TEMPLATE_ID,

                    contactForm

                );


                /* ======================================
                   2. SEND AUTO REPLY TO VISITOR
                ====================================== */

                await emailjs.sendForm(

                    SERVICE_ID,

                    AUTOREPLY_TEMPLATE_ID,

                    contactForm

                );


                /* ======================================
                   SUCCESS
                ====================================== */

                contactForm.reset();


                if (successPopup) {

                    successPopup.classList.add(
                        "active"
                    );

                }


            } catch (error) {

                console.error(
                    "EmailJS Error:",
                    error
                );


                alert(
                    "Message could not be sent. Please try again."
                );


            } finally {

                button.disabled =
                    false;


                button.textContent =
                    originalText;

            }

        }
    );

}


/* ==================================================
   ===== CLOSE SUCCESS POPUP =====
================================================== */

if (popupClose) {

    popupClose.addEventListener(
        "click",
        function () {

            successPopup.classList.remove(
                "active"
            );

        }
    );

}


/* ==================================================
   ===== CLOSE POPUP OUTSIDE =====
================================================== */

if (successPopup) {

    successPopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                successPopup
            ) {

                successPopup.classList.remove(
                    "active"
                );

            }

        }
    );

}




/* ==================================================
   ===== PROFILE IMAGE AUTO FLIP =====
================================================== */

const profileCard =
    document.querySelector(
        ".profile-card"
    );


function homeFlip() {

    if (!profileCard) return;


    profileCard.classList.remove(
        "flipped"
    );


    setTimeout(() => {

        profileCard.classList.add(
            "flipped"
        );


        setTimeout(() => {

            profileCard.classList.remove(
                "flipped"
            );

        }, 2000);


    }, 50);

}


window.addEventListener(
    "load",
    () => {

        if (
            location.hash === "#home" ||
            location.hash === ""
        ) {

            homeFlip();

        }

    }
);


window.addEventListener(
    "hashchange",
    () => {

        if (
            location.hash === "#home"
        ) {

            homeFlip();

        }

    }
);


profileCard?.addEventListener(
    "click",
    () => {

        profileCard.classList.toggle(
            "flipped"
        );

    }
);





/* ==================================================
   ===== ACHIEVEMENT CARD IMAGE HOVER =====
================================================== */

const experienceCards =
    document.querySelectorAll(
        ".experience-card"
    );


experienceCards.forEach(card => {

    const originalContent =
        card.innerHTML;


    card.addEventListener(
        "mouseenter",
        () => {

            const image =
                card.dataset.image;


            if (!image) return;


            card.innerHTML = `

                <img
                    src="${image}"
                    alt="Achievement"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:contain;
                        border-radius:inherit;
                    "
                >

            `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.innerHTML =
                originalContent;

        }
    );

});