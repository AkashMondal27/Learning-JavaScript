/* 2 tyoes of data type  in js  :- 1. primitive   2. non primitive
primitive:- Number,String,boolean,Undifinied,Null,BigInt,Symbol
non promitive :- Objects  */
let age=" 24";
let prize =" 102.4"
// string data type 
let fullName=" Akash Mondal";

//boolean 
isFollow=" true";

//Undifinied
 let x;
 console.log("x") 
  //null
  let a = null;
  // bigInt
  let B = BigInt(" 4545")  
 // Object 
  const student= {
       fullName :" Aakash Mondal",    // in this object fullname is a"key"  & akash is " value"
       age : 20,       //to access any key we can do 2 things  1. obj.key   2.obj["key" ]  
       cgps : 8.2 ,
       isPass : true,

  };  
      // to chance the any vlue form object 
      student["age"]= student ["age"] +1 ;
      console.log(student["age"]);
  