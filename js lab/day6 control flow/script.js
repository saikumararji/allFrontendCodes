/*
Que 1.  Running a Fixed Number of Test Cases ( For loop )
------
	 A software testing script needs to execute a set of tests a predefined number of times.

- The for loop iterates testRuns times. Each iteration simulates one test case execution. This ensures consistency in repetitive testing.

	Sample input : testRuns = 10
	Sample output : --- Automated Test Execution ---
			Running Test Case #1: Checking system performance...
			Running Test Case #2: Checking system performance...
			Running Test Case #3: Checking system performance...
			Running Test Case #4: Checking system performance...
			Running Test Case #5: Checking system performance...
			Running Test Case #6: Checking system performance...
			Running Test Case #7: Checking system performance...
			Running Test Case #8: Checking system performance...
			Running Test Case #9: Checking system performance...
			Running Test Case #10: Checking system performance...
			--- All 10 Test Cases Completed ---
*/
//                       ---------------------------------------------------------
//Ans:
/*
let testRuns = +prompt("enter test runs");
console.log("--- Automated Test Execution ---");
for(let i=1; i <= testRuns; i++)
{
    console.log(`Running Test Case #${i}: Checking system performance...`);
}
console.log("--- Automated Test Execution ---");
*/
//======================================================================================================================================================

/*
Que 2.	Calculating Sum of First 'N' Numbers
-------
	 Calculate the total sum of all positive integers up to a given number 'N'.

 The for loop iterates from 1 up to N. In each iteration, it adds the current number (i) to totalSum, effectively summing all numbers in the range.

	Sample input : 5
	Sample output : --- Summing Numbers from 1 to 5 ---
			Adding 1. Current sum: 1
			Adding 2. Current sum: 3
			Adding 3. Current sum: 6
			Adding 4. Current sum: 10
			Adding 5. Current sum: 15
			Total sum of first 5 numbers is: 15
*/
//Ans:                      -----------------------------------------
/*
let n=+prompt("enter n value :");

console.log(`--- Summing Numbers from 1 to ${n} ---`);

let sum=0;

for(let i=1; i<=n; i++)
{
    sum+=i;
    console.log(`Adding ${i}. Current sum: ${sum}`);
}
console.log(`Total sum of first ${n} numbers is: ${sum}`);
*/

//=========================================================================================================================================

/*
Que 3. 	Displaying Progress Bar Segments
-------
	 Render a visual progress bar by displaying a fixed number of segments.

- The for loop iterates for a predefined number of segments. Each iteration adds one segment, building a visual representation of progress.

	Sample input : totalSegments = 5, segmentCharacter = * 
	Sample output : --- Rendering Progress Bar ---
			Progress: *
			Progress: **
			Progress: ***
			Progress: ****
			Progress: *****
			--- Progress Bar Complete ---

	Sample input :  totalSegments = 10, segmentCharacter = =
	Sample output :  --- Rendering Progress Bar ---
			Progress: =
			Progress: ==
			Progress: ===
			Progress: ====
			Progress: =====
			Progress: ======
			Progress: =======
			Progress: ========
			Progress: =========
			Progress: ==========
			--- Progress Bar Complete ---
*/
//Ans:                      ----------------------------------------

/*
let segmentCharacter = prompt("enter segment character : ");


   let totalSegments =+ prompt("enter no of Segments : ");

   console.log("--- Rendering Progress Bar ---");

    for(let i=1; i <= totalSegments; i++)
    {
        let star=" ";
        for(let j=1;j<=i;j++)
        {
            star+=segmentCharacter+" ";
        }
        console.log(`Progress: ${star}`);
    }

 console.log("--- Progress Bar Complete ---");

*/
//=============================================================================================================================

/*

let numberOfTrials = +prompt("enter n value :");
let heads = 0;
let probability = 0;

for(let i=1; i<= numberOfTrials; i++){
    let randomNumber = Math.random();
    if(randomNumber < 0.5){
        heads++;
    }
}

probability = heads / numberOfTrials * 100;
console.log(`${numberOfTrials} Coin Toss Trials`);
console.log("Total Heads: ",heads);
console.log(`Estimated Probability of Heads: ${probability}`)


*/



