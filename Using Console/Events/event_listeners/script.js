let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button was clicked");
});

//we can use it multiple time 
let btn2=document.querySelector("#btn1");
btn2.addEventListener("click",()=>{
    console.log("button was clicked 2nd");
});
let bt3=document.querySelector("#btn1");
const removebtn=()=>{   // we want to remove the button ,so 1st we make it as const .
    console.log("button was clicked 3rd")};
bt3.addEventListener("click",removebtn);
let btn4=document.querySelector("#btn1");
btn4.addEventListener("click",()=>{
    console.log("button was clicked 4th");
});

//we can remove the event listener

bt3.removeEventListener("click",removebtn);