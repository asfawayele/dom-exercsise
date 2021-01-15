
// Form Controller Excersice
 	  /* 
	  	Requirments: 
	  		- Check if the first name and Password fields are left empty when submit button is clicked 
	  		- If left empty, display a warning at the top saying 
	  			- First name field is required 
	  			- Password field is required 
	  			- Prevent default 
	  		- If not empty, but password provided is less than 5 characters, display a message saying "Password is empty or not strong enough" 
	  		- Just to be more interactive, provide feedback if user focuses on the first name and password fields and leave with out completing the requirments 
	  		- Also, change the borders of the fields with errors with to red 
	  */ 
     
        // pseudo codes
	
        // use the two main variables to be the forms functional.
        // these are first name and password.
        // first step checking the first name ..if it is empty ?...if it is inncorrectlly spell ?..is correctlly spell ?
        // if the first name is left empty,display a warning erorr when submit button is clicked..save..error1.
        // if the first name is fill out incorrectlly,display error....save...error2.
        // if the first name is correctly spelled react "go to submit button" done.
        // second step check the password...is empty ?...is weak password ?...is correct ?..
        // if the password is left empty,display a warning error when submit 
        // butten clicked..save..error3.
        // if the password character is less than 5 (< 5),display a message saying "password is empty 
        // or not strong enough" when submit is clicked and save this error..save..error4.
        // if the password is not correctlly filled ,display a message saying "inncorrect password"..save..error5.
        // unless the password is correct and go through the next step'
        // and use the array variable to collect the errors as aform of array..array = ["error1","error2","error3","error4","error5"]
        // use prevent default to be safe and more accurate registration form. 
        // if the user focuses on first name and password fields and leave with out completing 
        // the requirments change the borders of the field errors with to red.
        // folloow the above step by step prosedures to build a valuable formate of submition form registration. -->

	/* Form checker on submit */
	var el = document.getElementById('registration-form');
	el.onsubmit = formSubmitChecker; 

	function formSubmitChecker(e) {
		// Put elements in variable 
		var errors = []; 
		var elErrorsDisplay = document.getElementById('errorsDisplay');
		elErrorsDisplay.innerHTML = "";

		var elFirstName = document.getElementsByName('first-name');
		var elPassword = document.getElementsByName('password');
		// Get their values 
		var elFirstNameValue = elFirstName[0].value; 
		var elPasswordValue = elPassword[0].value; 
		
		if (!elFirstNameValue) {
			errors.push("First name field is required"); 
		}
		
		if (elPasswordValue.length < 5) {
			errors.push("Password is empty or not strong enough"); 
		}
		// console.log(errors);
		if(errors.length > 0) {
			e.preventDefault(); // Stops the form from submitting 
			elErrorsDisplay.style.display = "block";
			for (var i = 0; i < errors.length; i++) {
				elErrorsDisplay.innerHTML += errors[i] + "<br>";
			}
		}else{
			alert("Submitted");
		}
	}

	/* Form checker first name on blur */
	var elFirstName = document.getElementsByName('first-name');
	var elFirstNameElement = elFirstName[0];
	elFirstNameElement.onblur = checkIfNameIsEmpty; 

	/* Form checker password on blur */
	var elPassword = document.getElementsByName('password');
	var elPasswordElement = elPassword[0];
	elPasswordElement.onblur = checkIfPasswordQualifies; 


	function checkIfNameIsEmpty() {
		var elErrorsDisplay = document.getElementById('errorsDisplay');
	  var elFirstName = document.getElementsByName('first-name');
	  var elFirstNameElement = elFirstName[0];
	  var elFirstNameElementValue = checkIfNameIsEmpty.value;
	  if(!elFirstNameElementValue){
	  	elErrorsDisplay.style.display = "block";
	  	elErrorsDisplay.innerHTML += "First name field is required <br>";
	  	elFirstNameElement.style.border = "1px solid pink";
	  }
	}

	function checkIfPasswordQualifies() {
		var elErrorsDisplay = document.getElementById('errorsDisplay');
	  var elPassword = document.getElementsByName('password');
	  console.log(elPassword);

	  var elPasswordElement = elPassword[0]; 
		var elPasswordValue = elPassword[0].value; 
	  if(elPasswordValue.length < 5){
	  	elErrorsDisplay.style.display = "block";
	  	elErrorsDisplay.innerHTML += "Password is empty or not strong enough <br>";
	  	elPasswordElement.style.border = "1px solid pink";
	  }
	}
