const myObj={
    "js":"java script",
    "cpp":"c ++",
    "rb":"ruby",
    "swipt":"swipt ny apple"
}

for (const key in myObj) {
  console.log(`${key} : ${myObj[key]}`) 
}

//Arrays 
console.log("====== Array in forin==========")

const arr=["tushar",2,3,"sumon",5,6,"akash"]

for (const key in arr) {
   // console.log("key are : ", key) // Returns the keys , not the original values 

    console.log(arr[key])
}