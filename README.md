# ONG Esperança — Projeto Front-end

Aplicação web institucional de exemplo para uma organização não governamental, desenvolvida como atividade prática de front-end.

## Objetivo
Apresentar projetos sociais, campanhas de doação e uma área de cadastro de voluntários, com foco em semântica HTML, responsividade, acessibilidade e organização do código.

## Tecnologias
- HTML5 semântico
- CSS3, incluindo layout responsivo com Grid e Flexbox
- JavaScript (módulos ES) para navegação por hash, renderização de templates, validação visual do formulário e armazenamento local
- Git e GitHub para controle de versão
- GitHub Pages / GitHub Actions para publicação

## Estrutura do repositório
```text
experiencia-pratica-frontend-ong/
├── .github/
│   └── workflows/
│       └── pages.yml
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── images/
│   ├── campanha-doacoes.webp
│   ├── comunidade-voluntarios.webp
│   ├── doacao-alimentos.webp
│   └── educacao-leitura.webp
├── js/
│   ├── data.js
│   ├── form.js
│   ├── main.js
│   ├── router.js
│   ├── storage.js
│   └── templates.js
├── index.html
└── README.md
```

## Como executar localmente
1. Clone ou baixe este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Inicie um servidor local, por exemplo com a extensão Live Server. Isso é recomendado porque o projeto utiliza módulos JavaScript ES.
4. Abra a página inicial e teste a navegação, os formulários e a versão móvel.

Não é necessário instalar dependências npm para executar a versão atual.

## Páginas e funcionalidades
- **Início:** apresentação institucional e chamadas para ação.
- **Projetos sociais:** frentes de atuação e campanhas de doação.
- **Cadastro de voluntário:** campos com validação nativa HTML, mensagens de feedback e restauração local dos dados preenchidos no navegador.
- **Navegação:** menu responsivo e rotas internas por hash na aplicação principal.

## Acessibilidade e validação
O projeto utiliza landmarks semânticos (`header`, `nav`, `main`, `section`, `footer`), hierarquia de títulos, textos alternativos em imagens, rótulos associados aos campos e mensagens de estado com atributos ARIA quando apropriado.

**Validação HTML:** validar separadamente os documentos `html/index.html`, `html/projetos.html`, `html/cadastro.html` e o `index.html` da raiz no [Nu HTML Checker do W3C](https://validator.w3.org/nu/). Registrar aqui a data, o resultado e as correções após a execução do validador. A existência deste tópico não significa, por si só, que a validação já foi aprovada.

## Controle de versão
As alterações são registradas no histórico do GitHub. As mensagens de commit devem descrever a alteração realizada, por exemplo: `fix: corrige validação do formulário` ou `docs: documenta estrutura do projeto`.

## Observação
O formulário é demonstrativo: os dados são validados e armazenados localmente no navegador, mas não são enviados a um servidor nem a uma base de dados.
