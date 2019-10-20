var mainContainer = $('quiz')

$(document).on("click", "#start", function (event ) {
    Game.start()
})

$(document).on("click", "#Over", function (event ) {
    Game.done()
})

var questions = [{
    question: "First time, what is the correct answer?",
    choices: ["This is not", "This is not the correct one either","Correct", "This isn't"],
    rightAnswer: "Correct"
}, {
    question: "Second time, what is the correct answer?",
    choices: ["This is not", "This is!!", "Definetely not", "Of course... NOT"],
    rightAnswer: "This is!!"
}, {
    question: "Third question, what is the correct answer?",
    choices: ["That was easy! This is it!", "This is not", "This answer is wrong", "This one is wrong too!"],
    rightAnswer: "That was easy! This is it!"
}];

var quiz = {
    correct: 0,
    incorrect: 0,
    counter: 30,

    countdown: function (){
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 00) {
            alert("TIME IS OVER!");
            game.done()
        }
    }
},
