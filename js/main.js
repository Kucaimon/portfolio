// Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
    document.body.classList.remove("menu-open");
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
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
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

if (contactForm) {
  if (typeof emailjs === "undefined") {
    console.error(
      "EmailJS не загружен. Проверьте подключение библиотеки в index.html"
    );
  } else {
    // Initialize EmailJS
    const PUBLIC_KEY = "QpL0CK0RhrRLALLHP"; // Public Key
    const SERVICE_ID = "service_eftexan"; // Service ID
    const TEMPLATE_ID = "template_712l7qa"; // Template ID

    // Проверка настройки
    if (PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      console.error("⚠️ EmailJS не настроен! Укажите Public Key в js/main.js");
    } else {
      emailjs.init(PUBLIC_KEY);
    }

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Проверка настройки перед отправкой
      if (PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
        alert(
          "Форма еще не настроена. Укажите Public Key в js/main.js\n\nИли свяжитесь напрямую: gosha19982306@gmail.com"
        );
        return;
      }

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
        .send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then((response) => {
          console.log("✅ SUCCESS!", response.status, response.text);
          alert(
            "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время."
          );
          contactForm.reset();
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        })
        .catch((error) => {
          console.error("❌ ОШИБКА отправки:", error);
          let errorMessage = "Произошла ошибка при отправке.\n\n";

          // Более детальные сообщения об ошибках
          if (error.text) {
            if (error.text.includes("Invalid Public Key")) {
              errorMessage +=
                "Ошибка: Неверный Public Key. Проверьте настройки EmailJS.";
            } else if (error.text.includes("Invalid Service ID")) {
              errorMessage +=
                "Ошибка: Неверный Service ID. Проверьте настройки EmailJS.";
            } else if (error.text.includes("Invalid Template ID")) {
              errorMessage +=
                "Ошибка: Неверный Template ID. Проверьте настройки EmailJS.";
            } else {
              errorMessage += `Ошибка: ${error.text}`;
            }
          } else {
            errorMessage += "Проверьте консоль браузера (F12) для деталей.";
          }

          errorMessage += "\n\nИли свяжитесь напрямую: gosha19982306@gmail.com";

          alert(errorMessage);
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        });
    });
  }
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
