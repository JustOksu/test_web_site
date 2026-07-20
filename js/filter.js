// Фільтрація проектів у портфоліо за категоріями.
// Кнопки мають data-filter, картки — data-category (можна кілька через пробіл).
(() => {
  const buttons = document.querySelectorAll(".btn-profile[data-filter]");
  const cards = document.querySelectorAll(".list-portfolio-img[data-category]");
  if (!buttons.length || !cards.length) return;

  function applyFilter(filter) {
    cards.forEach((card) => {
      const categories = (card.dataset.category || "").split(/\s+/);
      const show = filter === "all" || categories.includes(filter);

      card.classList.remove("card-appear");
      if (show) {
        card.classList.remove("is-hidden-card");
        // Перезапуск анімації появи
        void card.offsetWidth;
        card.classList.add("card-appear");
      } else {
        card.classList.add("is-hidden-card");
      }
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    });
  });
})();
