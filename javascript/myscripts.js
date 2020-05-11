

//let number1 = 3;
//let number2 = 7;
//let operation = "add";

//function numCalc(num1 , num2 , operation){
	
	//let answer;
	
	//if (operation == "add"){
		//answer = num1 + num2;
	//}else if(operation == "sub"){
		//answer = num1 - num2;
	//}else if(operation == "mull"){
		//answer = num1 * num2;
	//}else{
		//answer = num1 / num2;
	//}
//
//	return answer;
//}

//numCalc(number1, number2, operation);

//function processNumbers(){
	//console.log("in function processNumbers");
	//let num1Box = document.getElementById('num1');
	//let num2Box = document.getElementById('num2');
	//let operationbox = document.getElementById('operation');
	
	//let operation = operationbox.value;
	//let num1 = Number(num1Box.value);
	//let num2 = Number(num2Box.value);
	
	//let answer = numCalc(num1, num2, operation);
	//console.log("answer is: " + answer);
	//		
	//let answerDiv = document.getElementById("calcAnswer");
	//answerDiv.innerHTML = "the answer is:" + answer;	
//}

function getRating(){
	let rateBox = document.getElementById('rating');
	
	let rateBoxVal = rateBox.value;
	
	let rateAnswer =  "Thanks for your rating of " + rateBoxVal;
	console.log(rateAnswer);
	document.getElementById('rateReturn').innerHTML = "Thanks for your rating of " + rateBoxVal;
}

let clickCount = 0;

function addChar(e){
	let buttonClicked = e.target;  //get specific button clicked;
	
	if (buttonClicked.innerHTML === 'X' || buttonClicked.innerHTML === 'O'){
		alert("Cheaters never prosper, that spot has been taken already!!!!!");
		return;  //leave function, don't execute the rest of the code in this function.
	}
		
	
	clickCount++; //increment click count;
	
	//figure out if X or O;
	let xo;
	if (clickCount % 2 === 0)
		xo = 'X';
	else
		xo = 'O';
	
	buttonClicked.innerHTML = xo;  //put X or O in button;
}

let ticTacToeControl = false;

function ticTacToe(){
	if (ticTacToeControl === false){
		showTictactoe();
		ticTacToeControl = true;
	}else{ 
		document.getElementById("tictac").innerHTML = null;
		ticTacToeControl = false;
	}
}

function showTictactoe(){
	
	
	for (let tic = 1; tic <= 9; tic++){ 
		let tichead = document.getElementById('tictac').innerHTML;
		if(tic % 3 === 0){
			document.getElementById("tictac").innerHTML = tichead +
			"<button data-num='"+tic+"' onclick='addChar(event);' class='ticTacButton'>&nbsp;</button></br>";
		}else{
			document.getElementById("tictac").innerHTML = tichead +
			"<button data-num='"+tic+"' onclick='addChar(event);' class='ticTacButton'>&nbsp;</button>";
		}
	}
}

function madlibReveal(){
	let madlibPanel = document.getElementById('madlibPanel');

	var comp = madlibPanel.currentStyle || getComputedStyle(madlibPanel, null);
	
	if (comp.display === "none") {
		madlibPanel.style.display = "block";
	} else 
		madlibPanel.style.display = "none";
	
}


function madlibs(){
	let isValid = userValidationMadlibs();
	
	if (isValid === false)
		return;		
	
	let pronoun1 = document.getElementById('pronoun1').value;
	let adjective1 = document.getElementById('adjective1').value;
	let noun1 = document.getElementById('noun1').value;
	let verb1 = document.getElementById('verb1').value;
	let noun2 = document.getElementById('noun2').value;
	let verb2 = document.getElementById('verb2').value;
	let noun3 = document.getElementById('noun3').value;
	let bodypart = document.getElementById('bodypart').value;
	let verb3 = document.getElementById('verb3').value;
	let verb4 = document.getElementById('verb4').value;
	let noun4 = document.getElementById('noun4').value;
	let verb5 = document.getElementById('verb5').value;
	document.getElementById('madiv').innerHTML = pronoun1 + " had a " + noun1 + " store" +
															" but today he was feeling very " + adjective1 +
															" so he " + verb1 + " to the " + noun2 + ". " +
															"At the " + noun2 + " he decided to " + verb2 +
															" he " + verb2 + "ed so much that his " + noun3 +
															" told him off! then his " + noun3 +
															" pulled him by the "+ bodypart + " away from the "
															+ noun2 + " and dragged him back home were he continued "
															+ verb2 +"ing in peace. Eventually he got bored of "
															+ verb2 + "ing so he started learning to " + verb3 +
															" and he learnt how to " + verb3 + " like a professional "
															+ verb3 + "er so he got bored again and he " + verb4 +
															"ed over to the " + noun4 + " and " + verb5 ;

	document.getElementById('madlibPanel').style.display = "none";
}

function userValidationMadlibs(){
	let pronoun1 = document.getElementById('pronoun1').value;
	let adjective1 = document.getElementById('adjective1').value;
	let noun1 = document.getElementById('noun1').value;
	let verb1 = document.getElementById('verb1').value;
	let noun2 = document.getElementById('noun2').value;
	let verb2 = document.getElementById('verb2').value;
	let noun3 = document.getElementById('noun3').value;
	let bodypart = document.getElementById('bodypart').value;
	let verb3 = document.getElementById('verb3').value;
	let verb4 = document.getElementById('verb4').value;
	let noun4 = document.getElementById('noun4').value;
	let verb5 = document.getElementById('verb5').value;
	
	if(pronoun1 == null || pronoun1 === ''){
		alert("You haven't filled in your pronoun");
		return false;
	} else if (noun1 == null || noun1 === ''){
		alert("You haven't filled in your noun");
		return false;
	} else if(adjective1 == null || adjective1 === ''){
		alert("You haven't filled in your adjective");
		return false;
	} else if (verb1 == null || verb1 === ''){
		alert("You haven't filled in your verb");
		return false;
	} else if (noun2 == null || noun2 === ''){
		alert("You haven't filled in your noun");
		return false;
	} else if (verb2 == null || verb2 === ''){
		alert("You haven't filled in your verb");
		return false;
	} else if (noun3 == null || noun3 === ''){
		alert("You haven't filled in your noun");
		return false;
	} else if (bodypart == null || bodypart === ''){
		alert("You haven't filled in your body part");
		return false;
	} else if (verb3 == null || verb3 === ''){
		alert("You haven't filled in your verb");
		return false;
	} else if (verb4 == null || verb4 === ''){
		alert("You haven't filled in your verb");
		return false;
	}else if (noun4 == null || noun4 === ''){
		alert("You haven't filled in your noun");
		return false;
	}else if (verb5 == null || verb5 === ''){
		alert("You haven't filled in your verb");
		return false;
	}

	return true;
}

function getTodaysJoke(){
	console.log('im in joke');

	//determine today's day
	let date = new Date();
	let day = date.getDate();

	//get joke that corresponds to today's day
	let jokeOfDay = arrayTest[day];

	//replace innerHTML with today's joke
	document.getElementById("jokeP").innerHTML = jokeOfDay;
}


let arrayTest = ["just filling some space" // joke0
	, "Did you hear about the mathematician who's afraid of negative numbers?" //joke 1
	, "Why do we tell actors to \"break a leg?\"\n" + "Because every play has a cast." //joke 2
	,"How many times can you subtract 10 from 100?\n" + "Once. The next time you would be subtracting 10 from 90.."// joke 3
	, "Hear about the new restaurant called Karma?\n" + "There's no menu: You get what you deserve." // joke 4
	, "A bear walks into a bar and says, \"Give me a whiskey... and a cola.\"\n" + "\"Why the big pause?\" asks the bartender. The bear shrugged. \"I'm not sure. I was born with them.\"" // joke 5
	,"Did you hear about the claustrophobic astronaut?\n" + "He just needed a little space." // joke 6
	, "Why don’t scientists trust atoms?\n" + "Because they make up everything." // joke 7
	, "Where are average things manufactured?\n" + "The satisfactory." // joke 8
	,"How do you drown a hipster?\n" + "Throw him in the mainstream." // joke 9
	, "What does a nosy pepper do?\n" + "Gets jalapeno business!" // joke 10
	, "Why can’t you explain puns to kleptomaniacs?\n" + "They always take things literally." // joke 11
	,"How do you keep a bagel from getting away?\n" + "Put lox on it." // joke 12
	, "What's the best thing about Switzerland?\n" + "I don't know, but the flag is a big plus." // joke 13
	, "A man tells his doctor, “Doc, help me. I’m addicted to Twitter!”\n" + "The doctor replies, “Sorry, I don’t follow you...”" // joke 14
	,"What kind of exercise do lazy people do?\n" + "Diddly-squats." // joke 15
	, "What do you call a parade of rabbits hopping backwards?\n" + "A receding hare-line." // joke 16
	, "What did the Tin Man say when he got run over by a steamroller?\n" + "“Curses! Foil again!”" // joke 17
	,"What did the left eye say to the right eye?\n" + "Between you and me, something smells." // joke 18
	, "What do you call a fake noodle?\n" + "An impasta." // joke 19
	, "How do you make a tissue dance?\n" + "Put a little boogie in it." // joke 20
	, "What do you call a pony with a cough?\n" + "A little horse." // joke 21
	, "What did one hat say to the other?\n" + "You wait here. I'll go on a head." // joke 22
	, "What do you call a magic dog?\n" + "A labracadabrador." // joke 23
	, "What did the shark say when he ate the clownfish?\n" + "This tastes a little funny." // joke 24
	, "Why can't you hear a pterodactyl go to the bathroom?\n" + "Because the \"P\" is silent." // joke 25
	, "What did the pirate say when he turned 80?\n" + "Aye matey." // joke 26
	, "What did the buffalo say when his son left for college?\n" + "Bison." // joke 27
	, "What is an astronaut's favourite part on a computer?\n" + "The space bar." // joke 28
	, "What do you call an apology written in dots and dashes?\n" + "Re-Morse code." // joke 29
	, "Did you hear about the two people who stole a calendar?\n" + "They each got six months." // joke 30
	, "How do poets say hello?\n" + "Hey, haven’t we metaphor?" // joke 31
];
