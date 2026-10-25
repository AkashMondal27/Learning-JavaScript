const number= [ 1,2,3,4,5,6,7,8,9,10]

const newNum= number.map((num)=>{
    return num + 10
});

console.log("Numbers", number)
console.log("New Nums" ,newNum);

console.log("===== channing =========")

const newNum1= number
                    .map((num)=> num *10) // original array [ 1,2,3,4,5,6,7,8,9,10]
                    .map((num)=> num + 1) // now the array change by the 1st map so , [ 10,20,30,40,50,60,70,80,90,100]

console.log("Chnannig example ",newNum1)                    