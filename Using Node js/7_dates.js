let mydate=new Date();

console.log(typeof mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());


//Date Declaration 
let myCreateDate=new Date(2026,0,26)
console.log(myCreateDate.toDateString())

let myCreateDate2=new Date("2026-09-26");
console.log(myCreateDate2.toLocaleDateString())

let myTimeStem= Date.now()
console.log(myTimeStem)

console.log(myCreateDate.getTime())

//seconds 
console.log(Math.floor(Date.now()/1000))

let newDtae=new Date()

console.log(newDtae.getMonth);

newDtae.toLocaleString("dafault",{
    weekday: "long",
   
})