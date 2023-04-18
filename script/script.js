//document.getElementById("joinButton").addEventListener('click', addUser);
//document.getElementById("loginButton").addEventListener('click', verifyUser);

//global array to store user names and user passwords.
var userArray=[["student","pass1"],["student2","pass2"],["student3","pass3"]];

var userData=[["John","Doe","john@student.ncirl.ie","student","pass1"]];



//javascript to show or hide dropdown menu
function showDropdown(){

	var dropVisible;//declare variable to hold the display value of the courses dropdown menu

	
	dropVisible =  document.getElementById("courses-dropdown").style.display;//get display value of "courses-dropdown"
	
	/*if courses-dropdown is not visible ,display it by setting display property to block
	if courses-dropdown is visible, hide it */
	if(dropVisible === "none" || dropVisible === ""){
		document.getElementById("courses-dropdown").style.display = "block";
	}
	else{
		document.getElementById("courses-dropdown").style.display = "none";
	}
}

function showResponsiveMenu(){
	var showResponsive = document.getElementById("responsive-menu").style.display;
	if(showResponsive === "none" || showResponsive === ""){
		document.getElementById("responsive-menu").style.display = "block";
	}
	else{
		document.getElementById("responsive-menu").style.display = "none";
	}
	
}



function verifyUser(){
	event.preventDefault();
	
	var userName = document.getElementById("userName").value;//declare a variable to hold usernme
	var pass = document.getElementById("password").value;//declare a variable to hold password
	var userFound = false; //variable to indicate if the user has been found in the database
	
	/*iterate throught the userArray and check if the username and password is valid compared to the username/password stored in the userArray*/
	for(i=0;i<userArray.length;i++){
		console.log(userArray[i][0], userArray[i][1]); //uncomment for debug and testing 
		
		if (userName ==userArray[i][0]  && pass==userArray[i][1]){
			userFound = true;//set userFound to true if the username & password is valid
		}		
	}
	
	/*if userFound is true then display to user that password is valid, else display the username/password is invalid*/
	if (userFound==true){
			//alert(userName + " is a valid user");
			document.getElementById("valid-user").style.display = "block";
		}
		else{
			alert(userName + " User not found in database");
			document.getElementById("invalid-user").style.display = "block";
		}
}



//add new user
function addUser(){
	event.preventDefault();
	//alert("adding user");
	var newUser = new Array(5);// declare an array with 5 locations to store user info , this array can then be "pushed" onto the userData array
	
	var firstName = document.getElementById("firstName").value;//variable for user first name
	var lastName = document.getElementById("lastName").value;//variable for user last name
	var email= document.getElementById("email").value;//variable for user email
	var userName = document.getElementById("join-userName").value;//variable for userName
	var psword = document.getElementById("join-password").value;//variable for user password
	
	
	var validEmail= emailConfirm(email);//validate email - check it contains '@' symbol
	//alert(validEmail);//uncomment for debug
	//alert(firstName + lastName + email + userName + psword + validEmail);//uncomment for debug
	
	
	// if the user has populated all input fields and the email is valid - push or append the data to the userData array 
	if( (firstName !="") && (lastName !="") && (validEmail== true) && (userName !="") && (psword !="") ){
		
		//assign array location with the appropriate data
		newUser[0]= firstName;
		newUser[1]= lastName;
		newUser[2]= email;
		newUser[3]= userName;
		newUser[4]= psword;
		
		//console.log("newUser" + newUser[0] + newUser[1] + newUser[2] + newUser[3] + newUser[4]);//uncomment for debug
		userData.push(newUser);//push the newUser array to the userData array
		displayUsers();//display the users in userData array for debug purposes
	}
	else{
		alert("All required fields are not complete");
	}
}


//javascript to validate email
function emailConfirm(email){
	if (email.includes("@")){
		return true;
	}
	else{
		return false;		
	}
		
}


//display users in the console for testing and debugging purposes 
function displayUsers(){
	for(i=0;i<userData.length;i++){
		console.log(userData[i][0]+",", userData[i][1]+",",userData[i][2]+",",userData[i][3]+",",userData[i][4]);  
	}
}


