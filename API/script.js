  const URL= "https://catfact.ninja/facts";
  const factPrint= document.querySelector("#facts");
  const btnn= document.querySelector("#btn");
 

const getFacts =  async ()=>{ 
  console.log("gating data....");
  let response = await fetch(URL);  //asynchronous program so use awit .
  console.log(response);   // json formate 
  let data=await response.json();  // cob=nvart to normal usable data
  // console.log(data);
   console.log(data.data[0].fact);
   factPrint.innerText=data.data[1].fact;
};  
 btnn.addEventListener( "click", getFacts);
// getFacts(); 
// requests which are use to return data ,are called GET REQUEST 