// Getting references to HTML elements
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons');
let btnHome = document.getElementById("view-results");

// Declaring variables for managing questions
let shuffledQuestions, currentQuestionIndex

// Event listeners for the start button and next button
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// Function to start the game
function startGame() {
  // Hiding the start button and displaying the question container
  startButton.classList.add('hide')
  btnHome.innerHTML = ''; 
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

// Function to set up the next question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Function to display a question
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    // Creating a button for each answer
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

// Function to reset the state for the next question
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  // Removing all answer buttons
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

// Function to handle the selection of an answer
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  // Displaying the next button or restart button
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    // Adding a "Home" button when the quiz is completed
    btnHome.innerHTML += `<button id="btnReturn" class="btn"> <a href="../main-menu/index.html">Home</a></button>`
  }
}

// Function to set the status class (correct or wrong)
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

// Function to clear the status class
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// Array of questions with their respective answers
const questions = [
  {
    question: 'What does "zanhoria" mean in English?',
    answers: [
      { text: 'Carrot', correct: true },
      { text: 'Apple', correct: false },
      { text: 'Fruit', correct: false },
      { text: 'Pencil', correct: false }
    ]
  },
  {
    question: 'What does "Me lo puedo probar" mean in English?',
    answers: [
      { text: 'Can I try it on?', correct: false },
      { text: 'What is the weather outside?', correct: false },
      { text: 'What is the date today?', correct: true },
      { text: 'What is the color of the sky?', correct: false }
    ]
  },
  {
    question: 'What does "¿Qué hora es?" mean in English?',
    answers: [
      { text: 'What are you going to do?', correct: false },
      { text: 'What time is it?', correct: true },
      { text: 'What is that? ', correct: false },
      { text: 'What are you doing?', correct: false }
    ]
  },
  {
    question: 'What is "What is on your mind" in spanish?',
    answers: [
      { text: '¿En qué piensas?', correct: false },
      { text: '¿Estás de acuerdo?', correct: true },
      { text: '¿Está bien?', correct: false },
      { text: '¿Está ocupado?', correct: false }
    ]
  }
]
