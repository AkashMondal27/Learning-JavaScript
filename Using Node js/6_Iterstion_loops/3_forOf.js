const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num) // returns the original values 
}

console.log("========= Strings example ==========")
//Sting 

const greeting="Hellow World"

for (const greet of greeting ){
    console.log(greet)
}

//Map
console.log("========= Map  example ==========")


const map= new Map()

map.set("IN" ,"India")
map.set("usa" ,"united  state of america")

console.log(map)


for (const key of map) {
    console.log(key)
} // retirns total array 


for (const [key ,Value] of map) {
    console.log(key , Value)
}

//for in loop  return nothing in map 
console.log("=== for in =====")
for (const [key , Value] in map) {
   console.log(key , Value)
    
}


//Object => forIn Loop
//Arrs =>forOf lop