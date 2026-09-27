//Object Creation

// //single turn Object 
// const tinderUser= new Object()
// console.log(tinderUser)

//Non-Single turn object
const tinderUser1={}

tinderUser1.id="123abc"
tinderUser1.name="Sujoy"
tinderUser1.isLogin=false

// console.log(tinderUser1)


//Non -single turn ,Object insie a Object 

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
console.log(regularObject.fullname.userFullName.Firstname)