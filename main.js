
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




