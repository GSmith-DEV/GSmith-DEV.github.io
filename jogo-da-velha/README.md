# ❌⭕ Jogo da Velha

Dois jogadores, **X** e **O**, se alternam clicando nas células. **Vence** quem
fizer **3 em linha** (horizontal, vertical ou diagonal). Se encher o tabuleiro
sem vencedor, dá **velha** (empate).

## Como rodar
Abra o **`index.html`** no navegador. Edite só o **`js/script.js`** e recarregue
(F5) para testar. O botão **Reiniciar** já funciona.

## O que a equipe deve fazer
Já estão prontos: o estado do jogo e o **verificador de vitória** `venceu()` —
vocês só precisam usá-lo. Completam **3 lacunas**:

- **TODO A — Reagir:** marcar a célula clicada com o jogador atual (e a cor),
  sem deixar jogar numa célula ocupada.
- **TODO B — Decidir:** usar `venceu(jogador)` para anunciar o vencedor e encerrar.
- **TODO C — Fechar:** detectar o **empate** (tabuleiro cheio) ou **passar a vez**
  para o outro jogador.

## Como vamos avaliar (correção em sala)
| Parte | O que olhamos | Pontos |
|---|---|---|
| **A — Reagir** | marca a célula certa e bloqueia célula ocupada | 30 |
| **B — Decidir** | usa `venceu()` e anuncia o vencedor | 40 |
| **C — Fechar** | trata o empate e alterna a vez | 30 |

> Dica: para alternar o jogador, um `if` resolve:
> `jogador = (jogador === "X") ? "O" : "X";`
