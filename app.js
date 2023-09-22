
//Chapter 17-20

//Question No 1

// var multiArray = [];
// console.log("Multidimensional Array:");
// console.log(multiArray);

//Question No 2

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log("Matrix:");
// for (var i = 0; i < matrix.length; i++) {
//     console.log(matrix[i].join(" "));
// }

//Question No 3

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

//Question No 4

// var tableNumber = parseInt(prompt("Enter a number to show its multiplication table:"));
// var tableLength = parseInt(prompt("Enter length multiplication table:"));
// console.log("Multiplication Table for " + tableNumber + ":");
// console.log("Length : " + tableLength );

// for (var i = 1; i <= tableLength; i++) {
//     var result = tableNumber * i;
//     console.log(tableNumber + " x " + i + " = " + result);
// }

//Question No 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// console.log("\n")
// for (var i = 0; i < fruits.length; i++) {
//     console.log("Element at index " + i + " is " + fruits[i]);
// }

//Question No 6

// var outputDiv = document.getElementById("output");

// var countingSeries = "Counting: ";
// for (var i = 1; i <= 15; i++) {
//     countingSeries += i;
//     if (i < 15) {
//         countingSeries += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + countingSeries + "</p>";

// var reverseCountingSeries = "Reverse counting: ";
// for (var i = 10; i >= 1; i--) {
//     reverseCountingSeries += i;
//     if (i > 1) {
//         reverseCountingSeries += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + reverseCountingSeries + "</p>";

// var evenSeries = "Even: ";
// for (var i = 0; i <= 20; i += 2) {
//     evenSeries += i;
//     if (i < 20) {
//         evenSeries += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + evenSeries + "</p>";

// var oddSeries = "Odd: ";
// for (var i = 1; i <= 19; i += 2) {
//     oddSeries += i;
//     if (i < 19) {
//         oddSeries += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + oddSeries + "</p>";

// var series = "Series: ";
// for (var i = 2; i <= 20; i += 2) {
//     series += i + "k";
//     if (i < 20) {
//         series += ", ";
//     }
// }
// outputDiv.innerHTML += "<p>" + series + "</p>";

//Question No 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// userInput = userInput.toLowerCase();
// var itemFound = false;

// var foundIndex = -1;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         itemFound = true;
//         foundIndex = i;
//         break;
//     }
// }
// if (itemFound) {
//     console.log("'" + userInput + "' is available at index " + foundIndex + ".");
// } else {
//     console.log("We are sorry. " + userInput + " is not available in our bakery.");
// }

//Question No 8

// var A = [24, 53, 78, 91, 12];
// var largestNumber = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }
// console.log("Array items: " + A.join(", "));
// console.log("The largest number is " + largestNumber);

//Question No 9

// var A = [24, 53, 78, 91, 12];
// var smallestNumber = A[0]; // Assume the first number is the smallest
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//         smallestNumber = A[i];
//     }
// }
// console.log("Array items: " + A.join(", "));
// console.log("The smallest element is " + smallestNumber);

//Question No 10

// for (var i = 1; i <= 20; i++) {
//     var multipleOf5 = i * 5;
//     console.log(multipleOf5);
// }


// CHAPTER 21-25

// QUESTION 1

// var fName=prompt("Enter your first name: ")
// var lName=prompt("Enter your last name: ")
// var fullName;
// fullName=fName+" "+lName;
// alert("Welcome "+fullName);

// QUESTION 2

// var favMobile = prompt("Please enter your favourite mobile phone model: ");
// document.write(favMobile + "<br>" + "Length of string: " + favMobile.length);

// QUESTION 3

// var word = "Pakistani";
// for (var i = 0; i < word.length; i++) {
// if (word[i]=="n")
// {
//     document.write("String: Pakistani"+"<br>Index of 'n': "+i);
// }
// }

// QUESTION 4

// var string = "Hello World";
// var count, x;
// for (var i=0; i<string.length; i++)
// {
//     if (string[i]=="l")
//     {
//         count++;
//         x=i;
//     }
//     if (i==string.length-1)
//     {
//         document.write("String: "+string+"<br>");
//         document.write("Last index of 'l': "+x);
//     }
// }

// QUESTION 5

// var string = "Pakistani";
// var i=3;
// document.write("String: "+string+"<br>");
// document.write("Character at index 3: "+string[i]);

// QUESTION 6

// var fName=prompt("Enter your first name: ")
// var lName=prompt("Enter your last name: ")
// var fullName;
// fullName = fName.concat(" ", lName);
// alert("Welcome "+fullName);

// QUESTION 7

// var replace = "Islam";
// var h;
// var city = "Hyderabad";
// var nString = "";
// document.write("City: "+city+"<br>");
// for (var i=0; i<city.length; i++)
// {
//     if (i!="r")
//     {
//         h+=city[i];
//     }
//     if (i=="r")
//     {
//         h+=city[i];
//         break;
//     }
// }
// for (var i=0; i<5; i++)
// {
//     nString+=replace[i];
// }
// for (var i=5; i<city.length; i++)
// {
//     nString+=city[i];
// }
// document.write("After replacement: "+nString);

// QUESTION 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var nMessage = message.replace(/and/g,"&");
// document.write(nMessage);

// QUESTION 9

// var string = "472";

// document.write("Value: "+string+"<br>Type: "+typeof string+"<br>");
// string= Number(string);
// document.write("Value: "+string+"<br>Type: "+typeof string+"<br>");

// QUESTION 10

// var input = prompt("Enter an input: ");
// document.write("User input: "+input+"<br>");
// var nString = input.toUpperCase();
// document.write("Upper case: "+nString);

// QUESTION 11

// var input = prompt("Enter an input: ");
// document.write("User input: "+input+"<br>");
// var nString = input[0].toUpperCase();
// for (var i=1; i<input.length; i++)
// {
//     nString+=input[i];
// }
// document.write("Title case: "+nString);

// QUESTION 12

// var num = 33.36;
// var string = num.toString().replace(".", "");
// document.write("Number: "+num+"<br>");
// document.write("Result: "+string);