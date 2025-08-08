// Q1 using console.log()

let Name="Raj Malhotra",num=101,branch="CSE",add="Hyderabad",clname="Naresh It";
console.log("Name = "+Name);
console.log("Roll No = "+num);
console.log("Branch = "+branch);
console.log("Address = "+add);
console.log("College Name = "+clname);

// Q2 using doument.write()
document.write("Name = "+Name +"<br>");
document.write("Roll No = "+num +"<br>");
document.write("Branch = "+branch +"<br>");
document.write("Address = "+add +"<br>");
document.write("College Name = "+clname +"<br>");

// Q3 using console.log()

console.log("# # # # #");
console.log("#     #");
console.log("#     #");
console.log("#     #");
console.log("# # # # #");

// Q3

document.write("<pre># # # # #</pre>");
document.write("<pre>#     #</pre>");
document.write("<pre>#     #</pre>");
document.write("<pre>#     #</pre>");
document.write("<pre># # # # #</pre>");


// Q4
let a=20, b=10;

console.log("Addition is : "+(a+b));
console.log("Subtraction : "+(a-b));
console.log("Multiplication is : "+(a*b));
console.log("Division is : "+(a/b));
console.log("Modulus is : "+(a%b));


// Q5
let c=10, d=20;
let sum = Math.abs(-c-d);
console.log("Addition is "+sum);


//  Q6
let s=23;
let r1=s%10;
let e=parseInt(s/10);

console.log("Addition of two digit number is : "+(r1+e));

// Q7

let ss=5,rl=4,rb=5;

console.log(`The area of the square with side ${ss} is:`+(ss*ss));
console.log(`The area of the rectangle with length ${rl} and breadth ${rb} is:`+(rl*rb));
