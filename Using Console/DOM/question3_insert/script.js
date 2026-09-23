let newEle=document.createElement("button");
newEle.innerText="CLICK ME ";
newEle.style.color="white";
newEle.style.backgroundColor="red";
let body=document.querySelector("body");
body.prepend(newEle);
