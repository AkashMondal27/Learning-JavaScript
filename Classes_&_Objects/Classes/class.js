class tataCar{
    constructor(){  // creatig a constructor 
        console.log("creating new objects");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){ // veriable defined
        this.brand=brand;
    }
}

let neno=new tataCar(); // new objects where i have stop & start funcation available 
neno.setBrand("nenoCar");