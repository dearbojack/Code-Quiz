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

// random the question order
quizQuestions.sort(() => Math.random() - 0.5);

// func to display questions

function qDisplay(index) {
    document.getElementById("start-screen").className ="hide";
    document.getElementById("questions").className ="";
    document.getElementById("question-title").innerHTML = quizQuestions[index].question;

    let list = document.createElement('ul');
    
    for (let i = 0; i < quizQuestions[index].choices.length; i++) {
        let listItem = document.createElement('button');
        listItem.innerHTML = quizQuestions[index].choices[i];
        list.appendChild(listItem);
        document.getElementById("choices").appendChild(list);
    };
}

document.getElementById('start').addEventListener("click", function(){

    countDown(time);
    qDisplay(index);
    index++;
    // document.getElementById("start-screen").className ="hide";
    // document.getElementById("questions").className ="";
    // document.getElementById("question-title").innerHTML = quizQuestions[index].question;

    
    // let list = document.createElement('ul');
    
    // for (let i = 0; i < quizQuestions[index].choices.length; i++) {

    //     let listItem = document.createElement('button');
    //     listItem.innerHTML = quizQuestions[index].choices[i];
    //     list.appendChild(listItem);
    //     document.getElementById("choices").appendChild(list);

    //     // check if the answer is correct
    //     listItem.addEventListener("click", function() {
    //         if(quizQuestions[index].choices[i] === quizQuestions[index].correctAnswer) {
    //             userScore++;
    //             console.log("Your score is " + userScore);
    //         } else {

    //             // if wrong, time - 10s
    //             time = time - 10;
    //             console.log(time);
    //         };   
        // });

    // };




    // index ++;
});
