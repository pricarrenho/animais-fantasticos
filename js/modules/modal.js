function openModal(event, containerModal) {
  event.preventDefault();
  containerModal.classList.add("ativo");
}

function closeModal(event, containerModal) {
  event.preventDefault();
  containerModal.classList.remove("ativo");
}

function clickOutModal(event) {
  if (event.target === this) {
    closeModal(event);
  }
}

export default function modal() {
  const buttonOpen = document.querySelector('[data-modal="abrir"]');
  const buttonClose = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const enableFunction = buttonOpen && buttonClose && containerModal;

  if (!enableFunction) return;

  buttonOpen.addEventListener("click", (event) =>
    openModal(event, containerModal)
  );

  buttonClose.addEventListener("click", (event) =>
    closeModal(event, containerModal)
  );

  containerModal.addEventListener("click", clickOutModal);
}
