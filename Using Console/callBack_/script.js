 function sum(a ,b){
    console.log(a+b);
 }

 function calculator ( a,b,callback){  
    callback(a,b);       // sum is a call back funcation             
 }

 calculator(1,2,sum); 
 
 // Asynchronous program 
setTimeout (()=>  calculator(1,2,sum) , 5000);