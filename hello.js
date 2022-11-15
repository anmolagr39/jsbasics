console.log("helloooo");
 const a = 10;
 const b = 15;
 var c = 69;
 console.log(a + b)
 console.log ("a is "+ a)
 if (a > b)
console.log("a");
 else 
 console.log("b")
 for (let i = 0; i< 10; i++)
   console.log(i)
// TypeError
//   throw new Error("cant divide by 0")
//   catch (err){
//       console.log ("err")}
  
function print(x) {
    console.log(x);
}
print (5 + " gt")

// npm init
// npm i c
var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();


const cowsay = require("cowsay");

console.log(cowsay.say({
    text : getRandomJoke.body,
    e : "P P",
    T : "U "
}));

// or cowsay.think()

var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.tags)

var aa = {name: "anmol", foodlikes: "paneer"}
print(aa.foodlikes)

