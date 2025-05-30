// Troca de abas
const buttons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('main section');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active dos botões e seções
    buttons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Ativa o botão e seção clicados
    button.classList.add('active');
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
    // Move o foco para a seção ativa para acessibilidade
    document.getElementById(target).focus();
  });
});

// Controle de tamanho da fonte
const main = document.querySelector('main');
const btnIncrease = document.getElementById('fontIncrease');
const btnDecrease = document.getElementById('fontDecrease');

btnIncrease.addEventListener('click', () => {
  changeFontSize(1.2);
});
btnDecrease.addEventListener('click', () => {
  changeFontSize(0.8);
});

function changeFontSize(multiplier) {
  const style = window.getComputedStyle(main);
  let fontSize = parseFloat(style.fontSize);
  let newFontSize = fontSize * multiplier;
  if (newFontSize < 12) newFontSize = 12;
  if (newFontSize > 30) newFontSize = 30;
 
