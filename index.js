let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".menu-toggle").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector("#menu").classList.toggle("visible");
    });
  });

  document.querySelectorAll("#menu a").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const anchor = document.querySelector(element.hash);
      anchor.scrollIntoView();
    });
  });

  window.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const opacity = Math.min(100, lastKnownScrollPosition) / 100;
        document.querySelector(
          "#menubar"
        ).style.backgroundColor = `rgba(4, 38, 48, ${opacity})`;
        ticking = false;
      });
      ticking = true;
    }
  });
});
