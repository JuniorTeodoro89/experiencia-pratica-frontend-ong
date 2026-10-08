const app = document.querySelector("#app");

const dados = {
  cards: [
    {
      titulo: "Doações",
      texto: "Contribua para campanhas e materiais essenciais."
    },
    {
      titulo: "Voluntariado",
      texto: "Compartilhe seu tempo, conhecimento e habilidades."
    },
    {
      titulo: "Divulgação",
      texto: "Ajude a ampliar o alcance dos nossos projetos."
    }
  ],
  projetos: [
    {
      titulo: "Inclusão e capacitação",
      imagem: "../images/comunidade-voluntarios.webp",
      alt: "Voluntários felizes junto da comunidade atendida",
      texto: "Oficinas e encontros que estimulam habilidades e autonomia."
    },
    {
      titulo: "Apoio comunitário",
      imagem: "../images/doacao-alimentos.webp",
      alt: "Voluntários entregando alimentos a pessoas da comunidade",
      texto: "Ações de arrecadação e distribuição de itens essenciais."
    },
    {
      titulo: "Educação e oportunidades",
      imagem: "../images/educacao-leitura.webp",
      alt: "Voluntária ensinando crianças a ler",
      texto: "Atividades educativas e orientação para novas possibilidades."
    }
  ],
  campanhas: [
    "Alimentos não perecíveis.",
    "Materiais escolares.",
    "Itens de higiene e limpeza."
  ]
};

const routes = {
  inicio: renderInicio,
  projetos: renderProjetos,
  cadastro: renderCadastro
};

function templateCard({ titulo, texto }) {
  return `
    <article class="card">
      <h3>${titulo}</h3>
      <p>${texto}</p>
    </article>
  `;
}

function templateProjeto({ titulo, imagem, alt, texto }) {
  return `
    <article class="project">
      <h3>${titulo}</h3>
      <img src="${imagem}" alt="${alt}">
      <p>${texto}</p>
    </article>
  `;
}

function renderInicio() {
  const cards = dados.cards.map(templateCard).join("");

  return `
    <section class="hero container" aria-labelledby="titulo-principal">
      <div>
        <p class="eyebrow">Ação que transforma</p>
        <h1 id="titulo-principal">Juntos, podemos transformar vidas.</h1>
        <p class="lead">A ONG Esperança atua com inclusão social, apoio comunitário e oportunidades de voluntariado para fortalecer pessoas e comunidades.</p>
        <div class="actions">
          <a class="button" href="#projetos" data-route>Conheça nossos projetos</a>
          <a class="button button-secondary" href="#cadastro" data-route>Quero ser voluntário</a>
        </div>
      </div>
      <img src="../images/doacao-alimentos.webp" alt="Voluntários distribuindo alimentos em uma ação comunitária">
    </section>

    <section class="container section">
      <h2>Quem somos</h2>
      <p>Somos uma organização sem fins lucrativos dedicada a ampliar o acesso a oportunidades, promover a solidariedade e conectar pessoas dispostas a ajudar com iniciativas que geram impacto local.</p>
    </section>

    <section class="container section cards">
      <h2>Como você pode ajudar</h2>
      ${cards}
    </section>
  `;
}

function renderProjetos() {
  const projetos = dados.projetos.map(templateProjeto).join("");
  const campanhas = dados.campanhas.map(item => `<li>${item}</li>`).join("");

  return `
    <div class="container">
      <section class="section">
        <p class="eyebrow">Nosso impacto</p>
        <h1>Projetos sociais</h1>
        <p class="lead">Conheça algumas das frentes de atuação da ONG e descubra como participar.</p>
      </section>

      <section class="section">
        <h2>Frentes de atuação</h2>
        ${projetos}
      </section>

      <section class="section">
        <h2>Campanhas de doação</h2>
        <img src="../images/campanha-doacoes.webp" alt="Voluntários unidos convidando a comunidade a fazer doações">
        <ul class="feature-list">${campanhas}</ul>
      </section>

      <section class="section">
        <h2>Como ser voluntário</h2>
        <ol class="steps">
          <li>Conheça nossas iniciativas.</li>
          <li>Escolha uma frente de atuação.</li>
          <li>Preencha o cadastro.</li>
        </ol>
        <a class="button" href="#cadastro" data-route>Fazer cadastro</a>
      </section>
    </div>
  `;
}

function renderCadastro() {
  return `
    <div class="container">
      <section class="section">
        <p class="eyebrow">Participe</p>
        <h1>Cadastro de voluntário</h1>
        <p class="lead">Preencha os dados abaixo para demonstrar seu interesse em colaborar com a ONG.</p>
      </section>

      <form class="form" id="volunteer-form">
        <fieldset>
          <legend>Dados pessoais</legend>
          <label for="nome">Nome completo</label>
          <input id="nome" name="nome" type="text" autocomplete="name" required>

          <label for="cpf">CPF</label>
          <input id="cpf" name="cpf" type="text" inputmode="numeric" pattern="[0-9]{11}" maxlength="11" minlength="11" required>

          <label for="nascimento">Data de nascimento</label>
          <input id="nascimento" name="nascimento" type="date" required>
        </fieldset>

        <fieldset>
          <legend>Contato</legend>
          <label for="email">E-mail</label>
          <input id="email" name="email" type="email" autocomplete="email" required>

          <label for="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel" inputmode="numeric" pattern="[0-9]{10,11}" maxlength="11" required>
        </fieldset>

        <button class="button" type="submit">Enviar cadastro</button>
        <p id="form-feedback" class="alert alert-info" role="status" hidden>Preencha os campos obrigatórios para continuar.</p>
      </form>
    </div>
  `;
}

function getRoute() {
  return location.hash.replace("#", "") || "inicio";
}

function renderRoute() {
  const route = getRoute();
  const renderer = routes[route] || routes.inicio;

  app.innerHTML = renderer();

  document.querySelectorAll("[data-route]").forEach(link => {
    link.setAttribute("aria-current", link.getAttribute("href") === `#${route}` ? "page" : "false");
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", event => {
  const routeLink = event.target.closest("[data-route]");

  if (routeLink) {
    const menuToggle = document.querySelector("#menu-toggle");

    if (menuToggle) {
      menuToggle.checked = false;
    }
  }
});

document.addEventListener("input", event => {
  const field = event.target.closest("#volunteer-form input");

  if (!field) return;

  field.classList.toggle("is-valid", field.checkValidity());
  field.classList.toggle("is-invalid", !field.checkValidity());
});

document.addEventListener("submit", event => {
  const form = event.target.closest("#volunteer-form");

  if (!form) return;

  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();

    const feedback = document.querySelector("#form-feedback");
    feedback.hidden = false;
    feedback.className = "alert alert-warning";
    feedback.textContent = "Revise os campos destacados antes de enviar.";
    return;
  }

  const feedback = document.querySelector("#form-feedback");
  feedback.hidden = false;
  feedback.className = "alert alert-success";
  feedback.textContent = "Cadastro validado localmente com sucesso!";
});

window.addEventListener("hashchange", renderRoute);
document.addEventListener("DOMContentLoaded", renderRoute);
