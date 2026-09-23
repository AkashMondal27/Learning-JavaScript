/*create a funcation using the Funcation Keyword that takes a string as an argument and
 returns the numbers of vowels in the  strings */
 
 function vowel(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u") {
            count++;
        }
    }
    console.log(count);
}

vowel("akash mondal");  
