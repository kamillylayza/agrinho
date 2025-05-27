let indicePergunta = 0;
let pontuacao = 0;

function mostrarPergunta() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (indicePergunta >= perguntas.length) {
    container.innerHTML = `<h2>Você acertou ${pontuacao} de ${perguntas.length} perguntas!</h2>
    <button onclick="reiniciarQuiz()">Refazer Quiz</button>`;
    return;
  }

  const perguntaAtual = perguntas[indicePergunta];

  const titulo = document.createElement("h2");
  titulo.textContent = perguntaAtual.pergunta;
  container.appendChild(titulo);

  perguntaAtual.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.onclick = () => verificarResposta(i);
    container.appendChild(botao);
  });
}

function verificarResposta(opcaoSelecionada) {
  if (opcaoSelecionada === perguntas[indicePergunta].resposta) {
    pontuacao++;
  }
  indicePergunta++;
  mostrarPergunta();
}

function reiniciarQuiz() {
  indicePergunta = 0;
  pontuacao = 0;
  mostrarPergunta();
}

mostrarPergunta();
