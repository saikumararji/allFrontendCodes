// Que 1.	 Advanced Product Discount Eligibility (Nested if)
// ------
// 	An e-commerce site applies a discount if a user is a member AND if their purchase total exceeds a certain amount.

// - The outer if checks for isMember. Only if the user is a member does the inner if check the purchaseTotal. This demonstrates a dependency: the purchase total discount is only relevant for members.

// 	Note : You have to achieve this functionality using the nested if
// 		1) if the user is member and purchase amount is greater than 200 apply 15% discount.
// 		2) if the user is member and purchase amount is greater than 100 apply 10% discount.
// 		3) if the user is member and purchase amount is less than 100 :  Member, but purchase total is too low for an extra discount.
// 		4) if the user is not a member and purchase amount is greater than 500 apply 5% discount general discount.
// 		5)  if the user is not a member and purchase amount is less than 500 : User is not a member. No member discounts apply.

// 	Sample input : 	isMember = true
// 			purchaseTotal = 250
// 	Sample output :  User is a member.
// 			 Qualifies for a 15% member discount!
// 			 Original Price: $250.00, Final Price: $212.50


// 	Sample input : 	isMember = false
// 			purchaseTotal = 70
// 	Sample output :  User is not a member. No member discounts apply.
// 			 Original Price: $70.00, Final Price: $70.00

// 	Sample input : 	isMember = false;
// 			purchaseTotal = 600;
// 	Sample output : User is not a member. No member discounts apply.
// 			Qualifies for a 5% general discount on large order.
// 			Original Price: $600.00, Final Price: $570.00


// Ans :                                       --------------------------------------------------------------

/*
let member = prompt("is user member or not (true/false)");

let amount = +prompt("Enter purchase amount.");

if(member === 'true')
{
   console.log("User is a member.");
    if(amount>=100 && amount<200)
        {
            console.log("Qualifies for a 10% member discount!");
            console.log(`Original Price: $${amount}, Final Price: $${(amount-(10/100)*amount)}`);
        }
    else if(amount>=200)
        {
            console.log("Qualifies for a 15% member discount!");
            console.log(`Original Price: $${amount}, Final Price: $${amount - (15/100)*amount}`);
        }
    else
        {
            console.log("But purchase total is too low for an extra discount.")
        }
}
else if(member === 'false')
{
    if(amount>=500)
        {
            console.log("User is not a member. No member discounts apply.");
            console.log("Qualifies for a 5% general discount on large order.");
            console.log(`Original Price: $${amount}, Final Price: ${amount - (5/100)*amount}`);
        }
    else
        {
            console.log("User is not a member. No member discounts apply.");
        }
}


*/

// ========================================================================================================================================================


/*
Que 2.	Day of the Week Lookup (switch)
------
	 Display the name of the day based on a numerical representation (e.g., 1 for Monday, 2 for Tuesday).

- The switch statement evaluates the dayNumber and matches it against case values. Once a match is found, the corresponding code block is executed, and break exits the switch. The default case handles any numbers that don't match.

	Sample input : dayNumber = 3
	Sample output : Day number 3 is: Wednesday  

	Sample input:	dayNumber = 7
	Sample output:  Day number 7 is: Sunday

	Sample input:	dayNumber = 0
	Sample output :  Invalid Day Number
*/

//Ans:                                     --------------------------------------------------------------

/*


let day=+prompt("enter day number : ");

switch(day)
{
    case 1:
        console.log("Monday");break;
    case 2:
        console.log("Tuesday");break;
    case 3:
        console.log("Wednesday");break;
    case 4:
        console.log("thursday");break;
    case 5:
        console.log("Friday");break;
    case 6:
        console.log("Saturday");break;
    case 7:
        console.log("Sunday");break;

    default:
        console.log("Invalid Day Number");
}

*/

//========================================================================================================================================================

/*
Que 3.  Basic Calculator Operations (Switch)
-------
	Perform a mathematical operation (addition, subtraction, multiplication, division) based on an operator symbol.

- The switch statement uses the operator string to determine which calculation to perform on num1 and num2. The default case handles unrecognized operators.

	Sample input : operator = +
	Sample output : Result of 5 + 2 is: 7

	Sample input : operator = *
	Sample output : Result of 5 * 2 is: 10

	Sample input :  num1 = 8;
			num2 = 0;
			operator = /
	Sample output : Error: Division by zero

	Sample input : operator = %
	Sample output : Error: Invalid operator

*/

// Ans:                                             -------------------------------------------------------------

/*

let operator = prompt("enter Type Operator : ");
let a = +prompt("enter a value");
let b = +prompt("enter b value");

switch(operator)
{
    case '+':
        console.log(`Result of ${a} + ${b} is: ${a+b}`);break;

    case '-':
        console.log(`Result of ${a} - ${b} is: ${a-b}`);break;

    case '/':
        console.log(`Result of ${a} / ${b} is: ${a/b}`);break;

    case '%':
        console.log(`Result of ${a} % ${b} is: ${a%b}`);break;

    default:
        console.log("invalid operator");
}

*/
//======================================================================================================================================================

/*
Que 4.	Traffic Light States	(switch)
-------
	Determine the action a driver should take based on the current traffic light color.

- The switch statement uses the lightColor string. Each case corresponds to a specific color and provides the appropriate action message. default covers any unexpected light states.

	Sample input : lightColor = green
	Sample output : Go! It's safe to proceed.

	Sample input : lightColor = red
	Sample output : Stop! Do not proceed.

	Sample input : lightColor = yellow
	Sample output : Prepare to stop. Light is about to turn red.

	Sample input : lightColor = blue
	Sample output : Unknown light state. Exercise caution.
*/

// Ans:

let color= prompt("enter traffic light color number : ");

switch(color)
{
    case 'green':
        console.log("Go! It's safe to proceed.");break;
    case 'red':
        console.log("Tuesday");break;
    case 'yellow':
        console.log("Wednesday");break;
    case 'blue':
        console.log("thursday");break;
    case 5:
        console.log("Friday");break;
    case 6:
        console.log("Saturday");break;
    case 7:
        console.log("Sunday");break;

    default:
        console.log("Invalid Day Number");
}
