var sayName = function(name){
	alert(name);
}



var getName = function(sayName){
	var name = prompt('what is your name');
	sayName(name);
}

getName(sayName);








var addition = function(firstNum, secondNum){
	return parseInt(firstNum) + parseInt(secondNum);
} 

var multiply = function(firstNum, secondNum){
	return parseInt(firstNum) * parseInt(secondNum);
} 



var operation = function(callback){
	var num1 = prompt('what is the first number');
	var num2 = prompt('what is the second number');
	return callback(num1, num2);
}

operation(addition);

operation(multiply); 