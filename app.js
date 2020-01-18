import isYes from './is-yes.js';

const quizButton = document.getElementById('quiz-button');
quizButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to start the quiz?')) {
        // Ask Questions
        let correctAnswers = 0;
        let totalQuestions = 3;
        let quizName = prompt('First, What is your name?');
        let answerOne = prompt(`Hello ${quizName}! Question #1: Is the Count's favorite number 42? (Hint: The answer is no.)`);
        let answerTwo = prompt(`Okay, ${quizName}. Question #2: Does the Count have a cat? (Hint: The answer is yes.)`);
        let answerThree = prompt(`Finally, ${quizName}, question #3: Does the Count kinda piss people off? (Hint: The answer is yes.)`);
         
        // Test Answers
        if (!isYes(answerOne)) correctAnswers++;
        if (isYes(answerTwo)) correctAnswers++;
        if (isYes(answerThree)) correctAnswers++;

        // Display Answer section
        switch (correctAnswers) {
            case 0:
                document.getElementById('quiz-results-headline').innerText = 'So sorry!';
                document.getElementById('quiz-results-body').innerText = `You didn't get any answers right! That's ${Math.round((correctAnswers / totalQuestions) * 100)} percent!`;
                document.getElementById('quiz-results-image').src = './images/count-0.png';
                break;
            case 1:
                document.getElementById('quiz-results-headline').innerText = 'Oops!';
                document.getElementById('quiz-results-body').innerText = `You only got ${correctAnswers} answer right! That's just ${Math.round((correctAnswers / totalQuestions) * 100)} percent!`;
                document.getElementById('quiz-results-image').src = './images/count-1.jpeg';
                break;
            case 2:
                document.getElementById('quiz-results-headline').innerText = 'Good!';
                document.getElementById('quiz-results-body').innerText = `You got ${correctAnswers} answers right! That's ${Math.round((correctAnswers / totalQuestions) * 100)} percent! Bwah ha!`;
                document.getElementById('quiz-results-image').src = './images/count-2.jpeg';
                break;
            case 3:
                document.getElementById('quiz-results-headline').innerText = 'Excellent!';
                document.getElementById('quiz-results-body').innerText = `You got all ${correctAnswers} answers right! That's ${Math.round((correctAnswers / totalQuestions) * 100)} percent! Bwah ha haa!`;
                document.getElementById('quiz-results-image').src = './images/count-3.jpeg';
                break;
            default:
                case 3:
                    document.getElementById('quiz-results-headline').innerText = 'What happened?';
                    document.getElementById('quiz-results-body').innerText = `I'm confused!`;
                    document.getElementById('quiz-results-image').src = './images/count-confused.gif';
                    break;    
            }
        document.getElementById('quiz-results').style.display = 'inherit';
    }
});