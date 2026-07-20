// Поява блоків під час прокрутки.
// Надійний варіант на scroll + getBoundingClientRect (працює всюди).
// Клас .reveal-ready вмикає прихований стан лише коли JS активний —
// без JS увесь контент лишається видимим.
(() => {
  const items = Array.prototype.slice.call(
    document.querySelectorAll(".reveal")
  );
  if (!items.length) return;

  const root = document.documentElement;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Дозволяємо прихований стартовий стан лише зараз (JS працює)
  root.classList.add("reveal-ready");

  let pending = items.slice();

  function check() {
    const h = window.innerHeight || root.clientHeight;
    pending = pending.filter((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < h * 0.85) {
        el.classList.add("is-visible");
        return false;
      }
      return true;
    });
    if (!pending.length) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
  }

  function onScroll() {
    window.requestAnimationFrame(check);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("load", check);
  check();

  // Страховка: якщо щось пішло не так — показати все за 2.5 с
  setTimeout(() => {
    items.forEach((el) => el.classList.add("is-visible"));
  }, 2500);
})();
