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

