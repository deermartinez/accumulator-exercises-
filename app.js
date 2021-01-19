
//  1
// Here we ask the user if they eat fish, and store the result (true/false) in a variable.
var fish = confirm("Do you like fish?");
  if (fish){
      document.write("Fish is rich in B12");
  } else {
      document.write("You must be a meateater")
  }
// If the user eats fish (eatFish === true) doument.write, "Fish is rich in B12".
// If the above condition isn't met (eatFish !== true), doument.write, "You must be a meateater".
// 2
// Ask the user what year they were born, and store their response to a variable.
// If the user was born before 1997, alert "You are in Generation Z"
// Else if the user was born after 1997, alert "You are a millennial!"
// If neither of the previous conditions was true (birthYear === 1995) we alert "You inched by!"
var generation = prompt("What year were you born?");
  if (generation > 1997){
      alert ("You are in Generation Z");
  }else if(generation <1997){
     alert("You are a millenial or older");
  }else{
      alert("You inched by");
  }
// 3//
// Create an array called  animals.
// Log the length of the  animals array to the document
// Log an animal in the cat family.
// Log the animal dog.
// Log the animal bird.
// Log the animal[13]. //what result do you get
      //undefined
// Add an new animal to the [2] position of the array with out changing the array
var animals = ["Dog", "Cat", "Bird"];
console.log(animals.length);
console.log(animals[1]);
console.log(animals[0]);
console.log(animals[2]);
console.log(animals[13]);
//undefined
// animals[2] = "new animal";
animals.splice(2,0,"new animal");
console.log(animals);
//4//
// Created an array named myBands.
// Created a prompt to get the user's favorite band.
// Converts the user's answer to lowercase.
// Now we check the myBands array to see if it contains the user's answer.
// If the user's band is not in the array...
//  if (myBands.indexOf(userGuessLower) === -1) {
// If it is in the array...
var myBands = ["band one", "band two", "band three"];
var userBands = prompt("What is your favorite band?");
var low = userBands.toLowerCase();
  if (myBands.indexOf(low)===-1){
      document.write("wow");
  }else{
      document.write("no")
  }
console.log(userBands.toLowerCase);
//5//
// song-object
// Create a constructor function called Song. Song should take in two arguments, title and artist, 
//which should both be added as properties when the Song constructor function is used. 
//The Song function should also have a method called play on its prototype. 
//When called, the play function should console.log the name of that specific song 
//preceded by the word 'Playing:'.
// function should also have a method called play on its prototype.
// When called, the play function should console.log the name of that specific song
// preceded by the word 'Playing:'.

function Song(title,artist){
  this.title = title;
  this.artist = artist;
}
Song.prototype.play = function(){
  console.log("Playing " + this.title  +  this.artist)
}

var song1 = new Song('Art One ', 'Song One' );
var song2 = new Song('Art Two ',  'Song Two' );
var song3 = new Song('Art Three ', 'Song Three' );

song1.play();
song2.play();
song3.play();



/*6//
----------------------------------------
CHALLENGE
----------------------------------------
Write function named sum that will take an array of numbers and return the sum of them.
// // Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/
var x = sum(1,2,3);
console.log(x);

function sum(a,b,c){
    return a+b+c;
}


//7/*
// ----------------------------------------
// CHALLENGE
// ----------------------------------------
// Write function named doubleLetters that will take a string and double every letter in the string
// Example: if you pass it "abc" then it should return "aabbcc"
// */

var double = "abcd";

function doubleLetters(double){
    var output = "";

    for( var i = 0; i < double.length; i++){
        output += double[i] + double[i];
    }
    return output;
}
console.log(doubleLetters(double));

/*8//
----------------------------------------
CHALLENGE
----------------------------------------
Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled
// Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

let numbers = [1,2,3];
function doubleNumbers(numbers){
    return numbers.map(x=> x*2);
} //.map 
console.log(doubleNumbers(numbers))



