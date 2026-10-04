for(let index =0; index<10; index++){
    const element = index;
    console.log(element)
}

console.log("==========Example of Array looping ========")
//Arrays in looping
let Array=["A","b","c"];

console.log(Array.length)

for(let i=0;i<Array.length;i++){
    const element = Array[i];
    console.log(element)
}

console.log("==========Example of Break ========")
//Break 
for(let i=0;i<20;i++){
    if(i==7){
        console.log("Thala for a reason")
        break;
    }
    
    console.log(`value od i is ${i}`)
}

//Continue 
console.log("==========Example of Continue ========")

for(let i=0;i<20;i++){
    if(i==7){
        console.log("Thala for a reason")
       continue;
    }
    
    console.log(`value od i is ${i}`)
}