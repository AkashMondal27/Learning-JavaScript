/*  For a given array with prices n=5 #items [250, 245, 300, 900, 501]. 
All items have an offer of 10% off on them, change the array to store that price after applying offer. */

let items = [250, 245, 300, 900, 501];
let i = 0;

for (let val of items) {
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log("The value after offer is:", items[i]);
    i++;
}

console.log("Final array after applying offer:", items);
