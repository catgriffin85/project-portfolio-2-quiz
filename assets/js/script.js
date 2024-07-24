//* Questions, answers and score variables

const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const score = document.getElementById('score');
const fact = document.getElementById('fact');
const playAgain = document.getElementById('playAgain');
const answers = document.getElementById('answers');
const quiz = document.getElementById('quiz');

let questionNum = 0;
let scoreNum = 0;

// Display introduction section only first then click Start Quiz and introduction section is hidden and question section displays
document.getElementById('startQuiz').addEventListener('click', function () {
    const introSection = document.getElementById('introduction');
    const questionSection = document.getElementById('quizSection');

    introSection.classList.add('hidden');
    questionSection.classList.remove('hidden');

});

// List of questions
const questions = [{
        'question': 'Q1. Which year was St. Patricks day was first celebrated?',
        'answers': [1631, 1641, 1651, 1661],
        'correct': 0,
        'fact': 'St. Patrick wasn\'t actually Irish and green was not the colour he actually wore.'
    },
    {
        'question': 'Q2. Which year was Guiness established?',
        'answers': [1559, 1659, 1759, 1859],
        'correct': 2,
        'fact': 'A perfect pint of Guinness is poured with the glass held at 45º angle and should rest 119 seconds before you drink it.'
    },
    {
        'question': 'Q3. Which year did Dublin Zoo first open?',
        'answers': [1781, 1831, 1881, 1931],
        'correct': 1,
        'fact': 'Dublin Zoo has over 400 animals of different species from all across the world.'
    },
    {
        'question': 'Q4. Which year was William Butler Yeats born?',
        'answers': [1835, 1845, 1855, 1865],
        'correct': 3,
        'fact': 'In 1923, William Butler Yeats was awarded the Nobel Prize in Literature.'
    },
    {
        'question': 'Q5. Which year did Ireland first win the Eurovision?',
        'answers': [1965, 1970, 1975, 1980],
        'correct': 1,
        'fact': 'Dana gave Ireland its first victory in 1970 with All Kinds of Everything.'
    },
    {
        'question': 'Q6. Which year was Glenroe first broadcast?',
        'answers': [1980, 1981, 1982, 1983],
        'correct': 3,
        'fact': 'Glenroe ran for 18 seasons before concluding in 2001.'
    },
    {
        'question': 'Q7. Which year did The Den first appear on tv?',
        'answers': [1984, 1986, 1988, 1990],
        'correct': 1,
        'fact': 'The show that introduced characters such as Zig and Zag, Podge and Rodge, and Dustin the Turkey.'
    },
    {
        'question': 'Q8. Which year did Jedward enter The X Factor?',
        'answers': [2008, 2009, 2010, 2011],
        'correct': 1,
        'fact': 'Jedward were both 17 years old when they came 6th place on UK\’s 2009 X-Factor.'
    },
    {
        'question': 'Q9. Which year was Roy Keane sent home from the World Cup in Saipan?',
        'answers': [1994, 1998, 2002, 2004],
        'correct': 2,
        'fact': 'The Irish captain was sent home after a heated argument with Mick McCarthy over the team\'s preparation and facilities.'
    },
    {
        'question': 'Q10. Which year did Ireland win their first Six Nations?',
        'answers': [2006, 2007, 2008, 2009],
        'correct': 3,
        'fact': 'It took Ireland until 2009 to win the Six Nations but they have since won six in total.'
    },
];

const quizLength = questions.length;

/**
 * Load questions
 * @param {*} questionNum 
 */ 
function loadQuestion(questionNum) {
    question.innerText = questions[questionNum].question;

}

/**
 * Load answers
 * @param {*} questionNum 
 */
function loadAnswers(questionNum) {
    answer1.innerText = questions[questionNum].answers[0];
    answer2.innerText = questions[questionNum].answers[1];
    answer3.innerText = questions[questionNum].answers[2];
    answer4.innerText = questions[questionNum].answers[3];
    setAnswerButtons(true);
}

/**
 * This function sets the answer buttons on or off
 * @param (*) isLive
 */
function setAnswerButtons(isLive) {
    if (isLive) {
        answer1.addEventListener('click', answer1Listener);
        answer2.addEventListener('click', answer2Listener);
        answer3.addEventListener('click', answer3Listener);
        answer4.addEventListener('click', answer4Listener);
    } else {
        answer1.removeEventListener('click', answer1Listener);
        answer2.removeEventListener('click', answer2Listener);
        answer3.removeEventListener('click', answer3Listener);
        answer4.removeEventListener('click', answer4Listener);
    }
}

const answer1Listener = () => checkAnswer(0);
const answer2Listener = () => checkAnswer(1);
const answer3Listener = () => checkAnswer(2);
const answer4Listener = () => checkAnswer(3);

/** 
 * Check the answer and style the buttons based on if the answer is correct or not 
 * @param {*} answerNum
 */
function checkAnswer(answerNum) {
    const buttons = document.querySelectorAll('#answers button');
    let correctAns = questions[questionNum].correct;
    setAnswerButtons(false);

    if (answerNum === correctAns) {
        buttons[answerNum].style.backgroundColor = 'green';
        fact.innerText = questions[questionNum].fact;
        scoreNum++;
        score.innerText = scoreNum;
    } else {
        buttons[answerNum].style.backgroundColor = 'red';
        buttons[correctAns].style.backgroundColor = 'green';
        fact.innerText = questions[questionNum].fact;
    }

    // Check if next question needs to be reloaded or the game should end
    questionNum++;
    if (questionNum === quizLength) {
        endgame();
    } else {
        setTimeout(() => {
            loadQuestion(questionNum);
            loadAnswers(questionNum);
            buttons[answerNum].style.backgroundColor = '';
            buttons[correctAns].style.backgroundColor = '';
            fact.innerText = '';
        }, 5000);
    }
}

/**
 * End quiz
 * @param {*} endgame
 */

function endgame() {
    playAgain.style.visibility = "visible";
    question.innerText = '';
    answers.innerText = '';
    fact.innerText = '';
}

function endgameOption(chosen) {
    if (chosen === 0) {
        window.location.reload()
    } else {
        quiz.innerHTML = "<h1>Thanks for playing, slán!</h1>"

    }
}

/**
 * Start quiz again
 * @param {*} startQuiz
 */
function startQuiz() {
    playAgain.style.visibility = "hidden";
    loadQuestion(questionNum);
    loadAnswers(questionNum)
}

startQuiz();