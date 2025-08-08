/*
Que 1 :Write a 'JavaScript' program to store 10 elements 
in array and print them on a console take the inputs from the user.
*/
//                      ---------------------------------


// let arrsai= +prompt();

// console.log(arrsai);
/*
let a=[];
for(let i=0;i<10;i++)
{
    let num=+prompt('');
      a.push(num);
}

for(let i=0;i<a.length;i++)
{
    console.log(a[i]+" ");
}
*/
//===================================================================================================

/*
Que 2 : 
--------
	write a 'JavaScript' program to Sort the array [45, 3, 25, 78, 12] in ascending and descending order using predefined method.

		- Define an array by taking the elements from the user using the prompt() function and parseInt() to typecast.
		- use the sort() method to sort the array.
		- after sorting the array print the array using the for...of loop.

	Sample Input :
			let numbers = [45, 3, 25, 78, 12];                          numbers.sort((a,b)=>a-b);Ascending order
	Sample output :					                                    numbers.sort((a,b)=>b-a);desending order
			Ascending Order: [3, 12, 25, 45, 78]
			Descending Order: [78, 45, 25, 12, 3]
*/
// Ans:                                        ---------------------------------
/*
let numbers = [45, 3, 25, 78, 12];

numbers.sort((a,b)=>a-b);
console.log(numbers);

numbers.sort((a,b)=>b-a);
console.log(numbers);

*/
//================================================================================================================

/*
Que 3 :
--------
	Write a 'JavaScript' program to Separate Strings and Numbers and print array using the forEach method.

	- Define the array mixed of the string and number type elements.
	- separate the string and the number in separate arrays using filter() method.
	
	sample input :
			let mixedArr = ['apple', 10, 'banana', 20, 'cherry', 30];
	sample output:
			string Array = ['apple', 'banana', 'cherry']
			number array = [10, 20, 30]
*/
//                               ---------------------------------------------------------
/*
let mixedArr = ['apple', 10, 'banana', 20, 'cherry', 30];

let str=mixedArr.filter((ele)=>typeof ele === "string");
let str2=mixedArr.filter((ele)=> typeof ele === "number");

console.log(str);
console.log(str2);
*/
//=======================================================================================================================

/*
Write a 'JavaScript' program to Filter Even and Odd Numbers from array in separate arrays using predefined method.

	- Define the array of the integers.
	- using the filter() method separate the even and odd numbers from the array.

	sample input :
		let numberArray = [2,3,4,5,6,7,8,10,12,13];
	sample output :
		even elements : 2 4 6 8 10 12
		odd elements : 3 5 7 13
*/
//                                          ----------------------------------------
// Ans:

/*
let numberArray = [2,3,4,5,6,7,8,10,12,13];

let even=numberArray.filter((ele)=> ele%2 === 0)
let odd=numberArray.filter((ele)=> ele%2 !== 0)

console.log(even);
console.log(odd);
*/
//======================================================================================================================

/*
Que 5 :
--------
	Write a 'JavaScript' program to print Sum of All array elements using predefined method.

	- Define the numbers array by taking the input from the user using the prompt() function by typecasting into number using parseInt().
	- using the reduce() method add the elements of the array into one variable.

	sample input :
		let numberArr = [1,2,3,4,5,6,7,8,9]
	sample output :
		sum = 45
*/
//   Ans:                          --------------------------------------------
/*
let numberArr = [1,2,3,4,5,6,7,8,9]

let sum = numberArr.reduce((a,b)=>a+b)
console.log(sum)
*/
//=================================================================================================================

/*
Que 6 :
--------
	Write a 'JavaScript' program Convert Names to Uppercase in array using predefined method.
	- Define the string array and insert the elements by taking the input from the user using the prompt() function.
	- convert the each element to uppercase using the map() function.
	- store the converted elements into separate array and print it.

	sample input :
			let namesArray = ["ravindra","rohit","aniket"];
	sample output :
			uppercase names : [ 'RAVINDRA', 'ROHIT', 'ANIKET' ];
*/
//                              -----------------------------------------------

// Ans:
/*
let namesArray = ["ravindra","rohit","aniket"];
let up=namesArray.map((ele,ind)=>ele.toUpperCase())
console.log(up);
*/
//=====================================================================================================================

/*Que 7 :
--------
	Write a 'JavaScript' program to Calculate Average from an Array elements using the predefined method.

	- Define the numbers array and insert elements by taking the input from the user using the prompt() function.
	- calculate the sum of the elements using the reduce() method and find the average by dividing the sum with the length of the array.

	sample input : const nums = [10, 20, 30, 40, 50];
	sample output : average of the array elements : 30
*/
// Ans:                             -------------------------------------------

/*
    const nums = [10, 20, 30, 40, 50];
    let sum = nums.reduce((a, b) => a + b);
    let avg = sum / nums.length;
    console.log(avg);
*/
// =====================================================================================================================

/*
Que 8 :
--------
	Write a 'JavaScript' program to create an array of 10 image names an display the images on the webpage using forEach method.

	- The array should contain the image file path as a element.
	- by taking the img tag inside the document.write() function you have to print the images on the webpage using string interpolation(backtiks).
	- iterate over the array and print insert each element into the img tag inside document.write() function.
*/
//                                      ---------------------------------------------
// Ans:

        let imgArray = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
        imgArray.forEach((img) => {
        document.write(`<img src=${img} height='100px' width='100px'>`);
        });

        