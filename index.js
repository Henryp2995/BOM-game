// index.js

// Question 1
let rightAButton = document.querySelector(".rightA");

function Answer1() {
    let content = rightAButton.innerHTML;
    let numberContent = parseInt(content);

    if (numberContent === 52) {
        alert("You are correct!");
    } else {
        alert("Try again. This is not a multiple of 5.");
    }
}

// Question 2
document.querySelectorAll(".second button").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer2(button);
    });
});

function checkAnswer2(clickedButton) {
    if (clickedButton.classList.contains("Right")) {
        alert("Correct! Basketball is my favorite sport.");
    } else {
        alert("Incorrect. Hint: MJ is the goat.");
    }
}

// Question 3
document.querySelectorAll(".third button").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer3(button);
    });
});

function checkAnswer3(clickedButton) {
    if (clickedButton.classList.contains("Win")) {
        alert("Correct! Summer is my favorite season.");
    } else {
        alert("Incorrect. Hint: Think about the warmest time of the year.");
    }
}

document.querySelectorAll(".first button").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer1(button);
    });
});

function checkAnswer1(clickedButton) {
    let correctAnswerButton = document.querySelector(".rightA");
    
    if (clickedButton === correctAnswerButton) {
        alert("Correct! This is not a multiple of 5.");
    } else {
        alert("Incorrect. Try again!");
    }
}







