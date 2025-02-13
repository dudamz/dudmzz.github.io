var numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinhar() {
  var palpite = document.getElementById('palpite').value;
  var resultado = document.getElementById('resultado');
  var dicas = document.getElementById('dicas');

  if (palpite === '') {
    resultado.innerHTML = 'Por favor, insira um número!';
    dicas.innerHTML = '';
  } else {
    palpite = parseInt(palpite);

    if (palpite < 1 || palpite > 100) {
      resultado.innerHTML = 'O número deve ser entre 1 e 100!';
      dicas.innerHTML = '';
    } else if (palpite < numeroSecreto) {
      resultado.innerHTML = 'Tente um número maior!';
      dicas.innerHTML = 'Seu palpite foi: ' + palpite;
    } else if (palpite > numeroSecreto) {
      resultado.innerHTML = 'Tente um número menor!';
      dicas.innerHTML = 'Seu palpite foi: ' + palpite;
    } else {
      resultado.innerHTML = 'Parabéns! Você acertou o número: ' + numeroSecreto;
      dicas.innerHTML = 'Você venceu! Clique em "Tentar" para jogar novamente.';
    }
  }
}
