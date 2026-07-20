// Модальне вікно «Контакти» / «Замовити послугу».
// Відкривається будь-якою кнопкою [data-modal-open],
// закривається хрестиком, кліком по підкладці та клавішею Esc.
(() => {
  const modal = document.querySelector("[data-modal]");
  if (!modal) return;

  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");
  const body = document.body;

  function openModal() {
    modal.classList.remove("is-hidden");
    body.classList.add("no-scroll");
    document.addEventListener("keydown", onEscape);
  }

  function closeModal() {
    modal.classList.add("is-hidden");
    body.classList.remove("no-scroll");
    document.removeEventListener("keydown", onEscape);
  }

  function onEscape(event) {
    if (event.key === "Escape") closeModal();
  }

  openButtons.forEach((btn) => btn.addEventListener("click", openModal));
  closeButtons.forEach((btn) => btn.addEventListener("click", closeModal));

  // Клік по темній підкладці (поза самим вікном) — закрити
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
})();
