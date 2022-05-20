const quizs = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "My Text Markup Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Carton Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of PHP?",
        a: "Personal Home Page",
        b: "Hypertext Preprocessor",
        c: "Text Preprocessor",
        d: "Hypertext Processor",
        ans: "ans2"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JustScript",
        c: "JavaSuper",
        d: "Jordern Shoes",
        ans: "ans1"
    },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
console.log(showScore);
const submit = document.querySelector("#submit");
let questionCount = 0;
let score = 0;
const loadQuestions = () => {
    let questionList = quizs[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestions();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
        }
    });
    return answer;
}
const deleteAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    });
}
submit.addEventListener("click", () => {
    let checkAnswer = getCheckAnswer();
    if (checkAnswer == quizs[questionCount].ans) {
        score++;
        console.log(score);
    }

    questionCount++;
    deleteAll();
    if (questionCount < quizs.length) {
        loadQuestions();
    } else {
        showScore.innerHTML = `
            <h3>Your score is ${score}/${quizs.length} ✌️</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove("score_area");
    }
});