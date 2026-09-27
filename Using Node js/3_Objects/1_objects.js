//Objects literls 

const symbol=Symbol("key1");

//object cretaion 
const jsUser={
    name:"Akash ",
    age:18,
    "fullname":"Akash Mondal",
    location:"Kolkata",
    email:"akash@gmail.com",
    [symbol] :"mysym"
}

//Access Object 
console.log(jsUser.age);          // Dot notation
console.log(jsUser["location"]);  // Bracket notation
console.log(jsUser["fullname"])
console.log(jsUser[symbol])  // symbole print 

//change any element inside a object 
jsUser.email="Tusher@gmail.com"
console.log(jsUser.email)

//Set /Frize any element 
Object.freeze(jsUser);
jsUser.email="kajal@gmail.com"  // no chnage 
console.log(jsUser)

jsUser.greeting=function(){
    console.log("hELLOW cHai");
}

jsUser.greeting2=function(){
    console.log(`hELLOW  ${this.name}`);
}


console.log(jsUser.greeting())
console.log(jsUser.greeting2())