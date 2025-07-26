// <1> slice  => returns part of strings 
let str="good morning";
console.log(str.slice(1,5));

//<2>  concat join 2 or multiple strings 
let str1=" Good Morning ";
let str2= "Coders.";
let str3= " How are you ?"
 let finalstr=str1.concat(str2,str3) +" Everything good ? ";
 console.log(finalstr);

//<3>  replace 
let str4=" Good Morning ";
console.log(str4.replace("Morning","Evening")); 

let str5="hellow";
console.log(str5.replace("h","y"));

//<4> chatAt => charcter return 
let str6=" I love Coding ";
console.log(str6.charAt(4));