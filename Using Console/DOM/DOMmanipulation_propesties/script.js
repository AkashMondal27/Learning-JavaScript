// document.querySelector("myId"/"my class" /"tag")
let firstElement=document.querySelector("p");
console.dir(firstElement); 

let allElement=document.querySelectorAll("p");
console.dir(allElement); 

// tagName  properties 
console.log(firstElement.tagName);
 
// inner text 
let div= document.querySelector("div");
console.dir(div);
console.log(div.innerText);
// inner html
console.log(div.innerHTML);

