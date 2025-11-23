// Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navHeight = document.querySelector(".nav").offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Navbar background on scroll
const nav = document.getElementById("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.background = "rgba(251, 248, 204, 0.98)";
    nav.style.boxShadow = "0 2px 10px rgba(3, 4, 94, 0.1)";
  } else {
    nav.style.background = "rgba(251, 248, 204, 0.95)";
    nav.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// Animate skill bars on scroll
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-card__progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const percent = entry.target.getAttribute("data-percent");
          entry.target.style.width = percent + "%";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
};

// Scroll animations
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".about, .skills, .projects, .experience, .contacts"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in", "visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
};

// Contact form handling with EmailJS
const contactForm = document.getElementById("contactForm");
if (contactForm && typeof emailjs !== "undefined") {
  // Initialize EmailJS
  emailjs.init("YOUR_PUBLIC_KEY"); // Замените на ваш Public Key из EmailJS

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Показываем индикатор загрузки
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = "Отправка...";
    submitButton.disabled = true;

    // Получаем данные формы
    const formData = new FormData(contactForm);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
      to_email: "gosha19982306@gmail.com",
    };

    // Отправляем через EmailJS
    emailjs
      .send(
        "service_eftexan", // Service ID
        "YOUR_TEMPLATE_ID", // Замените на ваш Template ID
        templateParams
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.");
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert(
          "Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь со мной напрямую через email: gosha19982306@gmail.com"
        );
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      });
  });
}

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  animateSkillBars();
  animateOnScroll();

  // Add fade-in class to hero
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.classList.add("fade-in", "visible");
  }
});

// Add active class to nav link based on scroll position
const updateActiveNavLink = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const navHeight = document.querySelector(".nav").offsetHeight;

    if (window.pageYOffset >= sectionTop - navHeight - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", updateActiveNavLink);
