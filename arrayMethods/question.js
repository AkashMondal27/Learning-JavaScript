/* Create an array to store some  company ,["boomberg","
microsoft","uber","google","ibm","netflex"]  
1>  remove the first company from the array 
2>remove uber and add ola in place
3.>add Amazon at the end  */

let companys=["boomberg","microsoft","uber","google","ibm","netflex"]  
companys.shift();
console.log(companys);
companys.splice(1,1,"ola");
console.log(companys);
companys.push("amazon");
console.log(companys);