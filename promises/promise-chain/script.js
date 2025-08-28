function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("print data 1");
            resolve("succes")
        },5000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("print data 2");
            resolve("succes")
        },5000);
    });
} 

// promise chain
console.log("fatching data 1");
asyncFunc1().then((res)=>{
  console.log("fatching data 2");
   asyncFunc2().then((res)=>{});
});