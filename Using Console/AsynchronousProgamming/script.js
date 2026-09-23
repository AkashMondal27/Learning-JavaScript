/*  Due to synchronous programming ,sometime importent instructions get blocked due to some previous instructions , 
   which causes a delay in the UI . Asynchronous code excution allows to next instructions immediately and 
   does not block the flow */
  
  
  function hello(){
    console.log("AKASH MONDAL");
  }

setTimeout(hello,2000)  // timeout() use ms   2s=2000ms

  console.log(" 1st print ");
// arrow funcation
setTimeout(()=>{
    console.log("Akash Mondal");
}, 4000 ); 

console.log("2nd print");