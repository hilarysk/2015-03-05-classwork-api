// DOM Exercises
//
//  - Add links to various routes on the homepage.
//  - Clicking a link should create an `XMLHttpRequest` to that path.
//  - Display the result in some elegant way in an alert to the user.
//  - Change your code so that the result displays on the page somewhere instead.
//  - Some of the routes above change information in the database and therefore need user-submitted information. Those are harder to implement, so save them as a bonus for the end. (Look into FormData.)
//






//Variables

var fish = new XMLHttpRequest();

var ip = "http://localhost:4567/";

var singleStudent = function(eventObject){
  var object = JSON.parse(this.response);
  document.getElementById("find_student").style.visibility = "visible";
  document.getElementById("name").innerHTML = object.name;
  document.getElementById("age").innerHTML = object.age;
  document.getElementById("github").innerHTML = object.github;
  document.getElementById("github_link").innerHTML = object.github_link;
  document.getElementById("github_url").href = object.github_link;
  document.getElementById("drink").innerHTML = object.can_drink;
  document.getElementById("wise").innerHTML = object.ultra_wise;
}

var allStudents = function(eventObject){
  var responseArray = this.response;
  var responseHashes = responseArray.substring(1, this.response.length-1);
  var objects = JSON.parse(responseHashes);
  // for (var key in objects) {
//     if (objects.hasOwnProperty(key)) {
//       alert(key + " -> " + p[key]);
//     }
//   }
//
//
//
//
//
  // for (i = 0; i < objects.length; i ++){
  //
  //   var p = document.createElement("P");
  //   var txt = document.createTextNode(objects[i]);
  //   p.appendChild(txt);
  //   document.getElementById("all_students").appendChild(p);
  // }
  
}

//Functions

function openSend(method, path) {
  fish.open(method, ip+path);
  fish.send();  
}

function seeSpecificStudent() {
  var formElement = document.getElementById("seeSpecificStudentForm");
  var req = new XMLHttpRequest;
  req.open("post", "http://localhost:4567/student");
  req.send(new FormData(formElement));
  req.addEventListener("load", singleStudent, false);  
}

function seeAllStudents() {
  var request = new XMLHttpRequest;
  request.open("get", "http://localhost:4567/students");
  request.send();
  request.addEventListener("load", allStudents, false); 
}