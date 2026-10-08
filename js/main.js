const app = document.querySelector("#app");

const routes = {
  inicio: renderInicio,
  projetos: renderProjetos,
  cadastro: renderCadastro
};

function renderInicio() {
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
      <article class="card"><h3>Doações</h3><p>Contribua para campanhas e materiais essenciais.</p></article>
      <article class="card"><h3>Voluntariado</h3><p>Compartilhe seu tempo, conhecimento e habilidades.</p></article>
      <article class="card"><h3>Divulgação</h3><p>Ajude a ampliar o alcance dos nossos projetos.</p></article>
    </section>
  `;
}

function renderProjetos() {
  return `
    <main class="container">
      <section class="section"><p class="eyebrow">Nosso impacto</p><h1>Projetos sociais</h1><p class="lead">Conheça algumas das frentes de atuação da ONG e descubra como participar.</p></section>
      <section class="section">
        <h2>Frentes de atuação</h2>
        <article class="project"><h3>Inclusão e capacitação</h3><img src="../images/comunidade-voluntarios.webp" alt="Voluntários felizes junto da comunidade atendida"><p>Oficinas e encontros que estimulam habilidades e autonomia.</p></article>
        <article class="project"><h3>Apoio comunitário</h3><img src="../images/doacao-alimentos.webp" alt="Voluntários entregando alimentos a pessoas da comunidade"><p>Ações de arrecadação e distribuição de itens essenciais.</p></article>
        <article class="project"><h3>Educação e oportunidades</h3><img src="../images/educacao-leitura.webp" alt="Voluntária ensinando crianças a ler"><p>Atividades educativas e orientação para novas possibilidades.</p></article>
      </section>
      <section class="section">
        <h2>Campanhas de doação</h2>
        <img src="../images/campanha-doacoes.webp" alt="Voluntários unidos convidando a comunidade a fazer doações">
        <ul class="feature-list"><li>Alimentos não perecíveis.</li><li>Materiais escolares.</li><li>Itens de higiene e limpeza.</li></ul>
      </section>
      <section class="section"><h2>Como ser voluntário</h2><ol class="steps"><li>Conheça nossas iniciativas.</li><li>Escolha uma frente de atuação.</li><li>Preencha o cadastro.</li></ol><a class="button" href="#cadastro" data-route>Fazer cadastro</a></section>
    </main>
  `;
}

function renderCadastro() {
  return `
    <main class="container">
      <section class="section"><p class="eyebrow">Participe</p><h1>Cadastro de voluntário</h1><p class="lead">Preencha os dados abaixo para demonstrar seu interesse em colaborar com a ONG.</p></section>
      <form class="form" id="volunteer-form">
        <fieldset><legend>Dados pessoais</legend>
          <label for="nome">Nome completo</label><input id="nome" name="nome" type="text" autocomplete="name" required>
          <label for="cpf">CPF</label><input id="cpf" name="cpf" type="text" inputmode="numeric" pattern="[0-9]{11}" maxlength="11" minlength="11" required>
          <label for="nascimento">Data de nascimento</label><input id="nascimento" name="nascimento" type="date" required>
        </fieldset>
        <fieldset><legend>Contato</legend>
          <label for="email">E-mail</label><input id="email" name="email" type="email" autocomplete="email" required>
          <label for="telefone">Telefone</label><input id="telefone" name="telefone" type="tel" inputmode="numeric" pattern="[0-9]{10,11}" maxlength="11" required>
        </fieldset>
        <button class="button" type="submit">Enviar cadastro</button>
        <p id="form-feedback" class="alert alert-info" role="status" hidden>Preencha os campos obrigatórios para continuar.</p>
      </form>
    </main>
  `;
}

function getRoute() {
  return location.hash.replace("#", "") || "inicio";
}

function renderRoute() {
  const route = getRoute();
  const renderer = routes[route] || routes.inicio;
  app.innerHTML = renderer();
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelectorAll("[data-route]").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector("#menu-toggle").checked = false;
    });
  });
  const form = document.querySelector("#volunteer-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const feedback = document.querySelector("#form-feedback");
      feedback.hidden = false;
      feedback.className = "alert alert-success";
      feedback.textContent = "Cadastro validado localmente com sucesso!";
    });
  }
}

window.addEventListener("hashchange", renderRoute);
document.addEventListener("DOMContentLoaded", renderRoute);
