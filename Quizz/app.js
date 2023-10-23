var qusetions = [
{
	question: "What is the difference between XML and HTML?",
	option1: "HTML is used for exchanging data, XML is not.",
	option2: "XML is used for exchanging data, HTML is not",
	option3: "HTML can have user defined tags, XML cannot",
	option4: "Hyper text markup language",
	answer: "Hyper text markup language",
},
{
	question: "Opening Tag of HTML Tag is called as...",
	option1: "Closed Tag",
	option2: "Starting Tag",
	option3: "Forward Tag",
	option4: "Enging Tag",
	answer: "Starting Tag",
},
{
	question: "HTML program is saved using _________ extension?",
	option1: ".htl",
	option2: ".hml",
	option3: ".html",
	option4: ".htlm",
	answer: ".html",
},

]

var index = 0;
var score = 0;

function renderQuestion(){
	var question = document.getElementById("question");
	var options = document.getElementsByName("option");
	for (var i = 0; i < options.length; i++) {
		if (options[i].checked) {
			if (options[i].value === qusetions[index-1].answer) {
				score++
			}
		}
	}

	if (!qusetions[index]) {
		console.log("Result" + score);
		return;
	}



	question.innerHTML = `
	<p>${qusetions[index].question}</p>
	<div><label><input class="radio" type="radio" name="option" value="${qusetions[index].option1}">${qusetions[index].option1}</label></div>
	<div><label><input class="radio" type="radio" name="option" value="${qusetions[index].option2}">${qusetions[index].option2}</label></div>
	<div><label><input class="radio" type="radio" name="option" value="${qusetions[index].option3}">${qusetions[index].option3}</label></div>
	<div><label><input class="radio" type="radio" name="option" value="${qusetions[index].option4}">${qusetions[index].option4}</label></div>
	`
	index++;
}

renderQuestion()



// Swal.fire({
// 			position: 'top-center',
// 			icon: 'success',
// 			title: 'Result ${score}',
// 			showConfirmButton: false,
// 			timer: 1500
// })