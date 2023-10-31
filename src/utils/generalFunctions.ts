export function saudacao() {
  const horaAtual = new Date().getHours();
  let saudacao: string;

  if (horaAtual >= 0 && horaAtual < 12) {
    saudacao = "bom dia";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    saudacao = "boa tarde";
  } else {
    saudacao = "boa noite";
  }

  return saudacao;
}

export function yearWorkingAsProgrammer() {
  const currentYear = new Date().getFullYear()
  const yearsWorking = currentYear - 2020

  return yearsWorking
}
