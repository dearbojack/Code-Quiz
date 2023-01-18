

function printScores() {

    var highscores = document.getElementById('highscores');

    var scoreRecords = document.createElement('li');

    var keys = Object.keys(localStorage);

    // sort the keys
    keys.sort(function (a, b) {
        return localStorage[b] - localStorage[a];
    });

    // print and show
    for (var i = 0; i < keys.length; i++) {
        scoreRecords.innerHTML = keys[i] + ' - ' + localStorage[keys[i]];
        highscores.appendChild(scoreRecords);
    };
};

printScores();


// clear localStorage when click the buttion clear
var clearBtn = document.getElementById('clear')

clearBtn.addEventListener('click', function() {
    localStorage.clear();
});