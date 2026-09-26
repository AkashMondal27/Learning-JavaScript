let text = "  Akash Mondal  ";


// 1. at()
console.log(text.at(2));
// A


// 2. charAt()
console.log(text.charAt(2));
// A


// 3. charCodeAt()
console.log(text.charCodeAt(2));
// 65


// 4. codePointAt()
console.log(text.codePointAt(2));
// 65


// 5. concat()
console.log("Akash".concat(" ", "Mondal"));
// Akash Mondal


// 6. endsWith()
console.log(text.endsWith("  "));
// true


// 7. includes()
console.log(text.includes("Mondal"));
// true


// 8. indexOf()
console.log(text.indexOf("M"));
// 8


// 9. lastIndexOf()
console.log("hello hello".lastIndexOf("hello"));
// 6


// 10. startsWith()
console.log(text.startsWith("  A"));
// true


// 11. slice()
console.log(text.slice(2, 7));
// Akash


// 12. substring()
console.log(text.substring(2, 7));
// Akash


// 13. substr()
console.log(text.substr(2, 5));
// Akash


// 14. split()
console.log("HTML,CSS,JS".split(","));
// ["HTML", "CSS", "JS"]


// 15. replace()
console.log("Hello Akash".replace("Akash", "Tushar"));
// Hello Tushar


// 16. replaceAll()
console.log("JavaScript JavaScript".replaceAll("JavaScript", "JS"));
// JS JS


// 17. search()
console.log(text.search("Mondal"));
// 8


// 18. match()
console.log("Hello 123".match(/\d+/));
// ["123"]


// 19. matchAll()
let result = "A1 B2 C3".matchAll(/\d/g);

for (let match of result) {
    console.log(match[0]);
}
// 1
// 2
// 3


// 20. repeat()
console.log("Hi ".repeat(3));
// Hi Hi Hi 


// 21. padStart()
console.log("5".padStart(3, "0"));
// 005


// 22. padEnd()
console.log("5".padEnd(3, "0"));
// 500


// 23. trim()
console.log(text.trim());
// Akash Mondal


// 24. trimStart()
console.log(text.trimStart());
// Akash Mondal  


// 25. trimEnd()
console.log(text.trimEnd());
//   Akash Mondal


// 26. toLowerCase()
console.log(text.toLowerCase());
//   akash mondal  


// 27. toUpperCase()
console.log(text.toUpperCase());
//   AKASH MONDAL  


// 28. toLocaleLowerCase()
console.log(text.toLocaleLowerCase());
//   akash mondal  


// 29. toLocaleUpperCase()
console.log(text.toLocaleUpperCase());
//   AKASH MONDAL  


// 30. toString()
let number = 100;

console.log(number.toString());
// "100"


// 31. valueOf()
let name = new String("Akash");

console.log(name.valueOf());
// "Akash"


// 32. localeCompare()
console.log("Akash".localeCompare("Tushar"));
// negative number


// 33. normalize()
let value = "é";

console.log(value.normalize());


// 34. isWellFormed()
console.log("Akash".isWellFormed());
// true


// 35. toWellFormed()
console.log("Akash".toWellFormed());
// Akash