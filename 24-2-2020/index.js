//https://www.youtube.com/watch?v=4J5hnOCj69w
class Train{
	constructor(){
		this.length=0;
	}
	add(car,content){
		this[car] = content;
		this.length++;
	}
}
let objectTrain = new Train();
objectTrain.add("train 1","content1");
objectTrain.add("train 2","content2");
objectTrain.add("train 3","content3");
objectTrain.add("train 4","content4");
objectTrain.add("train 5","content5");
console.log(objectTrain);
for(let atte in objectTrain){
	console.log(atte);
}
const symLength = Symbol('length');
class Trainsymbol{
	constructor(){
		this[symLength]=0;
	}
	add(car,content){
		this[car] = content;
		this[symLength]++;
	}
}
let objectTrainsym = new Trainsymbol();
objectTrainsym.add("train s 1","content s 1");
objectTrainsym.add("train s 2","content s 2");
objectTrainsym.add("train s 3","content s 3");
objectTrainsym.add("train s 4","content s 4");
objectTrainsym.add("train s 5","content s 5");
console.log(objectTrainsym);
for(let atte in objectTrainsym){
	console.log(atte);
}