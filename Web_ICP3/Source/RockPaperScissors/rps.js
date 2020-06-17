$(document).ready(function () {
    $("#rock").click(function () {
        compare("rock");
    });
    $("#paper").click(function () {
        compare("paper");
    });
    $("#scissors").click(function () {
        compare("scissors");
    });
});



function compare(choice1) {
    var otherChoice = Math.random();
    if (otherChoice < 0.34) {
        choice2 = "rock";
    } else if (otherChoice <= 0.67) {
        choice2 = "paper";
    } else {
        choice2 = "scissors";
    }

    if (choice1 === choice2) {

        alert( "you tied ! " + " " + " Try Again");
    }

    else if (choice1 === "rock") {

        if (choice2 === "scissors") {
            alert( "rock wins"+ "!!! " +"Well done You Won!");
        }
        else {
            alert("paper wins"  + "!!! " + "Others won!") ;
        }
    }

    else if (choice1 === "paper") {

        if (choice2 === "rock") {
            alert("paper wins"+ "!!! " + "Well done You Won!") ;
        }
        else {
            alert("scissors wins"+ "!!! " + "Others won.") ;
        }

    }

    else if (choice1 === "scissors") {

        if (choice2 === "rock") {
            alert("rock wins"  + " " + "Others won.") ;
        }
        else {
            alert("scissors win"  + " " + "Well done You win!") ;
        }
    }


}



