
var questions = [{
    question: "12 x 2 = ?",
    choices: ["12", "18", "6", "24"],
    correctAnswer: 3
}, {
    question: "12 x 3 = ?",
    choices: ["18", "24", "36", "26"],
    correctAnswer: 2
}, {
    question: "2 x 4 = ?",
    choices: ["8", "6", "18","4"],
    correctAnswer: 0
}, {
    question: "2 x 5 = ?",
    choices: ["0", "20", "10", "5"],
    correctAnswer: 2
}, {
    question: "9 x 12 = ?",
    choices: ["54", "108", "72", "36"],
    correctAnswer: 1
}, {
    question: "9 x 3 = ?",
    choices: ["27", "9", "18", "36"],
    correctAnswer: 0	
	
}, {
    question: "7 x 3 = ?",
    choices: ["7", "14", "24", "21"],
    correctAnswer: 3	
}, {
    question: "6 x 11 = ?",
    choices: ["22", "66", "33", "11"],
    correctAnswer: 1
}, {
    question: "7 x 4 = ?",
    choices: ["14", "28", "7", "21"],
    correctAnswer: 1

}, {
    question: "6 x 12 = ?",
    choices: ["36", "72", "54", "24"],
    correctAnswer: 1

}, {
    question: "6 x 9 = ?",
    choices: ["54", "27", "36", "18"],
    correctAnswer: 0

	}, {
    question: "9 x 5 = ?",
    choices: ["45", "25", "9", "15"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
             
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { 
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});


function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

   
    $(questionClass).text(question);

    
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}