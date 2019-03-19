$(document).ready(function () {




    $("#startGame").append("<p> You will have 25 seconds to complete the Trivia Game. Do your Best!</p>");
    $("#startGame").append("<h1><button id='startButton'> Click me to start the Game </button></h1>");

    $("#parentContainer").hide();

    var timer = function (){
        var timeRemaining = 25;
        var displayTime = setInterval(function (){
            $("#timerNum").text(timeRemaining);
            timeRemaining--;
            if (timeRemaining === 0) {
                console.log("Time Over!");
                clearInterval(displayTime);
            }
        }, 1000);

    };

    $('#startButton').on("click", function() {
        $("#startGame").hide();
        $("#parentContainer").show();
            timer();
       
        

    });









});