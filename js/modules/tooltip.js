function criarTooltipBox(element) {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip");
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}

export default function tooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const onMouseLeave = {
    tooltipBox: "",
    handleEvent() {
      this.tooltipBox.remove();
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);
    this.addEventListener("mouseleave", onMouseLeave);
    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
