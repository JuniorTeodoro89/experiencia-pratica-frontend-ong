import { salvarDadosFormulario, restaurarDadosFormulario } from "./storage.js";

function getFieldMessage(field) {
  if (field.validity.valueMissing) return "Este campo é obrigatório.";
  if (field.validity.typeMismatch) return "Informe um formato de e-mail válido.";
  if (field.validity.patternMismatch) {
    if (field.id === "cpf") return "O CPF deve conter exatamente 11 números.";
    if (field.id === "telefone") return "O telefone deve conter 10 ou 11 números.";
    return "O formato informado é inválido.";
  }
  if (field.validity.tooShort) return `Informe pelo menos ${field.minLength} caracteres.`;
  if (field.validity.tooLong) return `Informe no máximo ${field.maxLength} caracteres.`;
  return "";
}

export function showFieldFeedback(field, forceMessage = false) {
  const valid = field.checkValidity();
  const message = valid ? "" : getFieldMessage(field);

  field.classList.toggle("is-valid", valid && field.value !== "");
  field.classList.toggle("is-invalid", !valid && (forceMessage || field.value !== ""));

  let feedback = field.parentElement.querySelector(`[data-feedback-for="${field.id}"]`);

  if (!feedback) {
    feedback = document.createElement("small");
    feedback.dataset.feedbackFor = field.id;
    feedback.className = "field-feedback";
    field.insertAdjacentElement("afterend", feedback);
  }

  feedback.textContent = message;
  feedback.hidden = !message || (!forceMessage && !field.value);
}

function validarFormulario(form) {
  let formValid = true;

  form.querySelectorAll("input").forEach(field => {
    showFieldFeedback(field, true);
    if (!field.checkValidity()) formValid = false;
  });

  const feedback = form.querySelector("#form-feedback");

  if (!formValid) {
    form.reportValidity();
    feedback.hidden = false;
    feedback.className = "alert alert-warning";
    feedback.textContent = "Revise os campos destacados antes de enviar.";
    return;
  }

  feedback.hidden = false;
  feedback.className = "alert alert-success";
  feedback.textContent = "Cadastro validado localmente com sucesso!";
}

export function initFormEvents() {
  document.addEventListener("input", event => {
    const field = event.target.closest("#volunteer-form input");
    if (!field) return;

    showFieldFeedback(field);

    if (field.form) salvarDadosFormulario(field.form);
  });

  document.addEventListener("blur", event => {
    const field = event.target.closest("#volunteer-form input");
    if (field) showFieldFeedback(field, true);
  }, true);

  document.addEventListener("submit", event => {
    const form = event.target.closest("#volunteer-form");
    if (!form) return;

    event.preventDefault();
    validarFormulario(form);
  });
}

export function restoreForm(form) {
  restaurarDadosFormulario(form, showFieldFeedback);
}
