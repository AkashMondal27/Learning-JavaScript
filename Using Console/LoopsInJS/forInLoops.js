// FOR IN LOOPS MAINLY USE FOR OBJECTS .  It returns the key of the objects
let student={
    name:"Akash Mondal",
    age :22,
    cgpa:8.5,
    ispass: true,
};

for(let i in student){
    console.log(i);
}   

// We can get the key value 
let students={
    name:"Akash Mondal",
    age :22,
    cgpa:8.5,
    ispass: true,
};

for(let key in students){
    console.log("key is :",key," value is :",students[key]);
}   
