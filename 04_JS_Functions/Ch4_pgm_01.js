// Displaying an object's properties on the console

var movie1;
var movie2;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

movie2 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

var blogPost;

blogPost = {
  title: "Understanding JavaScript Closures",
  author: "Jane Doe",
  date: "July 9, 2024",
  content: "In this blog post, we will explore one of the most powerful features of JavaScript: closures. Closures allow functions to retain access to their lexical scope even after the function has finished executing."
};

console.log("Blog Post Information");
console.log("------------------------------");
console.log("Title: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Date: " + blogPost.date);
console.log("Content: " + blogPost.content);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */