function downloadFile(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("file downloaded");
        }, 3000);
    });
}

// async await 
 async function startDownload(){
    console.log("Downloading  started.....");
 

 let result = await downloadFile();  

 console.log(result); // prints  after 2 sec
 console.log("Download complete"); 
 }
 startDownload();