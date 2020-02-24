const idSym1 = Symbol("id1");
const idSym2 = Symbol("id2");
const age = "age";
const city = "city";
const name = "name";
const id = "id";
const nameObj = {
	firstName : "Pankaj",
	lastName : "Kumar"
}
let user = {
	[id] : 1234,
	[name] : "Pankaj Kumar",
	[city] : "Ranchi",
	[age] : 34,
	[age] : 35,
	[idSym1] : 3789123,
	[idSym2] : 1111111,
	nameObj : nameObj
}
console.log(user);
const objectPropertyNameArr = Object.getOwnPropertyNames(user);
console.log(objectPropertyNameArr);
const objectSymbolArr = Object.getOwnPropertySymbols(user);
console.log(objectSymbolArr);

for(let attr in user){
	console.log(attr);
}

var sym1 = Symbol.for("cat");
var sym2 = Symbol.for("cat");
console.log(sym1===sym2);

const RED1 = "red";
const ORANGE1 = "orange";
const YELLOW1 = "yellow";
const BLUE1 = "blue";
const cat1 = "blue";

function getThreatLevel1(color){
	switch(color){
		case RED1 : 
		return 'RED';
		case ORANGE1 :
		return "ORANGE";
		case YELLOW1 :
		return "YELLOW";
		case BLUE1 :
		return "BLUE" ;
		default :
		return "default";
	}
}
console.log(getThreatLevel1(cat1));

const RED = Symbol("red");
const ORANGE = Symbol("orange");
const YELLOW = Symbol("yellow");
const BLUE = Symbol("blue");
const cat = "blue";

function getThreatLevel(color){
	switch(color){
		case RED : 
		return 'RED';
		case ORANGE :
		return "ORANGE";
		case YELLOW :
		return "YELLOW";
		case BLUE :
		return "BLUE" ;
		default :
		return "default";
	}
}
console.log(getThreatLevel(cat));