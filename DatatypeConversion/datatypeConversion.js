let score = "33";

console.log(score);
console.log(typeof score);
console.log(typeof(score));

// string to  number 
let newVal= Number(score);
console.log(typeof newVal);

let scoree= "33aba"
let newNum = Number(scoree);
console.log(typeof (newNum));  // NaN  = not a number 
console.log(newNum);

// numm datatype , object to number 
let marks = null
console.log(marks);
console.log(typeof (marks));

let newMarks= Number(marks);
console.log(newMarks);

// undedefined
let mark = undefined ;
console.log(mark);
console.log(typeof (mark));
let newMark= Number(mark);
console.log(newMark);

//true or false 
let markss = undefined ;
console.log(markss);
console.log(typeof (markss));
let newMarkss= Number(markss);
console.log(newMarkss);

// to boolean
let isLoggedInt= 1;
let booleanIsloggedInt= Boolean(isLoggedInt);
console.log(booleanIsloggedInt);

let isLoggedInt1= 0;
let booleanIsloggedInt1= Boolean(isLoggedInt1);
console.log(booleanIsloggedInt1);

let isLoggedInt2= "";
let booleanIsloggedInt2= Boolean(isLoggedInt2);
console.log(booleanIsloggedInt2);

let isLoggedInt3= 1;
let booleanIsloggedInt3= Boolean(isLoggedInt3);
console.log(booleanIsloggedInt3);
/* 1 =>true , 0 => false
"" => false , 
"akash" => true   */