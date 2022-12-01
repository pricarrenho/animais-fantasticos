function animaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHalfHeight = window.innerHeight * 0.6;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowHalfHeight < 0;

    if (isSectionVisible) {
      section.classList.add("ativo");
    }
  });
}

export default function scrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (!sections.length) return;

  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
