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
	var qc = 0;

	if (q1 == "we're cruisin' for a bruisin"){
		qc++;
	}
	if (q2 == "the sun will shine"){
		qc++;
	}
	if (q3 == "don't let go"){
		qc++;
	}
	if (q4 == "Louise, pull me off my knees"){
		qc++;
	}
	if (q5 == "the time of my life"){
		qc++;
	}
	if (q6 == "anything your heart desires will come to you"){
		qc++;
	}
	if (q7 == "run, up where they stay all day in the sun"){
		qc++;
	}
	if (q8 == "dazzling place I never knew"){
		qc++;
	}
	if (q9 == "People down here think I'm crazy"){
		qc++;
	}
	if (q10 == "and take one step"){
		qc++;
	}

	alert("The amazing and incredibly created movies and musicals (that are super awesome) involved in this cool quiz include: Teen Beach Movie, High School Musical 2, Grease, Footloose, Dirty Dancing, Cinderella, The Little Mermaid, Aladdin, Princess and the Frog, and High School Musical 3. If you have not watched these shame on you and go watch them right now.");
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + qc + "/10 correct.";

	if (qc > 5){
		document.getElementById("response").innerHTML = "Awesome job!";
	} else{
		document.getElementById("response").innerHTML = "Nice attempt. Now go watch those movies!";
	}


}