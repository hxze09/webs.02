function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

// Navbar active link scroll logic
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let currentSectionId = '';
  const navbarHeight = document.querySelector('.navbar').offsetHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbarHeight - 50;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});

const teachersSlider = document.querySelector('.teachers-slider');
const teacherCards = document.querySelectorAll('.teachers-slider .teacher-card');

let scrollAmount = 0;
if (teacherCards.length > 0) {
  const cardWidth = teacherCards[0].offsetWidth;
  const cardMarginRight = parseInt(window.getComputedStyle(teacherCards[0]).marginRight);
  scrollAmount = cardWidth + cardMarginRight;
}

function scrollTeachers(direction) {
  if (!teachersSlider || scrollAmount === 0) return;

  teachersSlider.scrollBy({
    left: direction * scrollAmount * 1,
    behavior: 'smooth'
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    scrollTeachers(-1);
  } else if (e.key === 'ArrowRight') {
    scrollTeachers(1);
  }
});