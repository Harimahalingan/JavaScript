// Using variables to represent a book

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

var bookTitle2;
var bookAuthor2;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

var bookTitle3;
var bookAuthor3;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

var book=[{title:"The Hobbit",author:"J. R. R. Tolkien"},{title:"The Hobbit",author:"J. R. R. Tolkien"},{title:"The Hobbit",author:"J. R. R. Tolkien"},{title:"The Hobbit",author:"J. R. R. Tolkien"},{title:"The Hobbit",author:"J. R. R. Tolkien"},{title:"The Hobbit",author:"J. R. R. Tolkien"},{title:"The Hobbit",author:"J. R. R. Tolkien"},{title:"The Hobbit",author:"J. R. R. Tolkien"},{title:"The Hobbit",author:"J. R. R. Tolkien"},{title:"The Hobbit",author:"J. R. R. Tolkien"},];
for( i = 0; i < book.length; i++){
    console.log(book[i].title + "by" + book[i].author);
}

/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */