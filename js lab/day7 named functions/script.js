/*
Ques 1 : Basic Calculator - Adding Numbers (using Named functions)
--------
Description -
	Imagine you're building a simple web-based calculator. When a user inputs two numbers and clicks "Add", you need a reliable way to perform this basic arithmetic operation. A named 	function is perfect for this because adding numbers is a common, repeatable task.

Steps -
	- Create a named function called addTwoNumbers.

	- It should accept two inputs: num1 and num2.

	- Inside the function, add num1 and num2.

	- The function should give back (return) the calculated sum.

	- Call the function with different pairs of numbers to test it.

Test Cases -

	Sample input : num1 = 3, num2 = 5
	Sample output : 3 + 5 = 8

	Sample input : num1 = 3, num2 = 5
	Sample output : 3 + 5 = 8
*/
//                          --------------------------------------------------------------------------------

//Ans:
/*
function addsum(num1,num2)
{
    console.log(num1+num2);
}

addsum(5,3);
/*

//======================================================================================================================================================

/*
Ques 2 :  Personalized Greeting Message
--------
Description :
	When a user logs into their account (e.g., on a social media site, an online store, or a news portal), you want to greet them by name. Instead of writing console.log("Hello, 	[username]! Welcome back!"); everywhere, a function makes this greeting consistent and easy to update.

Steps :

	- Create a named function called createWelcomeMessage.

	- It should accept one input: userName.

	- Inside the function, combine a fixed greeting phrase with the userName.

	- The function should return the complete greeting string.

	- Call the function with different user names.

Test Cases :

	Sample Input : Alice
	Sample Output: Hello, Alice! Welcome to our platform!

	Sample Input : Guest
	Sample Output: Hello, Guest! Welcome to our platform!
*/
//                                      ------------------------------------------------------------------------

/*
function welcome(a)
{
    console.log(`Hello, ${a}! Welcome to our platform!`);
}

welcome(prompt("enter your name"));
*/
//===============================================================================================================================================

/*
Ques 3 : Basic Password Strength Validator
--------
Description : 
	Stronger passwords are essential for security. This function will perform two checks: length and character type (digit presence). Both must pass for the password to be considered 	"strong enough."

Steps:

	- Create a named function called checkPasswordStrength.

	- It should accept two inputs: password (string) and minLength (number).

	- First, check if password.length is less than minLength. If so, return false immediately.

	- Iterate through each character of the password string. For each character, check if it is a digit (e.g., '0' through '9'). Keep a flag (hasDigit).

	- After checking all characters, if hasDigit is true AND the length check passed, return true. Otherwise, return false.

Test Cases :

	Sample Input : password = "abc1234", length = 8
	Sample Output: 'abc1234' (Min 8): false (too short)

	Sample Input : password = "password123", length = 8
	Sample Output: 'password123' (Min 8): true

	Sample Input : password = "nopassword", length = 8
	Sample Output: 'nopassword' (Min 8): false (no digit)
*/
//                                                      -----------------------------------------------------
//Ans:

let password = prompt("enter password");
let minLength = 8;

console.log(checkPasswordStrength(password,minLength));

function checkPasswordStrength(password,minLength){



	if(password.length<minLength){
		return `false (too short)`;
	}
	for(let i=0;i<password.length;i++){

		if(password[i]>='0' && password[i]<='9'){
			return true;
		}
	}
	return `false (no digit)`;
}