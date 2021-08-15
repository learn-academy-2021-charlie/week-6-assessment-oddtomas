// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.


describe("occupations", () => {
  var people = [
    { name: "ford prefect", occupation: "hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
  
  it("takes in an array of objects and returns an array with a sentence about each person with their names capitalized", () => {
    expect(occupations(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.
//make a function that takes an arr
//map over the array
const occupations = (arr) => arr.map(function(array) {
  //split the names specifically to capitalize the first letters
  var splitNames = array['name'].split(" ")
  //Full name = name one, character at [0] to upper case slice the remaining characters of string from (1)-> on. name two, character at [0] to upper case, slice the remaining characters of string from (1)-> on
  var capitalizedName = splitNames[0].charAt(0).toUpperCase() + splitNames[0].slice(1) + " " + splitNames[1].charAt(0).toUpperCase() + splitNames[1].slice(1)
  //assign occupation to a variable
  var occupation = array['occupation']
  //assign a final array with name "is a" occupation.
      convertedArr =  capitalizedName+ " is a " + occupation + "."
      //return the array
      return convertedArr
  })


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("moduloThree", () => {
  var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]  
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(moduloThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(moduloThree(hodgepodge2)).toEqual([ 2, 1, -1 ])

  })
})



// b) Create the function that makes the test pass.
//create a method that takes an array
const moduloThree = (arr) => {
//assign an empty array to be filled
  var newArr = []
  //iterate through the array
   for (var i = 0; i < arr.length; i++){
     //check the datatype of the current value, if it's a number
       if(typeof arr[i] === 'number'){
         //push that value module 3 into the empty array
           newArr.push(arr[i] % 3)
       }
   }
   //return the finished array of only the remainders of number datatypes divided by 3
   return newArr

}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.
