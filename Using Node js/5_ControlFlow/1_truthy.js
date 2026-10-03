
const username=[]

if(username){
    console.log("Got the user name ")
}else{
    console.log("Don not have any user name ")
}

/* flasy values :- 
      false , 0 , -0, BigIn , 0n , null , undefines , NaN
   Rather then all are Tuthy valuse like :-
        "0" , "false" ," " , [ ] {}  , function(){}   
*/


if(username.length ===0){
    console.log("arrat is empty")
}

const emptyObj={}

if(Object.keys(emptyObj).length === 0){
   console.log("object is empty")
}


