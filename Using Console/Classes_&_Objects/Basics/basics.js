const employee= {
    calcTax(){
        console.log("tax rate is 10 %");
    },
};

const akashMondal1 ={
    salary: 20000,
};
const akashMondal2 ={
    salary: 20000,
};

const akashMondal3 ={
    salary: 20000,
};
const akashMondal4 ={
    salary: 20000,
    calcTax(){
        console.log("tax rate 20%");  //if objets & prototype have same metghod, objects method will be used.
    }
};


akashMondal1.__poto__  =employee; // use  to set prototype 
akashMondal2.__poto__  =employee;
akashMondal3.__poto__  =employee;
akashMondal4.__poto__  =employee;