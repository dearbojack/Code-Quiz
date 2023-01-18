

// countdown timer function

// after user click start buttion start the countdown
var time = 90;

// document.getElementById('start').addEventListener("click", function(){
//     let timer = setInterval(function (){
//         time--;

//         // * TODO penalty after wrong answer

//         document.getElementById('time').innerHTML = time;
        
//         if (time === 0) {
//             clearInterval(timer);

//             // * TODO display end screen
//         }
//     }, 1000);
// });

// display the questions in quiz format

var index = 0;

// random the question order
quizQuestions.sort(() => Math.random() - 0.5);

document.getElementById('start').addEventListener("click", function(){
    
    document.getElementById("start-screen").className ="hide";
    document.getElementById("questions").className ="";
    document.getElementById("question-title").innerHTML = quizQuestions[index].question;

    
    let list = document.createElement('ul');
    
    for (let i = 0; i < quizQuestions[index].choices.length; i++) {

        let listItem = document.createElement('li');
        listItem.innerHTML = quizQuestions[index].choices[i];
        list.appendChild(listItem);
        document.getElementById("choices").appendChild(list);

        // check if the answer is correct
        listItem.addEventListener("click", function() {
            if(quizQuestions[index].choices[i] === quizQuestions[index].correctAnswer) {
                console.log("ohye");
            } else {
                console.log("ohno");
            };   
        });

    };




    index ++;
});
