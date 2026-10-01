

function multi(a , b){
    return(a+b) ;
}

const result1=multi(10, 13)
console.log("Multiple Result  : ",result1)


// //Another example 

function loginMessage(username) {
  return `${username} just logged in`;
}

console.log(loginMessage("Akash")); 
console.log(loginMessage() )  // gives Undefined 


//Rest Operator usecase
function  calculatePrice(...num1){
  return  num1
}

console.log(calculatePrice(10 , 200 , 50))

//Onjcet inside funcation
const user ={
  username:"akash Mondal",
  price:2024,
  location:" Kolkata"
}

function handleObject(anyObj){
  return`Username : ${anyObj.username} and price is : ${anyObj.price}`
}
console.log(handleObject(user))

//Arrays insied a Object
const myNewArray=[10,11,13,16]

function handleArray(getArray){
  return getArray[2]
}

console.log(handleArray(myNewArray))