let buttnMode=document.querySelector("#mode");
let currMode= "light";
 buttnMode.addEventListener("click",()=>{
       if( currMode==="light"){
            currMode="dark";
             document.querySelector("body").style.backgroundColor="black";
             document.querySelector("body").style.color = "red";

             
        }else{
            currMode="light";
            document.querySelector("body").style.backgroundColor="white";
            document.querySelector("body").style.color = "navy";

        }
          console.log(currMode);  
        });