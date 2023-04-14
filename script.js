function enterSubjects(){
	document.getElementById("main").innerHTML= ""; //clear screen if running application again
	var average=0; //variable to hold results average
	var numSubjects=prompt("Please enter number of subjects you have");
	var subjectResults=[];//declare array to hold subject results
	
	//loop to ask user for results of subjects
	for(i=0;i<numSubjects;i++){
		subjectResults[i]= prompt("Please enter result for subject "+ (i+1));
		
	}
	//get Average
	for(i=0;i<numSubjects;i++){
		average=(average  + parseInt(subjectResults[i]));
		//alert("average= " + average);
	}
	average=(average/numSubjects);
	
	// Print results back to user with overall average and grade
	for(i=0;i<numSubjects;i++){
	document.getElementById("main").innerHTML+= ("</br>"+" Result for subject "+(i+1)+" = "+subjectResults[i]+"," );
	
	
	}	
	//Print average
	document.getElementById("main").innerHTML+= ("</br>"+" Average = "+ average.toFixed(2));
	
	//Print grade
	for(i=0;i<numSubjects;i++){
		if(  parseInt(subjectResults[i]) >= 90){
			document.getElementById("main").innerHTML+= ("</br>"+" Grade for subject: "+(i+1)+" =A " );
			
		}
		else if( parseInt(subjectResults[i]) >= 70 && parseInt(subjectResults[i])<90){
			document.getElementById("main").innerHTML+= ("</br>"+" Grade for subject: "+(i+1)+" =B " );
		}
		else if(parseInt(subjectResults[i]) >= 60 && parseInt(subjectResults[i])<70){
			document.getElementById("main").innerHTML+= ("</br>"+" Grade for subject: "+(i+1)+" =C " );
		}
		else if(parseInt(subjectResults[i]) >= 50 && parseInt(subjectResults[i])<60){
			document.getElementById("main").innerHTML+= ("</br>"+" Grade for subject: "+(i+1)+" =D " );
		}
		else if(parseInt(subjectResults[i]) >= 40 && parseInt(subjectResults[i])<50){
			document.getElementById("main").innerHTML+= ("</br>"+" Grade for subject: "+(i+1)+" =E " );
		}
		else if(parseInt(subjectResults[i]) >= 0 && parseInt(subjectResults[i])<40){
			document.getElementById("main").innerHTML+= ("</br>"+" Grade for subject: "+(i+1)+" =Fail " );
		}
	}
}

