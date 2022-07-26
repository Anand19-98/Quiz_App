let num1=Math.floor(Math.random()*10+1);
let num2=Math.floor(Math.random()*10+1);
const firstBox=document.getElementById("first_box");
const secBox=document.getElementById("sec_box");
const answer=document.getElementById("third_box");

// shows elements  
const start_quiz=document.getElementById('start_quiz');
const shown1=document.getElementById('shown1');
const shown2=document.getElementById('shown2');
const status=document.getElementById('status');

// const start_quiz=document.getElementById('start_quiz');

// start quiz on click 	
	// function StartQuiz() {
	// 	start_quiz.style.display="none";
	// 	shown1.style.display="flex";
	// 	shown2.style.display="initial";
	// }

 // random number generator
		 function RandomNum(){
		 	
		 	console.log(num1);
		 	first_box.value=num1;
		 	sec_box.value=num1;
		 	// status.innerHTML=num1;
		 }