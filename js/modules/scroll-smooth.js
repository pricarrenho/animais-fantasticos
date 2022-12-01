function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function scrollSmooth() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
