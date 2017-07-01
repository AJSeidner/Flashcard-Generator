var BasicCard = require('./BasicCard.js');

var ClozeCard = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partialText = this.text.replace(this.cloze,"________");
	this.fullText = this.text
}

//could not get prototype to add correctly


module.exports = ClozeCard;