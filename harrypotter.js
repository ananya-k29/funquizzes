function check(){
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var q9 = document.quiz.q9.value;
    var q10 = document.quiz.q10.value;

    var correct = 0;

    if (q1=="parselmouth"){
        correct++;
    }
    if (q2=="quibbler"){
        correct++;
    }
    if (q3=="merope"){
        correct++;
    }
    if (q4=="greylady"){
        correct++;
    }
    if (q5=="phoenix"){
        correct++;
    }
    if (q6=="wheezes"){
        correct++;
    }
    if (q7=="toad"){
        correct++;
    }
    if (q8=="gillyweed"){
        correct++;
    }
    if (q9=="beater"){
        correct++;
    }
    if (q10=="thestral"){
        correct++;
    }

    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("getscore").innerHTML = "Your score is: " + (correct*10) + "%";

    if (correct<4){
        document.getElementById("message").innerHTML = "You need to read the books again!";
    }
    if (correct>3 && correct<7){
        document.getElementById("message").innerHTML = "Good effort!";
    }
    if (correct>6){
        document.getElementById("message").innerHTML = "Great job! You're a true Harry Potter fan!";
    }
   
}