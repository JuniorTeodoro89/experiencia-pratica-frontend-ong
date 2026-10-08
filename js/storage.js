const STORAGE_KEY = "ongEsperanca.voluntario";

export function salvarDadosFormulario(form) {
  const dadosFormulario = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dadosFormulario));
}

export function restaurarDadosFormulario(form, onRestore) {
  const dadosSalvos = localStorage.getItem(STORAGE_KEY);
  if (!dadosSalvos) return;

  try {
    const dadosFormulario = JSON.parse(dadosSalvos);

    Object.entries(dadosFormulario).forEach(([campo, valor]) => {
      const input = form.elements[campo];

      if (input) {
        input.value = valor;
        if (onRestore) onRestore(input);
      }
    });
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
    console.warn("Não foi possível recuperar os dados salvos.", error);
  }
}
