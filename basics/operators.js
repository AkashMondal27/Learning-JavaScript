//  (1) Arithmetic Operators
let a=14;
let b=6;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%*b=",a%b); //modulus operators 
console.log("a**b=",a**b)  //Exponentional means Power  **(a^b=a**b)
 // (2) unary operators  1. increment  2. decrement
 a++;  //14+1=15
 console.log( "a=",a);  
 a--;   //15-1=14
 console.log("a=",a)
  ++a;
  console.log("++a=",a)

  //+=  , a+=1 means a=a+1;
  a+=1;
  console.log(" +=a",a)
  a-=1;
  console.log("-=a",a);
a/=7
  console.log("/a=",a);    

 /* (3) Comparision Operators  :-    
        it will give us true  or false 
                   1. Equal to ==   2.Equal to & type ===  
                   3.Nnot equal to  !=   4. Not equal to & tupe !==
             > ,<, >= ,<=    */
 console.log(" a==b",a==b);
 console.log(" a!=b",a!=b);
 console.log(" a===b",a===b);
 console.log(" a!==b",a!==b);
 console.log(" a<b",a<b);   // now my a=2 & b=6
  console.log(" a>b",a>b);  

  /*  (4)  Logical Operators :
         it will  also  give us  true  or false  
           logical AND  &&
           Logical ORR ||
           Logical NOT ! */
           
   let m =7;
   let n =6;
    let con1 = m<n ;
    let con2 =n<m;
    console.log( "con1 && con2 =", con1 && con2);        
    console.log( "con1 || con2 =", con1 || con2);
   console.log( !(con1));