import initAnimaNumbers from "./anima-numbers.js";

export default function fetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    const animalsResponse = await fetch(url);
    const animalsJson = await animalsResponse.json();
    const numberGrid = document.querySelector(".numbers-grid");

    animalsJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numberGrid.appendChild(divAnimal);
    });
    initAnimaNumbers();
  }

  fetchAnimais("./animals-api.json");
}
