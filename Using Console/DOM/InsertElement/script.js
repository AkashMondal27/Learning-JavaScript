//create new element 
let newBTN=document.createElement("Button");
newBTN.innerText="Click me";
console.log(newBTN);
// add element at the end of the node (inside).
let div=document.querySelector("div");
div.append(newBTN); 
// at the start of node (inside)
let newBt1=document.createElement("Button");
newBt1.innerText="Click me";
console.log(newBt1);
let di0=document.querySelector("div");
div.prepend(newBt1); 


//add before the node (outside)
let newBtn=document.createElement("Button");
newBtn.innerText="Click me";
console.log(newBtn);
let di1=document.querySelector("div");
div.before(newBtn); 

//add after1 the node (outside)
let newBtn1=document.createElement("Button");
newBtn1.innerText="Click me";
console.log(newBtn1);
let p =document.querySelector("p");
p.after(newBtn1);  
//add a new elements before the body 
let newEle= document.createElement("h1");
newEle.innerHTML="<i>Hi ! I am Akash </i>";
let body= document.querySelector("body");
body.prepend(newEle);

// remmove an element 
let para=document.querySelector("p");
para.remove();