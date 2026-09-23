

class person {   // person => parent class name 
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
    work(){
        console.log(" do nothing ");  // parent class work funcation
    }
}

class engineer extends person {   // engineer => child class name
    Work(){
        console.log("solve problem"); // child class work funcatin
    }
}
let akashObj=new engineer(); 
  console.log(akashObj.eat());
   console.log(akashObj.work());    // if child & patent have same methods childs methods will be used ,it's called Method Overrriding.
