function downloadFile(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("file downloaded");
        }, 3000);
    });
}

// use of IIFE
( async function (){
    console.log("Downloading  started.....");
 

 let result = await downloadFile();  

 console.log(result); // prints  after 2 sec
 console.log("Download complete"); 
 }) ();

 // to use IIFE ,remove the  async function name  write the code (.....full code....) ();
 //disadvantage :- we can use it only one time .