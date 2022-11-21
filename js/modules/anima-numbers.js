export default function initAnimaNumbers() {
  function animaNumbers() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = Math.floor(total / 100);

      let start = 0;

      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25);
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumbers();
    }
  }

  const observerTarget = document.querySelector(".numbers");

  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
