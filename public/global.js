// DOM Exercises
//
//  - Add links to various routes on the homepage.
//  - Clicking a link should create an `XMLHttpRequest` to that path.
//  - Display the result in some elegant way in an alert to the user.
//  - Change your code so that the result displays on the page somewhere instead.
//  - Some of the routes above change information in the database and therefore need user-submitted information. Those are harder to implement, so save them as a bonus for the end. (Look into FormData.)
//








var fish = new XMLHttpRequest();
var ip = "httP://localhost:4567/";

function openSend(method, path) {
  fish.open(method, ip+path);
  fish.send();
  return fish;
  
}


fish.addEventListener("load", function(eventObject) {alert(this.response); console.log(eventObject);});

// loop through this.response and have the (for example) where div id=key, put value. Or something like that. 