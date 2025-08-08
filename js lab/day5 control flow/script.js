/*
Que 1. Countdown Timer ( while loop )
------

 	Implement a simple countdown timer that displays numbers decreasing from a starting point until zero.

- The while loop continues as long as countDown is greater than or equal to 0. In each iteration, it prints the current count and then decrements countDown, moving closer to the loop's termination.

	Sample input :  countDown = 5
	sample output : --- Countdown Start ---
			5
			4
			3
			2
			1
			0
			--- Countdown End ---

    Sample input : countDown = -2
	Sample output : Loop condition false initially, negative values are not allowed.


*/
//                                         -----------------------------------------------------------------------
//Ans:

/*
let countDown=+prompt("enter a countDown number :")

if(countDown>=0)
{
    console.log("--- Countdown Start ---");
    while(countDown>=0)
    {
        console.log(countDown);
        countDown--;
    }
    console.log("--- Countdown End ---");
}
else
{
    console.log("Loop condition false initially, negative values are not allowed.");
}

*/
// ==============================================================================================================================================

/*
Que 2.  User Login Attempts	(While loop)
-------
	 Allow a user a limited number of login attempts before locking their account.

- The while loop runs as long as attemptsLeft is greater than 0 and isLoggedIn is false. Each iteration simulates an attempt, decrements the counter, and might update isLoggedIn if successful.

	Note : you have to write a JavaScript program to allow the user to attempt the login for certain number of times if user fails the every login attempt lock the user account
	
	Variable : 
			attempts : hardcoded value (number).
			isLoggedIn : hardcoded Boolean value ( initially false).
			correctPassword : hardcoded for comparison (string)
			enteredPassword : user input using the prompt() (string).

	the while loop will iterate for every failed attempts of login if the password matches to the correct password make the isLoggedIn flag as true and break the loop. if user exceeds the allowed attempts show message to the user his account is locked due to failed attempts.

	sample input :  attemptsLeft = 3
			isLoggedIn = false; 
			enteredPassword = "secret123"
			correctPassword = "secret123"
	sample output : Attempt 1: Enter your password. (3 attempts left)
			Login successful!

	sample input :  attemptsLeft = 3
			isLoggedIn = false; 
			enteredPassword = "wrongPassword"
			correctPassword = "secret123"
	sample output : Attempt 1:Enter your password. (2 attempts left)
				Incorrect password. Please try again.
			Attempt 2:Enter your password. (1 attempts left)
				Incorrect password. Please try again.
			Attempt 3: Enter your password. (0 attempts left)
				Incorrect password. No attempts left. Account locked.
*/
//Ans:                                  --------------------------------------------------------------
/*

let attemptsLeft = 3;
let isLoggedIn = false;
let enteredPassword;
let correctPassword = "secret123";

let i = 1;

    while(attemptsLeft>=0)
    {
        enteredPassword = prompt(`Attempt ${i}: Enter your password. (${attemptsLeft} attempts left)` );

        if(enteredPassword === correctPassword)
        {
            console.log("Login successful!");
            break;
        }
        else
        {
            attemptsLeft--;
            console.log("Incorrect password. Please try again.");
        }
    
    if(attemptsLeft===0)
    {

        console.log("Incorrect password. No attempts left. Account locked.");
        break;
    }
    i++;
    }

*/
//================================================================================================================================================

/*
Que 3. Reading Data Until a Specific Value (while loop)
------
	Process incoming data or user input until a specific "stop" value is encountered.

 dataInput simulates receiving data. The while loop continues as long as dataInput is not "STOP". This is common for processing streams of information where the end isn't fixed.


	iterate the loop until user enter stop while receving the inputs from the user, if user enters other values continue the loop.

	take the inputs from the user inside the while loop until user enters 'Stop'.

	sample output :

			--- Data Processing Start ---
			Processing data: READ DATA
			Processing data: READ DATA
			Processing data: ANOTHER DATA POINT              // after this user enters the 'Stop' and loop breaks
			--- Data Processing Complete. Total items: 3 ---
*/
//Ans:
/*
let c=0;

console.log("Processing data: READ DATA")

while()
{
    console.log("Processing data: READ DATA")
    c++;
}
console.log(`--- Data Processing Complete. Total items: ${c} ---`);
*/
// =================================================================================================================================================

