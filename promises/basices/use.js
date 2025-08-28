const getPromise =()=>{
    return  new Promise ((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
    });
};
let promise=getPromise();
promise.then(()=>{  // .then use for gullfilled
    console.log("promise fullfiled");
})  

// rejected 
const getPromise2 =()=>{
    return  new Promise ((resolve,reject)=>{ 
        console.log("i am a promise");
        reject("errr");
    });
};
let promise2=getPromise2();
promise2.then(()=>{  // .then use for gullfilled
    console.log("promise fullfiled");
})  
promise2.catch (()=>{
    console.log("rejected");
})
