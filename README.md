# Guess The Year Quiz

Guess The Year is a quiz designed to test your knowledge of key dates and milestones that have shaped Irish pop culture over the years. The quiz is comprised of 10 questions, each question has four possible answers. Once you have selected your answer you will be provided with a fun fact related to the question.

You can play the quiz here: [Guess The Year](https://catgriffin85.github.io/project-portfolio-2-quiz/)

![Responsive Mockup](/assets/images/readme/responsive-image.png)

## Features

### Introduction Page

The introdution page provides a brief intro about the quiz and shows a map of Ireland. Underneath the map is a guide on how to play and how to start the quiz. This opening page is designed to be lighthearted and fun and encourages the user to enjoy the quiz without worrying about the score. Above the Start Quiz button is an Irish phrase that translates to: Good Luck

![Introduction Page](/assets/images/readme/introduction-screen.png)

### Question Page

The quiz is made up of 10 questions. Each question offers four possible answers for the user to choose from. If the correct answer is selected the button will turn green. However, if the incorrect answer is selected the button will turn red and the correct answer will turn green. Once an answer, right or wrong, is selected a fun fact relating to the question will be displayed. The score is tracked below the fact and shows correct answers out of ten. A timer has been set so that after six seconds the next question is displayed. Once an answer has been clicked the buttons become unresponsive until the next question is displayed.

Correct answer selected:

![Correct answer selected](/assets/images/readme/correct-answer.png)

Incorrect answer selected:

![Incorrect answer selected](/assets/images/readme/incorrect-answer.png)


### Play Again Page

Once the user has answered all 10 questions their score will be displayed. They will be asked if they would like to play again and presented with two options: Yes, please! and No, I'm done.

![Play Again page](/assets/images/readme/play-again-screen.png)

If the user selects Yes, please! they will be brought back to the introduction page where they can start the quiz again. 
If the user selects No, I'm done they will be shown a new screen that thanks them from playing.

![Thanks for playing screen](/assets/images/readme/screenshot-endgame.png)

## Testing

* HTML
    No errors were returned when passing through the official [W3C HTML Validator](https://validator.w3.org/)

    ![W3C HTML Validator results](/assets/images/readme/w3c-html-results.png)

* CSS
    No errors were returned when passing through the official [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

    ![W3C CSS Validator results](/assets/images/readme/w3c-css-results.png)

* JavaScript
    Only one unused variable was found when passing through the office [JSHint Validator](https://jshint.com/)
    This variable is linked to the HTML page.

    ![JSHint Validator results](/assets/images/readme/jshint-results.png)

    Metrics:

    ![JSHint Validator metrics](/assets/images/readme/jshint-metrics.png)

* Lighthouse

    ![Lighthouse results](/assets/images/readme/lighthouse-results.png)

* Bugs

    While creating my quiz I encountered two main issues:

    1. During testing of my quiz I identified that even if an answer was selected it did not stop the user selecting other answers. This resulted in the buttons changing incorrect colours and interupted the flow of the quiz. With assistance from my mentor, it was identified that the buttons needed to be switched off after an answer was selected and not switched on again until a new question was loaded. I updated my code to includee addEventListener and a removeEventListener. This resolved the issue.

    2. On the last question once an answer was selected the quiz jumped straight to the Play Again screen. It did not show if the answer selected was correct and did not show the fact. During a review with my mentor, I could see that this was due to the end game check running before the timer. To fix this issue I rearranged my code so the timer runs before the check to end the game. 

No unfixed bugs.

## Deployment

* Git Commit

    * This project was created in Gitpod and pushed to GitHub to the respository: https://catgriffin85.github.io/project-portfolio-2-quiz/
    * git add . and git commit were used throughout the project to push the code to my repository
    * I used descriptive and meaningful messages when using git commit and commited often

* Deployment to GitHub

    * The steps used to deploy were as follows: 

        * In the GitHub repository, navigate to the Settings tab.
        * From the source section drop-down, select the Master Branch.
        * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon disply to indicate the successful deployment.

## Credits

* A big thank you to my Mentor who really took his time to go through the project requirements with me and for providing me with helpful feedback and guidance.

* Content

    * The favicon used in the title of the page and it's code was taken from [Favicon](https://favicon.io/).

* Images
    * The two images used were free images taken from [Pexels](https://www.pexels.com/).
