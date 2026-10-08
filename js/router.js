import { renderInicio, renderProjetos, renderCadastro } from "./templates.js";
import { restoreForm } from "./form.js";

const routes = {
  inicio: renderInicio,
  projetos: renderProjetos,
  cadastro: renderCadastro
};

export function getRoute() {
  return location.hash.replace("#", "") || "inicio";
}

export function renderRoute() {
  const app = document.querySelector("#app");
  const route = getRoute();
  const renderer = routes[route] || routes.inicio;

  app.innerHTML = renderer();

  const form = document.querySelector("#volunteer-form");
  if (form) restoreForm(form);

  document.querySelectorAll("[data-route]").forEach(link => {
    link.setAttribute("aria-current", link.getAttribute("href") === `#${route}` ? "page" : "false");
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}
