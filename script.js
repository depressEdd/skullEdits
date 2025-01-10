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
