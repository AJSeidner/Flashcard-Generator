var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var fs = require('fs');
var inquirer = require('inquirer');
	//our BasicCard Flash cards being created via BasicCar.js constructor
   	var BasicCard1 = new BasicCard("What is Hoisting?", "JavaScript's default behavior of moving declarations to the top of the current scope.");
    var BasicCard2 = new BasicCard("What is the difference between '==' and '==='?", "'===' is a strict comparison type operator, where as '==' is not.");
    var BasicCard3 = new BasicCard("An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target.  How is it written?", "=>.");
    var BasicCard4 = new BasicCard("What is the array splice() method?  What is it's syntax?", "JavaScript's default behavior of moving declarations to the top of the current scope.");
    var BasicCard5 = new BasicCard("What is a constructor?", "The constructor method is a special method for creating and initializing an object created within a class.");
    var BasicCard6 = new BasicCard("The split() method is used to split a string into an array of substrings, and returns the new array.  What are it's parameters?", "The seperator and the limit.");

    //our ClozeCard Flash cards being created via ClozeCard.js constructor
    var ClozeCard1 = new ClozeCard("The typeof operator returns a string indicating the type of the unevaluated operand.", "typeof");
    var ClozeCard2 = new ClozeCard("The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.", "slice()");
    var ClozeCard3 = new ClozeCard("The join() method joins all elements of an array (or an array-like object) into a string.", "join()");
 	var ClozeCard4 = new ClozeCard("The map() method creates a new array with the results of calling a provided function on every element in the calling array.", "map()");
 	var ClozeCard5 = new ClozeCard("The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).", "apply()");
 	var ClozeCard6 = new ClozeCard("The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.", "reduce()");

//inquirer to start process

inquirer.prompt([
      {
      	type: "list",
        name: "basicOrCloze",
        message: "Welcome to Javascript Flash Card Generator! Would you like a BasicCard or ClozeCard",
        choices: [ "BasicCard", new inquirer.Separator(), "ClozeCard" ]
      }
      ]).then(function(answers) {

      	if(answers.basicOrCloze === "BasicCard"){
	      	inquirer.prompt([
	      	{
	      		type: "list",
	       		name: "basicNum",
	        	message: "Press the number of any card to view the front side, then type in 'flip' to see the answer!",
	        	choices: [ "BasicCard1", new inquirer.Separator(), "BasicCard2", new inquirer.Separator(), "BasicCard3", new inquirer.Separator(), "BasicCard4", new inquirer.Separator(), "BasicCard5", new inquirer.Separator(), "BasicCard6", new inquirer.Separator()]
	      	}
	      	]).then(function(answers) {
      			if(answers.basicNum === "BasicCard1"){
	      			console.log(BasicCard1.front)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(BasicCard1.back);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      		else if(answers.basicNum === "BasicCard2"){
	      			console.log(BasicCard2.front)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(BasicCard2.back);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      			else if(answers.basicNum === "BasicCard3"){
	      			console.log(BasicCard3.front)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(BasicCard3.back);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      			else if(answers.basicNum === "BasicCard4"){
	      			console.log(BasicCard4.front)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(BasicCard4.back);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      			else if(answers.basicNum === "BasicCard5"){
	      			console.log(BasicCard5.front)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(BasicCard5.back);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      			else if(answers.basicNum === "BasicCard6"){
	      			console.log(BasicCard6.front)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(BasicCard6.back);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}

	      	})
        }
        else{
        	inquirer.prompt([
	      	{
	      		type: "list",
	       		name: "clozeNum",
	        	message: "Press the number of any card to view the front side, then type in 'flip' to see the answer!",
	        	choices: [ "ClozeCard1", new inquirer.Separator(), "ClozeCard2", new inquirer.Separator(), "ClozeCard3", new inquirer.Separator(), "ClozeCard4", new inquirer.Separator(), "ClozeCard5", new inquirer.Separator(), "ClozeCard6", new inquirer.Separator()]
	      	}
	      	]).then(function(answers) {
      			if(answers.clozeNum === "ClozeCard1"){
	      			console.log(ClozeCard1.partialText)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(ClozeCard1.fullText);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      		else if(answers.clozeNum === "ClozeCard2"){
	      			console.log(ClozeCard2.partialText)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(ClozeCard2.fullText);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      			else if(answers.clozeNum === "ClozeCard3"){
	      			console.log(ClozeCard3.partialText)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(ClozeCard3.fullText);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      			else if(answers.clozeNum === "ClozeCard4"){
	      			console.log(ClozeCard4.partialText)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(ClozeCard4.fullText);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      			else if(answers.clozeNum === "ClozeCard5"){
	      			console.log(ClozeCard5.partialText)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(ClozeCard5.fullText);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}
	      			else if(answers.clozeNum === "ClozeCard6"){
	      			console.log(ClozeCard6.partialText)
	      			 inquirer.prompt([
	      			 {
	      			 	type:"input",
	      			 	name:"doWeFlip",
	      			 	message:"type 'flip' to see answer"//you don't actually need to do this

	      			 }
	      			 ]).then(function(answers) {
	      			 		if (answers.doWeFlip === "flip"){
	      			 			console.log(ClozeCard6.fullText);
	      			 		}else{
	      			 			console.log("You must type flip");
	      			 		}
	      			 })

	      		}

	      	})
        }
        })

