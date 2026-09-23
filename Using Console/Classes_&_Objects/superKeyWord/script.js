

class person {   // person => parent class name 
    constructor(){
        console.log(" enter parent constuctor");
        this.species="homo sepience ";
    }

    eat(){
        console.log("eat");
    } 
}

class engineer  extends person{   // engineer => child class name
    constructor(branch){ 
        console.log(" enter child constuctor");
        super() // to invoke the parent class constructor 
        this.branch=branch;
    }
    Work(){
        super.eat(); // it will invoke the eat funcation 
        console.log("solve problem"); // child class work funcatin
       console.log(" enter exit constuctor");
    }
}
let akashObj=new engineer("computerc Science engineer ");  

console.log(akashObj);
console.log(akashObj.Work());
