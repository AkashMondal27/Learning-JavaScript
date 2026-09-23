// the way to have embedded expressions in strings.
let str=`AkashMondal`
console.log(str);

//string iinterpolation 
let obj={
    name:"AkashMondal",
    age:21,
    cgpa:9,
}
// normal way 
console.log("the name of the student is",obj.name,"his age is",obj.age,"and cgpa is ",obj.cgpa);
//templateLiterals
console.log(`the name of the student is ${obj.name}His age is ${obj.age} and his cgpa is ${obj.cgpa}`)