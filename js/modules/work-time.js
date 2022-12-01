export default function workTime() {
  const workTimeElement = document.querySelector("[data-semana]");

  const weekDays = workTimeElement.dataset.semana.split(",").map(Number);
  const weekHours = workTimeElement.dataset.horario.split(",").map(Number);

  const dateNow = new Date();
  const today = dateNow.getDay();
  const currentHour = dateNow.getHours();

  const workWeek = weekDays.indexOf(today) !== -1;

  const isOpen = currentHour >= weekHours[0] && currentHour < weekHours[1];

  if (workWeek && isOpen) {
    workTimeElement.classList.add("aberto");
  }
}
