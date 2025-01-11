const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddentElements = document.querySelectorAll(".hidden");
hiddentElements.forEach((el) => {
  observer.observe(el);
});

const counters = document.querySelectorAll(".subs");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute("data-count");
      let current = 0;
      const increment = Math.ceil(target / 100);

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          if (current > target) current = target;
          counter.textContent = `+${current.toLocaleString()}`;
          requestAnimationFrame(updateCounter);
        }
      };

      if (!counter.classList.contains("counted")) {
        counter.classList.add("counted");
        updateCounter();
      }
    }
  });
});

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// Animation icons function
const iconObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("icon-visible");
    } else {
      entry.target.classList.remove("icon-visible");
    }
  });
});

const iconElements = document.querySelectorAll(".icon");
iconElements.forEach((icon) => {
  iconObserver.observe(icon);
});

////// Hamburger menu

document.querySelector(".menu-toggle").addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});

// Modal
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const body = document.querySelector("body");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("open");
  body.classList.add("no-scroll");
});

const closeModal = () => {
  modal.classList.add("closing");
  modal.querySelector(".modal-content").classList.add("closing");

  modal.addEventListener(
    "animationend",
    () => {
      modal.classList.remove("open", "closing");
      modal.querySelector(".modal-content").classList.remove("closing");
      body.classList.remove("no-scroll");
    },
    { once: true }
  );
};
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});


