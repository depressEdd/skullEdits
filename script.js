let lastScrollY = 0;
const sections = document.querySelectorAll("div"); // Selecciona todas las secciones

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    moveToNextSection();
  } else {
    moveToPreviousSection();
  }

  if (e.deltaY > 0) {
    moveToNextSection();
  } else {
    moveToPreviousSection();
  }
});

function moveToNextSection() {
  let currentSection = getCurrentSection();
  let nextSection = currentSection.nextElementSibling;

  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  }
}

function moveToPreviousSection() {
  let currentSection = getCurrentSection();
  let prevSection = currentSection.previousElementSibling;

  if (prevSection) {
    window.scrollTo({
      top: prevSection.offsetTop,
      behavior: "smooth",
    });
  }
}

function getCurrentSection() {
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    if (
      window.scrollY >= section.offsetTop &&
      window.scrollY < section.offsetTop + section.offsetHeight
    ) {
      return section;
    }
  }
  return sections[0];
}

////////////////////////////////////////////////////////////

function checkVisibility() {
  const element = document.querySelector(".motion-presets-animation");
  const rect = element.getBoundingClientRect();
  const viewHeight = window.innerHeight;

  if (rect.top < viewHeight && rect.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
}

window.addEventListener("scroll", checkVisibility);

checkVisibility();



///

const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const cards = [...document.querySelectorAll('.card')];
cards.forEach(card => slider.appendChild(card.cloneNode(true))); // Copiamos al final
cards.forEach(card => slider.insertBefore(card.cloneNode(true), slider.firstChild)); // Copiamos al principio

let currentIndex = cards.length; 
const cardWidth = cards[0].offsetWidth + 20;
const totalCards = slider.children.length; 

slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

function moveNext() {
    currentIndex++;
    slider.style.transition = 'transform 0.6s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    setTimeout(() => {
        if (currentIndex >= totalCards - cards.length) {
            slider.style.transition = 'none';
            currentIndex = cards.length;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }, 600);
}

function movePrev() {
    currentIndex--;
    slider.style.transition = 'transform 0.6s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    setTimeout(() => {
        if (currentIndex < cards.length) {
            slider.style.transition = 'none';
            currentIndex = totalCards - cards.length * 2;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }, 600);
}

nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);

