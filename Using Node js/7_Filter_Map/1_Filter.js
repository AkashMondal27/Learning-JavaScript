const nums=[1,2,3,4,5,6,7,8,9,10]

const newNum= nums.filter((num)=> num > 4);
console.log(newNum)

const newNum1= nums.filter((num)=> {    
    return num < 4 ;
});

console.log(newNum1) ;

console.log("========== Real world  Example ==========")

const books = [
    {
        title: "The Alchemist",
        genre: "Fiction",
        publication: "HarperOne",
        edition: "25th Anniversary Edition",
        author: "Paulo Coelho"
    },
    {
        title: "Atomic Habits",
        genre: "Self-Help",
        publication: "Avery",
        edition: "2nd Edition",
        author: "James Clear"
    },
    {
        title: "Wings of Fire",
        genre: "Autobiography",
        publication: "Universities Press",
        edition: "1st Edition",
        author: "A. P. J. Abdul Kalam"
    },
    {
        title: "The Great Gatsby",
        genre: "Classic Fiction",
        publication: "Charles Scribner's Sons",
        edition: "1st Edition",
        author: "F. Scott Fitzgerald"
    },
    {
        title: "Rich Dad Poor Dad",
        genre: "Personal Finance",
        publication: "Warner Books",
        edition: "2nd Edition",
        author: "Robert T. Kiyosaki"
    }
];

const userBooks= books.filter((bk)=> bk.edition === "1st Edition");
console.log("1st edition " ,userBooks);

const userBooks2= books.filter((bk)=> {
    return bk.edition === "2nd Edition" && bk.genre ==="Personal Finance"
});

console.log("2nd edition " ,userBooks2)