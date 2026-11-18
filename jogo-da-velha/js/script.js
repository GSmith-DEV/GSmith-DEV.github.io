/* ===========================================================================
   JOGO DA VELHA  —  complete o JavaScript (equipe de 3)

   O HTML e o CSS já estão prontos. Você só edita ESTE arquivo.
   Abra o index.html no navegador para testar.

   Objetivo: dois jogadores (X e O) se alternam clicando nas células. Vence quem
   fizer 3 em linha; se encher tudo sem vencedor, dá "velha" (empate).

   Há 3 lacunas: TODO A, TODO B e TODO C.
   =========================================================================== */

// ---- elementos já selecionados (prontos) ----
const celulas = document.querySelectorAll(".celula");
const elVez   = document.querySelector("#vez");
const elMensagem = document.querySelector("#mensagem");
const btnReiniciar = document.querySelector("#reiniciar");

// ---- estado (prontos) ----
let jogador = "X";   // de quem é a vez agora
let fim = false;     // vira true quando alguém vence ou dá velha

// ===== JÁ FEITO (modelo) — verificador de vitória pronto para usar =====
// venceu("X") devolve true se o X fez 3 em linha (em qualquer direção).
function venceu(j) {
  const linhas = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticais
    [0, 4, 8], [2, 4, 6],            // diagonais
  ];
  return linhas.some((linha) => linha.every((i) => celulas[i].textContent === j));
}

// Cada célula já "ouve" o clique e chama jogar(celula). (pronto)
celulas.forEach((celula) => {
  celula.addEventListener("click", () => jogar(celula));
});
// Reiniciar recarrega a página. (pronto)
btnReiniciar.addEventListener("click", () => location.reload());

function jogar(celula) {
  // -------------------------------------------------------------------------
  // TODO A (Reagir) — marcar a célula clicada
  //   1. Se o jogo acabou (fim) OU a célula já tem texto (celula.textContent !== ""),
  //      encerre (return) — não dá para jogar em cima do adversário.
  //   2. Escreva o jogador atual na célula: celula.textContent = jogador.
  //   3. Para a cor, adicione a classe correspondente:
  //      celula.classList.add(jogador.toLowerCase());   // "x" ou "o"
  // -------------------------------------------------------------------------
  // escreva o TODO A aqui
  console.log(fim,celula.textContent !== "" )
  if(fim || celula.textContent !== "") {
     return;
  } else {
     celula.textContent = jogador;
     celula.classList.add(jogador.toLowerCase())
  }



  // -------------------------------------------------------------------------
  // TODO B (Decidir) — alguém venceu?
  //   - Use o verificador pronto: if (venceu(jogador)) { ... }
  //       Se venceu: escreva no #mensagem algo como "Jogador X venceu! 🎉",
  //       marque fim = true e encerre a função (return).
  // -------------------------------------------------------------------------
  // escreva o TODO B aquii
  if (venceu(jogador)) {
    elMensagem.textContent = `Jogador ${jogador} venceu`
    fim = true
    return;
  }


  // -------------------------------------------------------------------------
  // TODO C (Fechar) — empate ou passar a vez
  //   - EMPATE: se TODAS as células estão preenchidas e ninguém venceu,
  //       escreva "Deu velha! 🤝" no #mensagem e marque fim = true.
  //       Dica: [...celulas].every((c) => c.textContent !== "")
  //   - Caso contrário: ALTERNE o jogador (se é "X" vira "O", senão vira "X")
  //       e atualize a vez na tela: elVez.textContent = jogador.
  // -------------------------------------------------------------------------
  // escreva o TODO C aqui
if ([...celulas].every((c) => c.textContent !== "")){
  elMensagem.textContent="Deu velha! 🤝";
  fim = true;

}
else{
  if(jogador ==="X"){
    jogador="O"
  }
  else{
    jogador="X"
  }
  elVez.textContent = jogador
}
  

}
