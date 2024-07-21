//* questions, answers and score variables

const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const score = document.getElementById('score');

let questionNum = 0;
let scoreNum = 0;

//* Display introduction section only first then click Start Quiz and introduction section is hidden and question section displays

document.getElementById('startQuiz').addEventListener('click', function() {
    const introSection = document.getElementById('introduction');
    const questionSection = document.getElementById('quizSection');

    introSection.classList.add('hidden');
    questionSection.classList.remove('hidden');

});

//* List of questions

const questions = [
    {
        'question': 'Which year was St. Patricks day was first celebrated?',
        'answers': [1631, 1641, 1651, 1661],
        'correct': 0,
        'fact': 'St. Patrick wasn\'t actually Irish and green was not the colour he actually wore'
    },
    {
        'question': 'Which year was Guiness established?',
        'answers': [1559, 1659, 1759, 1859],
        'correct': 2,
        'fact': 'A perfect pint of Guinness is poured with the glass held at 45º angle and should rest 119 seconds before you drink it.'
    },
    {
        'question': 'Which year did Dublin Zoo first open?',
        'answers': [1781, 1831, 1881, 1931],
        'correct': 1,
        'fact': 'Dublin Zoo has over 400 animals of different species from all across the world.'
    },
    {
        'question': 'Which year was William Butler Yeats born?',
        'answers': [1835, 1845, 1855, 1865],
        'correct': 3,
        'fact': 'In 1923, William Butler Yeats was awarded the Nobel Prize in Literature.'
    },
    {
        'question': 'Which year did Ireland first win the Eurovision?',
        'answers': [1965, 1970, 1975, 1980],
        'correct': 1,
        'fact': 'Dana gave Ireland its first victory in 1970 with All Kinds of Everything.'
    },
    {
        'question': 'Which year was Glenroe first broadcast?',
        'answers': [1980, 1931, 1982, 1983],
        'correct': 3,
        'fact': 'Glenroe ran for 18 seasons before concluding in 2001.'
    },
        {
        'question': 'Which year did The Den first appear on tv?',
        'answers': [1984, 1986, 1988, 1990],
        'correct': 1,
        'fact': 'The show that introduced the nation to characters such as Zig and Zag, Podge and Rodge, and Dustin the Turkey.'
    },
    {
        'question': 'Which year did Jedward enter The X Factor?',
        'answers': [2008, 2009, 2010, 2011],
        'correct': 1,
        'fact': 'Jedward were both 17 years old when they came 6th place on UK’s 2009 X-Factor.'
    },
    {
        'question': 'Which year was Roy Keane sent home from the World Cup in Saipan?',
        'answers': [1994, 1998, 2002, 2004],
        'correct': 2,
        'fact': 'The Irish captain was sent home from the World Cup after a heated argument with coach Mick McCarthy over the team\'s preparation and facilities.'
    },
    {
        'question': 'Which year did Ireland win their first Six Nations?',
        'answers': [2006, 2007, 2008, 2009],
        'correct': 3,
        'fact': 'It took Ireland until 2009 to win the Six Nations but they have since won six in total.'
    },
];

const quizLength = questions.length;

//* Load questions and answers

function loadQuestion(questionNum) {
    question.innerText = questions[questionNum].question;
    
}

function loadAnswers(questionNum) {
    answer1.innerText = questions[questionNum].answers[0];
    answer2.innerText = questions[questionNum].answers[1];
    answer3.innerText = questions[questionNum].answers[2];
    answer4.innerText = questions[questionNum].answers[3];

}


//* Check the answer and style the buttons based on if the answer is correct or not 
function checkAnswer(answerNum) {
    console.log('answer number chosen:', answerNum);
    const buttons = document.querySelectorAll('#answers button');
    let correctAns = questions[questionNum].correct;

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

function endgame() {
    playAgain.style.visibility = "visible";
}

function endgameOption (chosen) {
    if (chosen === 0 ) {
        window.location.reload()
    } else {
        quiz.innerHTML = "<h1>Thanks for playing!</h1>"
    }
}

function startQuiz() {
    playAgain.style.visibility = "hidden";
    loadQuestion(questionNum);
    loadAnswers(questionNum)
}

startQuiz();