let promise = new Promise((resolve,reject)=>{
    console.log("i am a promise");
});
   
// resolve 
let promise2 = new Promise((resolve,reject)=>{
    console.log("i am a promise 2");
     resolve("success");  // js crreate the funcation , 
});


// rejected
let promise3 = new Promise((resolve,reject)=>{
    console.log("i am a promise 3");
     reject("unsuccess");  // js crreate the funcation , 
});