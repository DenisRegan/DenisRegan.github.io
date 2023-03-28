function printLyrics(){
	var count=99;
	while(count >= 0){
		if(count>2){
			document.getElementById("main").innerHTML+="</br>"+ count + " bottles of beer on the wall,"+ count + " bottles of beer"+
			" Take one down and pass it around,"+(count-1)+" bottles of beer on the wall"+"</br>";
		}
		else if(count==2){
			document.getElementById("main").innerHTML+="</br>"+ count + " bottles of beer on the wall,"+ count + " bottles of beer"+
			" Take one down and pass it around,"+(count-1)+" bottle of beer on the wall"+"</br>";
		}
		else if(count==1){
			document.getElementById("main").innerHTML+="</br>"+ count + " bottle of beer on the wall,"+ count + " bottle of beer"+
			" Take one down and pass it around,"+ "no more bottles of beer on the wall"+"</br>";		
		}
		count--;
	}
	document.getElementById("main").innerHTML+="</br>"+" No more bottles of beer on the wall, no more bottles of beer"+
	" Go to the store and buy some more, 99 bottles of beer";
	
}


function playRPS(){
	
	var randChoice;
	var userChoice;
	var gameCount=3; //variable to store number of times the game is played
	var userWin= false;  //varible to store if user has won
	
	
	while( (gameCount>0) && (userWin == false) ){ 
		
		var randNum = Math.floor(Math.random() * 3) + 1; //generate a random number
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
		
			//
			if(userInput.toLowerCase() == randChoice.toLowerCase()){
				alert(userInput + " vs "+ randChoice + ": Draw");
			}
			//rock vs paper = paper wins
			if(userInput.toLowerCase()== "rock"  &&  randChoice.toLowerCase()=="paper"){
				alert(userInput + " vs "+ randChoice + ": Computer wins!");
			}
			//rock vs scissors = rock wins
			if(userInput.toLowerCase()== "rock"  &&  randChoice.toLowerCase()=="scissors"){
				alert(userInput + " vs "+ randChoice + ": User wins! Gamer over");
				userWin = true;
			}
			//paper vs scissors = scissors wins
			if(userInput.toLowerCase()=="paper"  &&  randChoice.toLowerCase()=="scissors"){
				alert(userInput + " vs "+ randChoice + ": Computer wins!");
			}
			//paper vs rock = paper wins
			if(userInput.toLowerCase()=="paper"  &&  randChoice.toLowerCase()=="rock"){
				alert(userInput + " vs "+ randChoice + ": User wins! Gamer over");
				userWin = true;
			}
			//scissors vs rock = rock wins
			if(userInput.toLowerCase()=="scissors"  &&  randChoice.toLowerCase()=="rock"){
				alert(userInput + " vs "+ randChoice + ": Computer wins!");
			}
			//scissors vs paper = scissors wins
			if(userInput.toLowerCase()=="scissors"  &&  randChoice.toLowerCase()=="paper"){
				alert(userInput + " vs "+ randChoice + ": User wins! Game over");
				userWin = true;
			}
			
			
		}
		//If input is invalid , let the user know 
		else{
			alert(" Invalid Input Please try again!!!");
		}
		
		gameCount--;
	}
	if (gameCount==0){
	alert(" Game has been played the maximum of 3 times, Game over");
	}
	
	
	
	
	
}

