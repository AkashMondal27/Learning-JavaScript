// Arrray Push
//push() does not return the combined array. It returns the new length of the array.

const marvel_heros=["thor","Ironman","spderman"]
const dc_heros=["superman","flash","batman"]
 
const heros= marvel_heros.push(dc_heros);
console.log(heros)

//Array Concat()
//Use concat() when you want to create a new combined array:

const fruits = ["Apple", "Mango"];
const moreFruits = ["Banana", "Orange"];

const allFruits = fruits.concat(moreFruits);

console.log(allFruits);


//Spread :- every elemet of of every arry inside an Array
const a=['A','B','C']
const b=["a","b","c"]
  
const ab=[...a ,...b]
console.log(ab)


//flat()  :- if we have multiple array inside a Array & want a single Array
const anotherAA=[1,2,3,[4,5,6],7,[6,7,[8,9]]]
const real_anotherAA=anotherAA.flat(Infinity)

console.log(real_anotherAA)

//make a single element/word a array

console.log(Array.isArray("Akash Mondal"))
console.log(Array.from("Akash Mondal"))

// Returns Empty array []
console.log(Array.from({name:"AKASH"}));

