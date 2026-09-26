//Array decleration 
const myArr=[10,20,1,2,5,]
const Arr1=["akash", "mondal",1,2,3,10, "fruits"]

console.log(myArr);
console.log(Arr1)

//Arrar Methods 

myArr.push("akash") //Add element at last 
console.log("Push",myArr)

Arr1.pop(); // remove the last element 
console.log("Pop",Arr1)

myArr.unshift("unshift"); // add  element at 1st 
console.log("unfhift : " ,myArr)

myArr.shift();
console.log("Shift",myArr) // Remove element from 1st 

console.log(myArr.includes(2))
console.log(typeof(myArr.includes(2)))

console.log(myArr.indexOf(1));
console.log(myArr.indexOf(101)); // if not exists then return "-1"

const joinArr=myArr.join(); // convert in String
console.log(joinArr)

//Slice Mehods  :only show the element from starting index to (endingIndex-1), 
  //            Do not chnage the Original Arrary
const AkArr=[1,40,29,10 ,"akash", "mondal","chhora"]

const akA1=AkArr.slice(0,4);
console.log("Origial Array: ", AkArr)
console.log(akA1)


//splice :- It cut the original arrary from starting index to (endingIndex-1), 
//          and only show this part 
const akA2=AkArr.splice(0,4)
console.log("Origial Array: ", AkArr)
console.log(akA2)