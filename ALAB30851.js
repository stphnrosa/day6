//references: https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/
// https://www.geeksforgeeks.org/javascript-program-to-calculate-the-average-of-all-the-elements-present-in-an-array/
//reference: https://www.geeksforgeeks.org/how-to-get-the-longest-string-in-an-array-using-javascript/
//  https://www.geeksforgeeks.org/javascript-array-filter-method/
//https://stackoverflow.com/questions/6809659/changing-the-key-name-in-an-array-of-objects
//https://www.geeksforgeeks.org/javascript-map/

/////////////////////////////////////////////////
                  //  PART 1 //
/////////////////////////////////////////////////
//sum of an array of numbers //
// let myNumbers=[10,20,3,45];

// let sum = 0

// for(let i=0; i<myNumbers.length; i++) {
//     sum += myNumbers[i];
// }
// console.log(sum)

// Take an array of numbers and return the average. //

// let array=[10,20,3,45];

// let sum = array.reduce((acc,curr )=> acc + curr,0);
// let average =sum/array.length; // reduce method is much simpler than other methods! :)

// console.log(average)

//Take an array of strings and return the longest string.//

let array =[
    "Spring",
    "is",
    "here!",
];

// "a" is the first string aka "Spring". "Spring" is then compared to the rest of the strings("is", "here!") to compare which word is longer( this is why we add ".length".)

function longestString(){
    return array.reduce(function(a,b){
        return a.length > b.length ? a: b;
    });
} 
console.log(longestString());

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// let array =[
//     "Eyes",
//     "Lips",
//     "Face",
// ];
// let i = 3
// stringsLongerThan(["Eyes","Lips","Face",],2025);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.//


/////////////////////////////////////////////////
                  //  PART 2 //
/////////////////////////////////////////////////

// Data to test work 
 let data=
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Use callback functions alongside Array methods to accomplish the following:

// Sort the array by age.

// let age =[41,25,19,58,111];
// console.log(age.sort((a,b) => a -b))

//Filter the array to remove entries with an age greater than 50.
function young(age) {
    return age <= 50;
} 
   
let filtered= [41,25,19,58,111].filter(young);
    console.log(filtered)

// Map the array to change the “occupation” key to “job” and increment every age by 1. 

let jobs = [
    {occupation:"Knight", age:41},
    {occupation:"Runner", age:25},
    {occupation:"Fry Cook", age:19},
    {occupation:"Quiz Master", age:58},
    {occupation:"None", age:111},
];

let newArr = jobs.map(myFunction)

function myFunction(job) {
    return{
        job: job.occupation,
        age: job.age + 1
    };
}
 console.log(newArr);

// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.





/////////////////////////////////////////////////
                  //  PART 3 //
/////////////////////////////////////////////////





//  Take an array of numbers and return the average.
//Take an array of strings and return the longest string.
//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 






// //For example,
// //  stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// // Take a number, n, and print every number between 1 and n without using loops. Use recursion.

 n= 12
function count(n){

if (n <=12) { //This is where we stop counting
    console.log("final"); // message that will be shown once we reach 0
    return;

}

console.log(n);
count(1);
}

count(1);

