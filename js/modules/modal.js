export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="abrir"]');
  const buttonClose = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (buttonOpen && buttonClose && containerModal) {
    function openModal(event) {
      event.preventDefault();
      containerModal.classList.add("ativo");
    }
    function closeModal(event) {
      event.preventDefault();
      containerModal.classList.remove("ativo");
    }

    function clickOutModal(event) {
      if (event.target === this) {
        closeModal(event);
      }
    }

    buttonOpen.addEventListener("click", openModal);
    buttonClose.addEventListener("click", closeModal);
    containerModal.addEventListener("click", clickOutModal);
  }
}
