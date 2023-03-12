function playGame(){
	var randChoice;
	var userChoice;
	var randNum = Math.floor(Math.random() * 3) + 1;
	
	
	/*Game Logic*/
	/*
	Rock vs Rock = draw
	Scissors vs scissor = draw
	Paper vs Paper  =draw
	
	Rock vs Paper = paper wins
	Rock vs scissors = rock wins
	Paper vs Scissors = scissors win
	Paper vs rock = paper wins
	scissors vs rock = rock wins
	scissors vs paper = scissors wins
	
	*/
	
	//Convert random number to rock,paper or scissors
	if (randNum ==1){
		randChoice="Rock";
	}
	else if (randNum ==2){
		randChoice="Paper";
	}
	else if(randNum ==3){
		randChoice="Scissors";
	}
	
	//Get user input, validate the input and play game if the input is valid
	var userInput = prompt("Welcome to rock Paper scissors, please type rock, paper , or scissors");
	
	//Play game if user input is valid
	if(userInput.toLowerCase() =="rock" || userInput.toLowerCase() =="paper" || userInput.toLowerCase() =="scissors"){
		
		
		if(userInput.toLowerCase() == randChoice.toLowerCase()){
			alert(userInput + " vs "+ randChoice + ": Draw");
		}
		//rock vs paper = paper wins
		if(userInput.toLowerCase()== "rock"  &&  randChoice.toLowerCase()=="paper"){
			alert(userInput + " vs "+ randChoice + ": Computer wins!");
		}
		//rock vs scissors = rock wins
		if(userInput.toLowerCase()== "rock"  &&  randChoice.toLowerCase()=="scissors"){
			alert(userInput + " vs "+ randChoice + ": User wins!");
		}
		//paper vs scissors = scissors wins
		if(userInput.toLowerCase()=="paper"  &&  randChoice.toLowerCase()=="scissors"){
			alert(userInput + " vs "+ randChoice + ": Computer wins!");
		}
		//paper vs rock = paper wins
		if(userInput.toLowerCase()=="paper"  &&  randChoice.toLowerCase()=="rock"){
			alert(userInput + " vs "+ randChoice + ": User wins!");
		}
		//scissors vs rock = rock wins
		if(userInput.toLowerCase()=="scissors"  &&  randChoice.toLowerCase()=="rock"){
			alert(userInput + " vs "+ randChoice + ": Computer wins!");
		}
		//scissors vs paper = scissors wins
		if(userInput.toLowerCase()=="scissors"  &&  randChoice.toLowerCase()=="paper"){
			alert(userInput + " vs "+ randChoice + ": User wins!");
		}
			
			
	}
	//If input is invalid , let the user know 
	else{
		alert(" Invalid Input Please try again!!!");
	}
}