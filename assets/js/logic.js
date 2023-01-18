// user score
var userScore = 0;

// countdown time
var time = 90;

// func to count down the time
function countDown() {
    let timer = setInterval(function() {
        time --;
        document.getElementById("time").innerHTML = time;
        if(time <= 0) {
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
const list = document.createElement('ul');
list.setAttribute('id', 'list');

// random the question order
quizQuestions.sort(() => Math.random() - 0.5);

// func to display questions

function qDisplay(index) {
    document.getElementById("question-title").innerHTML = quizQuestions[index].question;

    for (let i = 0; i < quizQuestions[index].choices.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = quizQuestions[index].choices[i];
        document.getElementById("choices").appendChild(listItem); 

        listItem.addEventListener('click', function(e) {
            if (e.target.innerText === quizQuestions[index].correctAnswer) {
                console.log("ohye");
                console.log(e.target.innerText);
                console.log(index);
                nextQestion(index);
            } else {
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

function nextQestion(index) {
    index++ ;
    document.getElementById("choices").innerHTML = '';
    qDisplay(index);
}

// listen to click on the start button
document.getElementById('start').addEventListener("click", function(){
    // start the timer
    countDown(time);
    qDisplay(index);

    // unhide the question & hide the start-screen
    document.getElementById("start-screen").className ="hide";
    document.getElementById("questions").className ="";
});




