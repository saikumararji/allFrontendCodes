// Que 1. 	User Account Status Check
// We need to determine if a user's account is currently active or inactive to allow or deny certain operations, such as making a purchase.
// This if-else statement checks the boolean value of isAccountActive. If isAccountActive is true, the user is permitted to proceed; otherwise, they are informed that their account is inactive.
//                                     ------------------------------------------------------------
// var astatus=prompt()

// if(astatus=='true')
// {
//     console.log("Your account is active. You can proceed with your transaction");
// }
// else
// {
//     console.log("Your account is currently inactive. Please contact support");
// }

// =====================================================================================================================================================

// Que 2.	Basic Password Validation (Length Check)
// 	A user is setting a new password, and we need to ensure it meets a minimum length requirement.

// This if-else statement checks if the password string's length is at least 8 characters. If it is, the password is considered valid; otherwise, an error message is displayed.

// 	Note : You have to take the input from the user using the prompt() function and by checking the length of the input pass the following testcases.
// 	sample input : password = "mySecurePassword123"
// 	sample output : Password meets minimum length requirements. Good job!
// 	sample input : password = "short";
// 	sample output : Password is too short. Please use at least 8 characters
//                                     ------------------------------------------------------------

// var psword= prompt();
// if(psword.length>=8)
// {
//     console.log("Password meets minimum length requirements. Good job!");
// }
// else
// {
//     console.log("Password is too short. Please use at least 8 characters");
// }

// ========================================================================================================================================================

// Que 3.	Temperature Unit Conversion Prompt
// ------
// A weather application might ask a user if they prefer to see temperatures in Celsius or Fahrenheit.

// -  This if-else statement checks the preferredUnit string. Based on the user's preference, a different message is displayed.

// Note : Take the input as a string from the user Celsius or Fahrenheit and display the message according to the input

// 	sample input : preferredUnit = "Celsius"
// 	sample output : Displaying temperature in Celsius (°C).

// 	sample input : preferredUnit = "Fahrenheit";
// 	sample output : Displaying temperature in Fahrenheit (°F).
//                                     ------------------------------------------------------------

// let temp=prompt();

// if(temp=="Celsius")
// {
//     console.log("Displaying temperature in Celsius (°C)");
// }
// else
// {
//     console.log("Displaying temperature in Fahrenheit (°F)");
// }

// ======================================================================================================================================================

// Que 4. 	Customer Loyalty Tier Program
// ------
// 	An e-commerce platform assigns customers to different loyalty tiers based on their total spending, offering escalating benefits.
// - This if-else if ladder checks totalSpending against different thresholds. The first condition met determines the customer's loyalty tier. The order of conditions is important here, from highest spending to lowest, to ensure correct categorization.

// Note : Take the input from the user and based on the user spending assign the loyalty tier as ' Platinum if spendings are more than 1000 ' , ' Gold if the spendings are more than 500 ', ' Silver if the spendings are more than 100 ' else ' bronze '. 

// 	sample input : totalSpending = 1200
// 	sample output : Customer's total spending: $1200. Loyalty Tier: Platinum.

// 	sample input : totalSpending = 750
// 	sample output : Customer's total spending: $750. Loyalty Tier: Gold.
//                                     ------------------------------------------------------------

// let totalSpending=+prompt()

// if(totalSpending>1000)
// {
//     console.log(`Customer's total spending:$${totalSpending}. Loyalty Tier: Platinum.`);
// }
// else if(totalSpending>500 && totalSpending<=1000)
// {
//     console.log(`Customer's total spending: $${totalSpending}. Loyalty Tier: Gold.`);
// }
// else
// {
//     console.log(`Customer's total spending: $${totalSpending}. Loyalty Tier: bronz.`);
// }

// ========================================================================================================================================================


// Que 5.	Vehicle Speed Classification
// -------
// 	A traffic monitoring system categorizes vehicle speeds into different zones (e.g., slow, normal, fast, excessive) for analysis.

// 	This ladder checks vehicleSpeed against predefined ranges. Each else if condition is evaluated in order, assigning a classification as soon as a condition is met.

// 	Note : take the speed input from the user based on decide the classification. if the vehicle speed is less than 30 its slow, if it is greater than 30 and less than 60 then its normal , if it is greater than 60 and less than 90 its fast, else its Excessive.

// 	sample input : vehicleSpeed = 75
// 	sample output: Vehicle speed: 75km/h. Classification: fast

// 	sample input: vehicleSpeed = 20;
// 	sample output: Vehicle speed: 20km/h. Classification: slow

// 	sample input: vehicleSpeed = 100;
// 	sample output: Vehicle speed: 100km/h. Classification: Excessive
//                                     ------------------------------------------------------------

// let speed=+prompt()

// if(speed>=1 && speed<30)
// {
//     console.log(`Vehicle speed: ${speed}km/h. Classification: slow`);
// }
// else if(speed>=30 && speed<60)
// {
//     console.log(`Vehicle speed: ${speed}km/h. Classification: normal`);
// }
// else if(speed>=60 && speed<90)
// {
//     console.log(`Vehicle speed: ${speed}km/h. Classification: fast`);
// }
// else
// {
//     console.log(`Vehicle speed: ${speed}km/h. Classification: Excessive`);
// }

// =======================================================================================================================================================