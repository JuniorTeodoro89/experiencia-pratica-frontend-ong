import { dados } from "./data.js";

export function templateCard({ titulo, texto }) {
  return `
    <article class="card">
      <h3>${titulo}</h3>
      <p>${texto}</p>
    </article>
  `;
}

export function templateProjeto({ titulo, imagem, alt, texto }) {
  return `
    <article class="project">
      <h3>${titulo}</h3>
      <img src="${imagem}" alt="${alt}">
      <p>${texto}</p>
    </article>
  `;
}

export function renderInicio() {
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

export function renderProjetos() {
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

export function renderCadastro() {
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
