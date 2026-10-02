const user={
    username:"Akash ",
    price:200,

    welcomemessage(){ //Current contex refer through this
        console.log(`Wellcome ${this.username} sir,`)
        console.log("Printing This : ", this)
    }


}

user.welcomemessage()

user.username="Sujoy"
user.welcomemessage()

console.log(this) // in Node environment print ={} , in brower print = window {}

//"this" runs inse object not any functions 
function chai(){
    let username= "akash"
    console.log(this.username)
}
chai() // gives undefined

const chai1= ()=>{ // arrow function
    let username= "akash"
    console.log(this.username)
}
chai() // gives undefined