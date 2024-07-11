// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Mark Hamill, Carrie Fisher",
  directors: "John Alex"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");

var event1;
var event2;
var event3;

event1 = {
  title : "Birthday Celebration",
  date : "july 08, 2024",
  Time : "6:00 pm",
  location : "HR Resisdency"
};
console.log("Information for Event" + event1.title)
console.log("--------------------------------");
console.log( "Date :" + event1.date);
console.log( "Time :" + event1.Time);
console.log( "location :" + event1.location);
console.log("--------------------------------");

event2 = {
  title : "Freshers Day",
  date : "july 10, 2024",
  Time : "9:00 am",
  location : "KGiSL Arts and Science College"
};
console.log("Information for Event" + event2.title)
console.log("--------------------------------");
console.log( "Date :" + event2.date);
console.log( "Time :" + event2.Time);
console.log( "location :" + event2.location);
console.log("--------------------------------");

event3 = {
  title : "Sports Day",
  date : "Agust 08, 2024",
  Time : "10:00 am",
  location : "KG CAS Ground"
};
console.log("Information for Event" + event3.title)
console.log("--------------------------------");
console.log( "Date :" + event3.date);
console.log( "Time :" + event3.Time);
console.log( "location :" + event3.location);
console.log("--------------------------------");




/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */