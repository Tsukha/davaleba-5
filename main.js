// 1.
const btn = document.createElement("button");
const newDiv = document.createElement("div");

btn.setAttribute("id", "btn");
newDiv.setAttribute("id", "txt");
newDiv.innerText = "I am new Div";

document.body.appendChild(btn);
document.body.appendChild(newDiv);

btn.addEventListener("click", () => newDiv.remove());

// screen separator
const separate = function () {
  const hr = document.createElement("hr");
  document.body.appendChild(hr);
};
separate();

// 2.
const div2 = document.createElement("div");
div2.setAttribute("id", "card");

const h2 = document.createElement("h2");
h2.innerText = "Gandalf";

const link = document.createElement("a");
link.setAttribute("href", "#");
link.innerText = "Go to profile";

div2.appendChild(h2);
div2.appendChild(link);
document.body.appendChild(div2);

separate();

// 3. quizz and bonuss exersices
const quiz = [
  {
    question: "What does typeOf function(){} return?",
    options: ["number", "object", "undefined", "function"],
    correctAnswer: 4,
    points: 1,
  },
  {
    question: "What will Boolean('false') return?",
    options: ["false", "true", "undefined", "null"],
    correctAnswer: 2,
    points: 1,
  },
  {
    question: "What isn't data type in Javascript",
    options: ["int", "bigint", "number", "string"],
    correctAnswer: 1,
    points: 1,
  },
];

const quizContainer = document.createElement("div");
quizContainer.setAttribute("id", "quiz-container");

const scoreContainer = document.createElement("p");
scoreContainer.classList.add("score");
scoreContainer.innerHTML = 'Score: <span id="score">0</span>';

document.body.appendChild(quizContainer);

let score = 0;
function createQuiz(arr) {
  arr.forEach((obj) => {
    const questionContainer = document.createElement("div");
    questionContainer.setAttribute("class", "question-container");
    const question = document.createElement("p");
    question.classList.add("question");
    question.textContent = obj.question;
    questionContainer.appendChild(question);

    obj.options.forEach((opt, i) => {
      const option = document.createElement("button");
      option.classList.add("option");
      option.textContent = opt;

      option.addEventListener("click", function () {
        questionContainer
          .querySelectorAll(".option")
          .forEach((btn) => (btn.disabled = true));
        if (i + 1 === obj.correctAnswer) {
          option.style.backgroundColor = "green";
          option.style.color = "white";
          score += obj.points;
          document.getElementById("score").textContent = score;
        } else {
          option.style.backgroundColor = "red";
          option.style.color = "white";
        }
      });

      questionContainer.appendChild(option);
    });
    quizContainer.appendChild(questionContainer);
    quizContainer.appendChild(scoreContainer);
  });
}

createQuiz(quiz);

// quiz.forEach(function (el) {
//   const qstDiv = document.createElement("div");
//   const question = document.createElement("p");
//   question.innerText = el.question;
//   document.body.appendChild(qstDiv);
//   qstDiv.appendChild(question);

//   el.options.forEach(function (n) {
//     const answer = document.createElement("button");
//     answer.innerText = n;
//     if (el.options.indexOf(n) + 1 === el.correctAnswer)
//       answer.setAttribute("class", "correct");
//     // if (answer.classList == "correct") console.log(answer);
//     qstDiv.appendChild(answer);
//   });
// });
