// Мобільне меню (бургер).
(() => {
  const openBtn = document.querySelector(".menu-open-btn");
  const closeBtn = document.querySelector(".menu-close-btn");
  const menu = document.querySelector(".mobile-menu");
  const body = document.body;
  if (!openBtn || !closeBtn || !menu) return;

  function openMenu() {
    menu.classList.remove("is-hidden");
    body.classList.add("no-scroll");
  }

  function closeMenu() {
    menu.classList.add("is-hidden");
    body.classList.remove("no-scroll");
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  // Закриваємо меню після переходу за будь-яким пунктом
  menu.querySelectorAll(".mobile-menu-item").forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
})();
