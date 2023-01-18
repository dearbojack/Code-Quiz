

// countdown timer function

// after user click start buttion start the countdown
var time = 90;

document.getElementById('start').addEventListener("click", function(){
    let timer = setInterval(function (){
        time--;

        // * TODO penalty after wrong answer

        document.getElementById('time').innerHTML = time;
        
        if (time === 0) {
            clearInterval(timer);

            // * TODO display end screen
        }
    }, 1000);
});



// randomize the arr and loop through it

function randomizer(arr) {
    var arr = [];

    // randomize the order of the arr
    arr.sort(() => Math.random() - 0.5);

    // loop through it
    // display questions
}

// display the questions in quiz format

function questionDisplay () {
    for (let i = 0; i < quizQuestions.length; i++) {
        const question = quizQuestions[i].question;
        const choices = quizQuestions[i].choices;
        const correctAnswer = quizQuestions[i].correctAnswer;

        console.log(question);
        console.log(choices);
        console.log(correctAnswer);
        
    }
}

questionDisplay();