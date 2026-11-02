let score = 0;
const questions = ["What planet is known as the 'Red Planet'?", "What is my favorite color?"];
const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Cyan", "Magenta", "Lime", "Cedar"]
];
const correctAnswers = [
  "Mars",
  "Cyan"
];
let currentQuestionIndex = 0;

function displayQuestion() {
   if (currentQuestionIndex < questions.length) {
    document.getElementById('question').innerHTML = questions[
      currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`choice${i+1}`);
    btn.innerHTML = choicesArray[currentQuestionIndex][i];
    btn.value = choicesArray[currentQuestionIndex][i];
  }
    } else {
    document.getElementById('result').innerHTML =
      `You scored ${score} out of ${questions.length}!`;
      document.getElementById('question').innerHTML = "";
      document.getElementById('choices').innerHTML = "";
  }
}

function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();

 if (button.value===correctAnswers){
    result.innerHTML="Correct";}
  else {
    result.innerHTML="Wrong!";}
   for(let i = 1; i <= 4; i++){
    document.getElementById(`choicesArray${i}`).disabled = true;}
