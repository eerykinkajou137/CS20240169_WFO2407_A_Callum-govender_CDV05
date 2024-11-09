class ProjectSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Styles for layout, window, and buttons */
        .proj1 { display: flex; justify-content: space-between; padding: 10%; max-width: 1200px;                /* Set a max width for the container */
    margin: 4em auto;                 /* Center the content with larger margin */
    padding: 3em;                     /* Add padding for inner spacing */
    background: white;                /* White background for contrast */
    border-radius: 8px;               /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */ }
        .description-div { display: flex; flex-direction: column; gap: 1em; width: 40%; }
        .window1 {
          display: flex; flex-direction: column; align-items: center; width: 50%;
          max-width: 50%; padding: 20px; background-color: rgb(176, 209, 209); border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); text-align: center;
        }
        .welcome { font-weight: 900; color: #5f5f5f; margin-bottom: 15px; }
        .select { font-weight: 400; }
        .levels { display: flex; flex-direction: column; width: 100%; align-items: center; gap: 10px; }
        .button-30 {
          width: 50%; max-width: 250px; font-size: 1em; padding: 6px 8px; color: #000;
          background-color: snow; border: none; border-radius: 4px;
          box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
          cursor: pointer; transition: box-shadow 0.15s, transform 0.15s;
        }
        #back-btn{max-width:fit-content;}
        .button-30:hover { box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset; transform: translateY(-2px); }
        .button-30:active { box-shadow: #D6D6E7 0 3px 7px inset; transform: translateY(2px); }
      </style>
      
      <div class="proj1">
        <div class="window1">
          <!-- Back Button -->
          <button id="back-btn" class="button-30" style="align-self: flex-start; max-width=5%;">Back</button>
          
          <!-- Level Selection -->
          <div id="level-selection">
            <h1 class="welcome">Welcome to Callum's Software Development Quiz!</h1>
            <h2 class="select">Select Quiz Level</h2>
            <div class="levels">
              <button id="beginner" class="level-btn button-30">Beginner</button>
              <button id="intermediate" class="level-btn button-30">Intermediate</button>
              <button id="advanced" class="level-btn button-30">Advanced</button>
            </div>
          </div>
          
          <!-- Quiz Container -->
          <div id="quiz-container" style="display: none;">
            <div id="timer">Time Left: 30s</div>
            <div id="questions"></div>
            <div id="feedback"></div>
          </div>
        </div>
        
        <div class="description-div">
          <h3>Project One: Quiz</h3>
          <p class="description-para">This quiz project is a simple, interactive web application designed to test users' knowledge on various topics. It features a welcoming interface with level selection and multiple-choice questions, all contained within a clean, compact window layout. Users can select a difficulty level, answer questions, and receive instant feedback. The project emphasizes responsive design, intuitive navigation, and dynamic styling, providing a user-friendly and visually appealing experience.</p> 
        </div>
      </div>
    `;

    // Attach event listeners
    this.shadowRoot.querySelectorAll(".level-btn").forEach((button) => {
      button.addEventListener("click", (e) =>
        this.confirmDifficulty(e.target.id)
      );
    });
    this.shadowRoot
      .getElementById("back-btn")
      .addEventListener("click", () => this.goBack());
  }

  confirmDifficulty(level) {
    if (confirm(`Are you sure you want to start the ${level} level quiz?`)) {
      quizLevel = level;
      this.startQuiz(level);
    }
  }

  startQuiz(level) {
    const levelSelection = this.shadowRoot.getElementById("level-selection");
    const quizContainer = this.shadowRoot.getElementById("quiz-container");

    levelSelection.style.display = "none";
    quizContainer.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    timer = 30;

    // Load questions dynamically based on level
    import(`./levels/${level}.js`)
      .then((module) => {
        questions = module[`${level}Questions`];
        loadQuestion(); // Start with the first question
        startTimer();
      })
      .catch((err) => console.error("Failed to load questions:", err));
  }

  goBack() {
    const levelSelection = this.shadowRoot.getElementById("level-selection");
    const quizContainer = this.shadowRoot.getElementById("quiz-container");

    levelSelection.style.display = "block";
    quizContainer.style.display = "none";
    resetQuiz();
  }
}

// Global variables
let quizLevel = "";
let score = 0;
let timer = 30;
let countdown;
let currentQuestionIndex = 0;
let questions = [];

// Load a single question at a time
function loadQuestion() {
  const questionContainer = document
    .querySelector("custom-proj")
    .shadowRoot.getElementById("questions");
  questionContainer.innerHTML = ""; // Clear previous question

  const question = questions[currentQuestionIndex];
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");

  const questionText = document.createElement("p");
  questionText.textContent = question.question;
  questionElement.appendChild(questionText);

  question.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("button-30"); // Style option buttons
    optionButton.addEventListener("click", () =>
      handleAnswer(option, question.correctAnswer)
    );
    questionElement.appendChild(optionButton);
  });

  questionContainer.appendChild(questionElement);
}

// Handle Answer Submission
function handleAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score++;
  }

  // Move to the next question or show results if it was the last question
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

// Timer Function
function startTimer() {
  const timerDisplay = document
    .querySelector("custom-proj")
    .shadowRoot.getElementById("timer");
  clearInterval(countdown); // Clear any existing timer
  countdown = setInterval(() => {
    timer--;
    timerDisplay.textContent = `Time Left: ${timer}s`;

    if (timer <= 0) {
      clearInterval(countdown);
      showResults();
    }
  }, 1000);
}

// Show Final Results
function showResults() {
  clearInterval(countdown);
  const feedback = document
    .querySelector("custom-proj")
    .shadowRoot.getElementById("feedback");
  feedback.textContent = `Your score: ${score} out of ${questions.length}`;
  localStorage.setItem(`${quizLevel}Score`, score);
}

// Reset Quiz for Going Back
function resetQuiz() {
  quizLevel = "";
  score = 0;
  timer = 30;
  currentQuestionIndex = 0;
  document
    .querySelector("custom-proj")
    .shadowRoot.getElementById("feedback").textContent = "";
}

customElements.define("custom-proj", ProjectSection);
