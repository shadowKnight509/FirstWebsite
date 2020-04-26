

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

function forLoopPractice1(iVal){
	
	for (let i = 0; i <= iVal; i++) {
		console.log("i is: " + i);
	}

}

function forLoopPractice2(iVal){
	
	for (let i = 0; i <= iVal; i++) {
		for (let j = 0; j <= iVal; j++) {
			console.log("i is: " + i + " and j is: "+ j);
		}
	}

}

//forLoopPractice2(4);

let clickCount = 0;

function addChar(e){
	let buttonClicked = e.target;  //get specific button clicked;
	
	if (buttonClicked.innerHTML == 'X' || buttonClicked.innerHTML == 'O'){
		alert("Cheaters never prosper, that spot has been taken already!!!!!");
		return;  //leave function, don't execute the rest of the code in this function.
	}
		
	
	clickCount++; //increment click count;
	
	//figure out if X or O;
	let xo;
	if (clickCount % 2 == 0)
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
		if(tic % 3 == 0){
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
	
	if (comp.display == "none") {
		madlibPanel.style.display = "block";
	} else 
		madlibPanel.style.display = "none";
	
}


function madlibs(){
	let isValid = userValidationMadlibs();
	
	if (isValid == false)
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
	let madLib = pronoun1 + " had a " + noun1 + " store" + 
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
				
	document.getElementById('madiv').innerHTML = madLib;
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
	
	if(pronoun1 == null || pronoun1 == ''){
		alert("You haven't filled in your pronoun");
		return false;
	} else if (noun1 == null || noun1 == ''){
		alert("You haven't filled in your noun");
		return false;
	} else if(adjective1 == null || adjective1 == ''){
		alert("You haven't filled in your adjective");
		return false;
	} else if (verb1 == null || verb1 == ''){
		alert("You haven't filled in your verb");
		return false;
	} else if (noun2 == null || noun2 == ''){
		alert("You haven't filled in your noun");
		return false;
	} else if (verb2 == null || verb2 == ''){
		alert("You haven't filled in your verb");
		return false;
	} else if (noun3 == null || noun3 == ''){
		alert("You haven't filled in your noun");
		return false;
	} else if (bodypart == null || bodypart == ''){
		alert("You haven't filled in your body part");
		return false;
	} else if (verb3 == null || verb3 == ''){
		alert("You haven't filled in your verb");
		return false;
	} else if (verb4 == null || verb4 == ''){
		alert("You haven't filled in your verb");
		return false;
	}else if (noun4 == null || noun4 == ''){
		alert("You haven't filled in your noun");
		return false;
	}else if (verb5 == null || verb5 == ''){
		alert("You haven't filled in your verb");
		return false;
	}

	return true;
}
