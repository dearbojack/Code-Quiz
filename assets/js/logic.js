// user score
var userScore = 0;

// sound files
var correctAudio = document.createElement("audio");
correctAudio.setAttribute('src', 'assets/sfx/correct.wav');

var wrongAudio = document.createElement("audio")
wrongAudio.setAttribute('src', 'assets/sfx/incorrect.wav');

// countdown time
var time = 90;

// func to count down the time
function countDown() {
    let timer = setInterval(function() {
        time --;
        document.getElementById("time").innerHTML = time;
        if(time <= 0) {
            // if time runs out, show end screen
            time = 0;
            showEndScreen();
            clearInterval(timer);
            console.log("Time Up!");
        } else {
            // console.log(time);
            return time;
        }
    }, 1000);
};

// display the questions in quiz format

var index = 0;

// create an ul to hold the choices
const list = document.createElement('ol');
list.setAttribute('id', 'list');

// random the question order
quizQuestions.sort(() => Math.random() - 0.5);

// func to display questions

function qDisplay(index) {
    document.getElementById("question-title").innerHTML = quizQuestions[index].question;

    for (let i = 0; i < quizQuestions[index].choices.length; i++) {
        // let buttons = document.createElement('button');
        let listItem = document.createElement('li');
        listItem.innerHTML = quizQuestions[index].choices[i];
        document.getElementById("choices").appendChild(listItem); 


        listItem.addEventListener('click', function(e) {
            if (e.target.innerText === quizQuestions[index].correctAnswer) {
                // if answer is correct, score + 1
                userScore++ ;
                // play audio
                correctAudio.play();
                showFeedback('right');

                console.log("ohye");
                console.log(e.target.innerText);
                console.log(index);
                nextQestion(index);

            } else {
                // if answer is wrong, countdown time -10s
                if(time >= 10) {
                    time = time - 10;
                } else {
                    time = 0
                };
                // play audio
                wrongAudio.play();
                showFeedback('wrong');

                console.log("ohno");
                console.log(e.target.innerText);
                console.log(index);
                nextQestion(index);
            };
        });
        
    };

    // 
    document.getElementById("choices").appendChild(list);
};

// show feedback after user answer
var feedback = document.getElementById('feedback');

function showFeedback(str) {
    var msg = document.createElement('p');

    if (str === 'right') {
        msg.innerText = 'Correct!';
    } else if (str === 'wrong') {
        msg.innerText = 'Wrong!';
    } else {
        return;
    };

    feedback.className = 'feedback';
    feedback.appendChild(msg);
    
};

function nextQestion(index) {
    // ! need to fix, eithor when questions or time run out
    if (index < quizQuestions.length - 1) {
        // move on to next index
        index++ ;
        // clear previous choices
        document.getElementById("choices").innerHTML = '';
        // go to next q if there is any
        qDisplay(index);
    } else {
        // clear the timer
        time = 1;
        // show the result
        showEndScreen();
        console.log('ending');
    };

    // clear feedback here? after 1s
    setTimeout(function(){ feedback.innerHTML = ""; }, 1000);
};

function showEndScreen() {

    // hide questions & answers
    document.getElementById("questions").className = "hide";
    document.getElementById("choices").className = "hide";

    // show the end screen and update the score
    document.getElementById("end-screen").className = "";
    document.getElementById("final-score").innerHTML = userScore;
};

// listen to click on the start button
document.getElementById('start').addEventListener("click", function(){
    // start the timer
    countDown(time);
    qDisplay(index);

    // unhide the question & hide the start-screen
    document.getElementById("start-screen").className ="hide";
    document.getElementById("questions").className ="";
});

// when click the submit button, save the name and score
var submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', function() {
    var initials = document.getElementById("initials").value;
    localStorage.setItem(initials, userScore);
    window.location.href = 'highscores.html';
});


