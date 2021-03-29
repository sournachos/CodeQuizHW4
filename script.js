// The user's starting score/points
var points = 100;

// Defining variable t and count to not get errors when running the quiz
var t;
var count;

// Setting the time for the countdown and displaying it to the user
var timer = document.querySelector('.count');
time = 60;
timer.textContent = (time);

// Variable made to clear out the questions in case the user runs out of time
// or make too many mistakes and loses
var gamescreen = document.querySelector('.gamescreen')

// Variable made to directly target the intro page
var intro = document.querySelector('.intro')

// Assigning each question and the result page a variable 
// while also not displaying it until it is needed
var q1 = document.querySelector('.q1')
q1.style.display = 'none'
var q2 = document.querySelector('.q2')
q2.style.display = 'none'
var q3 = document.querySelector('.q3')
q3.style.display = 'none'
var q4 = document.querySelector('.q4')
q4.style.display = 'none'
var q5 = document.querySelector('.q5')
q5.style.display = 'none'
var resultsPage = document.querySelector('.resultsPage')
resultsPage.style.display = 'none'
var hiScore = document.querySelector('.hiScore')
hiScore.style.display = 'none'

// variable to display the points in the results page
var finalPoints = document.querySelector('.finalPoints')

// variable for 'Start Quiz' button on the intro page
var klik = document.querySelector('.button1');

//  One variable for the set of answers in each question page 
var qAns1 = document.querySelector('.qAns1');
var qAns2 = document.querySelector('.qAns2');
var qAns3 = document.querySelector('.qAns3');
var qAns4 = document.querySelector('.qAns4');
var qAns5 = document.querySelector('.qAns5');

// Submit button variable on the results page for the user to submit 
// their initials to the highscores board
var submitButton = document.querySelector('.submitButton')

// Variable for the list of high scores
var scoreList = document.querySelector('.scoreList');

// An array to store all the user's initials that take the quiz
var highscores = [];

// Variable for the user initials input
var userInitials = document.querySelector('#userInitials')

// Variable to go back to the intro page from the highscores page
var goBack = document.querySelector('.goBack');

// Function runs when user clicks on View High Scores in the intro page
function viewScore() {
    intro.style.display = 'none'
    hiScore.style.display = 'block'
}

// Button to start the quiz, when pressed the timer starts,
// the intro page is removed and the first question introduced
klik.addEventListener('click', function () {
    intro.style.display = 'none'
    // document.open()         <--I tried that but it cleared out the whole page;useful though.
    startTimer();
    q1.style.display = 'block';
});

// Starts the timer, stops it if you answer all the questions before it gets to zero,
// and it also stops the timer if you run out of time
function startTimer() {
    if (time > 0) {
        count = setInterval(function () {
            time--;
            timer.textContent = (time);

            if (t === 1) {
                clearInterval(count);
            }

            if (time <= 0) {
                clearInterval(count);
                timer.textContent = (0);
                gamescreen.style.display = 'none'
                points = 0;
                lossByTime();
            }
        }, 1000);
    }
}

// Transition from q1 to q2, informing the user of their 'Correct' or 'Wrong' answer,
// and affecting the score and time if the answer chosen is wrong 
function correctAns1() {
    q1.style.borderBottom = '3px solid grey';
    qAns1.textContent = ('Correct');
    qAns1.style.marginTop = '4%';
    setTimeout(function () {
        q1.remove();
        q2.style.display = 'block'
    }, 1000);
}

function wrongAns1() {
    q1.style.borderBottom = '3px solid grey';
    qAns1.textContent = ('Wrong! -10 secs');
    qAns1.style.marginTop = '4%';
    time -= 10;
    points -= 20;
    setTimeout(function () {
        q1.remove();
        q2.style.display = 'block'
    }, 1000);
}

// Transition from q2 to q3, informing the user of their 'Correct' or 'Wrong' answer,
// and affecting the score and time if the answer chosen is wrong
function correctAns2() {
    q2.style.borderBottom = '3px solid grey';
    qAns2.textContent = ('Correct');
    qAns2.style.marginTop = '4%';
    setTimeout(function () {
        q2.remove();
        q3.style.display = 'block'
    }, 1000);
}

function wrongAns2() {
    q2.style.borderBottom = '3px solid grey';
    qAns2.textContent = ('Wrong! -10 secs');
    qAns2.style.marginTop = '4%';
    time -= 10;
    points -= 20;
    setTimeout(function () {
        q2.remove();
        q3.style.display = 'block'
    }, 1000);
}

// Transition from q3 to q4, informing the user of their 'Correct' or 'Wrong' answer,
// and affecting the score and time if the answer chosen is wrong
function correctAns3() {
    q3.style.borderBottom = '3px solid grey';
    qAns3.textContent = ('Correct');
    qAns3.style.marginTop = '4%';
    setTimeout(function () {
        q3.remove();
        q4.style.display = 'block'
    }, 1000);
}

function wrongAns3() {
    q3.style.borderBottom = '3px solid grey';
    qAns3.textContent = ('Wrong! -10 secs');
    qAns3.style.marginTop = '4%';
    time -= 10;
    points -= 20;
    setTimeout(function () {
        q3.remove();
        q4.style.display = 'block'
    }, 1000);
}

// Transition from q4 to q5, informing the user of their 'Correct' or 'Wrong' answer,
// and affecting the score and time if the answer chosen is wrong
function correctAns4() {
    q4.style.borderBottom = '3px solid grey';
    qAns4.textContent = ('Correct');
    qAns4.style.marginTop = '4%';
    setTimeout(function () {
        q4.remove();
        q5.style.display = 'block'
    }, 1000);
}

function wrongAns4() {
    q4.style.borderBottom = '3px solid grey';
    qAns4.textContent = ('Wrong! -10 secs');
    qAns4.style.marginTop = '4%';
    time -= 10;
    points -= 20;
    setTimeout(function () {
        q4.remove();
        q5.style.display = 'block'
    }, 1000);
}

// Transition from q5 to resultsPage, informing the user of their 'Correct' or
// 'Wrong' answer, and affecting the score and time if the answer chosen is wrong
function correctAns5() {
    q5.style.borderBottom = '3px solid grey';
    qAns5.textContent = ('Correct');
    qAns5.style.marginTop = '4%';
    setTimeout(function () {
        q5.remove();
        resultPage();
    }, 1000);
}
function wrongAns5() {
    q5.style.borderBottom = '3px solid grey';
    qAns5.textContent = ('Wrong! -10 secs');
    qAns5.style.marginTop = '4%';
    time -= 10;
    points -= 20;
    setTimeout(function () {
        q5.remove();
        resultPage();
    }, 1000);
}

// Outcome of running out of time or making too many mistakes and the timer reaches
// zero by penalization before answering every question of the quiz
function lossByTime() {
    resultsPage.style.display = 'block'
    finalPoints.textContent = ('' + points + '. \xa0\xa0\xa0' + ' So close!, you ran out of time and lost :(')
}

// Displaying the results page, the user's points and stopping the timer
function resultPage() {
    t = 1;
    resultsPage.style.display = 'block'
    finalPoints.textContent = ('' + points + '.')
    clearInterval(count)
}

// Using the submit button on the results page to store the user's
// initials and points in the local storage as well as push it in 
// highscores array to keep track of them. It then transitions to
// the page with the highscores
submitButton.addEventListener('click', function () {
    initials = userInitials.value;

    if(initials === ''){
        return;
    }

    highscores.push(initials + ' ' + points);
    userInitials.value = '';
    points = 100;
    storingScores();
    resultsPage.style.display = 'none'
    displayingScores();
})

function storingScores() {
    localStorage.setItem('highscores', JSON.stringify(highscores));
}

function displayingScores(){
    hiScore.style.display = 'block'
    localStorage.getItem('highscores',(highscores))
   scoreList.innerHTML = '';

    for (var q = 0; q < highscores.length; q++) {
        var scor = highscores[q];
    
        var li = document.createElement("li");
        li.textContent = scor;
        li.setAttribute("data-index", q);
    
        scoreList.appendChild(li);
      }
}

// Button takes user back to intro page by refreshing the browser
goBack.addEventListener('click', function () {
    document.location.reload()
})




