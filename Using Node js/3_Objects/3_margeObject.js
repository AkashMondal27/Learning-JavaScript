const jsUser={
    name:"Akash ",
    age:18,
    "fullname":"Akash Mondal",
    location:"Kolkata",
    email:"akash@gmail.com",
   
}

const regularObject={
    email:"sum@gmail.com",
    fullname:{
        userFullName: {
            Firstname: "Sumon",
            lastname:'ghosh'
        },
        customarFullName:{
            Firstname: "TRISHAN",
            lastname:'dasggupta'    
        }  
    }
}

//Marge the object
const margeObject=Object.assign({},jsUser,regularObject)
console.log("================== Marge  Object ===================")
console.log(  margeObject)

//Spread
const  spObj={...jsUser ,...regularObject}
console.log("================== Spread Object ===================")
console.log( spObj)

//Get he keys and values 
console.log("================== get key & value ===================")
console.log("Keys: ", Object.keys(jsUser));
console.log("values : ",Object.values(jsUser))

