desafio


let numero = Math.floor(Math.random() * 11); // Escolhe um número aleatório entre 0 e 10
let tentativas = 3;

while (tentativas > 0) {
  let palpite = parseInt(prompt("Adivinhe o número que estou pensando:"));
  if (palpite === numero) {
    alert("Parabéns, você acertou!");
    break; // Sai do loop
  } else {
    tentativas--;
    if (tentativas > 0) {
      alert(`Você errou. Tente novamente. Você ainda tem ${tentativas} tentativas.`);
    }
  }
}

if (tentativas === 0) {
  alert(`Que pena! Você errou. A reposta correta é: ${numero}.`);
}
