
 var c=200
 
if(true){
let a=10;
const b=20
var c=30  // var is Global scope 
}

// console.log(a)
// console.log(b)
console.log(c) // access from outside the "scope{}"


//Nested Function
function one(){
    const username="1 .Akash123"
    const gullname="2 .Akash mondal"
    console.log(gullname)

    function two(){
        const website="AkashVerce"
        console.log(username);
    }
    // console.log(website); // cannot access the it 

    two() //runs 1st 
}
one(); //runs second


// Hosting 
function add(num){
    return  num+=1;
}

console.log("Add : ", add(5))

const Ans=function add1(num){
    return  num+=1;
}

// console.log("Add : ", add1(5)) // syntex error
