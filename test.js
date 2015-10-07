function question1(){
	var favNum = prompt('what is your favorite number?');
	return parseInt(favNum); 
}


function question1(){
	var favNum = prompt('what is your favorite number?');
	return parseInt(favNum); 
}

var answer = question1();








function numberFunc(){
	var feelings = prompt('what are you feeling right now?');
	return feelings; 
}


function combo(string, cbFunc){
	alert(string + " " + cbFunc);
}

combo('hell via javascript', numberFunc());






function ticket1(){
	return 'ticket type: coach'
}

function ticket2(){
	return 'ticket type: first class'
}

function airport(string, ticketType){
	alert(string + ' ' + ticketType);
}


airport('You have purchased', ticket1());

airport('You have purchased', ticket2());




//works to remove duplictes from array. Does convert numbers to strings. String work just fine. 

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function eliminateDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}


eliminateDuplicates(names);




var myArrObj = [
{name: 'ryan'
id: 17, 
color: 'white'},

{name: 'bob'
id: 18, 
color: 'black'}
];

myArrObj[1].color


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
names.sort();

names[3].push();


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan', 'Ryan', 'Bart', 'Bart'];

var butts = function(names){
	names.sort();
	for(var i = 0; i < names.length; i++){
		if(names[i] === names[i + 1]){
			console.log('they are the same');
		}
	}
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan', 'Ryan', 'Bart', 'Bart'];

var butts = function(names){
	names.sort();
	for(var i = 0; i < names.length; i++){
		if(names[i] === names[i + 1]){
			names.splice(i, 1); 
		}
	}
}













