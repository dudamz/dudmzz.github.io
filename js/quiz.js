const questions = [
    {
      question: "Qual é o personagem favorito de Duda?",
      answers: [
        { option: "Pica pau", correct: false },
        { option: "Shrek", correct: true },
        { option: "Bob Esponja", correct: false },
      ],
    },
    {
      question: "Em que data Duda completa aniversário?",
      answers: [
        { option: "21 de Julho", correct: true },
        { option: "15 de Agosto", correct: false },
        { option: "10 de Novembro", correct: false },
      ],
    },
    {
      question: "Onde Duda passou as férias?",
      answers: [
        { option: "Na Bahia", correct: true },
        { option: "Em São Paulo", correct: false },
        { option: "No Rio de Janeiro", correct: false },
      ],
    },
    {
      question: "Qual dessas matérias Duda é pior?",
      answers: [
        { option: "Informatica Básica", correct: false },
        { option: "Desenvolvimento Web", correct: true },
        { option: "Lógica de Programação", correct: false },
      ],
    },
    {
      question: "Qual estilo de corte de cabelo Duda escolheria?",
      answers: [
        { option: "Careca", correct: true },
        { option: "Cabelo comprido", correct: false },
        { option: "Cabelo curto e estiloso", correct: false },
      ],
    },
  ];
  
  const question = document.querySelector(".question");
  const answers = document.querySelector(".answers");
  const spnQtd = document.querySelector(".spnQtd");
  const textFinish = document.querySelector(".finish span");
  const content = document.querySelector(".content");
  const contentFinish = document.querySelector(".finish");
  const btnRestart = document.querySelector(".finish button");
  
  let currentIndex = 0;
  let questionsCorrect = 0;
  
  btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
  };
  
  function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
      questionsCorrect++;
    }
  
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      loadQuestion();
    } else {
      finish();
    }
  }
  
  function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
  }
  
  function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;
  
    item.answers.forEach((answer) => {
      const div = document.createElement("div");
  
      div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
          ${answer.option}
        </button>
      `;
  
      answers.appendChild(div);
    });
  
    document.querySelectorAll(".answer").forEach((item) => {
      item.addEventListener("click", nextQuestion);
    });
  }
  
  loadQuestion();
  