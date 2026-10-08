import { renderRoute } from "./router.js";
import { initFormEvents } from "./form.js";

document.addEventListener("click", event => {
  const routeLink = event.target.closest("[data-route]");

  if (routeLink) {
    const menuToggle = document.querySelector("#menu-toggle");
    if (menuToggle) menuToggle.checked = false;
  }
});

initFormEvents();

window.addEventListener("hashchange", renderRoute);
document.addEventListener("DOMContentLoaded", renderRoute);
