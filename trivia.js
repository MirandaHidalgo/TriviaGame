var panel = $('#gamecontainer')

$(document).on("click", "#start", function (event ) {
    game.start()
})

$(document).on("click", "#done", function (event ) {
    game.done()
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


var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);

        if (game.counter === 0) {
            alert("TIME'S UP");
            game.done();

        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            panel.append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].choices.length; j++) {
                panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
            }
        }
        panel.append("<button id='done'>DONE</button>");

    },

    done: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        this.results();
    },


    results: function () {
        clearInterval(timer);

        $("#subcontainer h2").remove();
        panel.html("<h2>You're Done!</h2>");
        panel.append("<h3>You got this many wrong: " + this.correct + "</h3>");
        panel.append("<h3>You got this many right: " + this.incorrect + "</h3>");
        panel.append("<h3>You didn't answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

    }

};