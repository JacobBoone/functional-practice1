
// 1.


var tripleFive = function(){
	for( var i=0; i<3; i++){
		console.log("Five!")
	}
}
tripleFive();



// 2.



var lastLetter = function(word){
	return word.slice(-1);
}

lastLetter('island')
lastLetter('hello')
lastLetter('your mom')


// 3.

var square = function(x){
	return x *x ;
}

square(3)
square(5)

// 4.



var negate = function(x){
	return -(x);
}

negate(5)
negate(-8)


//  5.


var toArray = function(x,y,z){
	return [x,y,z];
}

toArray(1, 4, 5)
toArray(8, 9, 10)


//   6.


var startsWithA = function(x){
	var firstLetter = x[0];
	var alwaysLower = firstLetter.toLowerCase();

	if(alwaysLower === "a"){
		console.log("True");
	}
	else{
		console.log("False");
	}
}

startsWithA('aardvark')
startsWithA('bear')


//    7.

var excite = function(x){
	return [x +"!!!"];
}

excite('Yes')
excite('Javascript is the DEVIL')



//    8.


var sun = function(x){
	var alwaysLower = x.toLowerCase();
	var threeLetters = alwaysLower.indexOf("sun");
	
	if(threeLetters >= 0){
		console.log("True");
	}
	else{
		console.log("False");
	}
}


sun('sundries')


//     9.


var tiny = function(x){
	if(x >= 0 && x <= 1){
		return "True"
	}
	else{
		return "False"
	}

}


tiny(0.3)
tiny(14)
tiny(-5)









