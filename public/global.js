// DOM Exercises
//
//  - Some of the routes above change information in the database and therefore need user-submitted information. Those are harder to implement, so save them as a bonus for the end. (Look into FormData.)


//Variables

var fish = new XMLHttpRequest();

var ip = "http://localhost:4567/";

var singleStudent = function(eventObject){
  var object = JSON.parse(this.response);
  document.getElementById("find_student").style.display = "block";
  document.getElementById("name").innerHTML = object.name;
  document.getElementById("age").innerHTML = object.age;
  document.getElementById("github").innerHTML = object.github;
  document.getElementById("github_link").innerHTML = object.github_link;
  document.getElementById("github_url").href = object.github_link;
  document.getElementById("drink").innerHTML = object.can_drink;
  document.getElementById("wise").innerHTML = object.ultra_wise;
}

var allStudents = function(eventObject){
  var objects = JSON.parse(this.response);
  
  for (i = 0; i < objects.length; i ++){
    var list = document.createElement("li"); //<li></li>
    
    // Create line of HTML
    
    var person = '<strong>Name:</strong>' + objects[i].name + '<br>' + 
                  "<strong>Age:</strong> " + objects[i].age + '<br>' +
                  "<strong>Github: </strong><a href=" + objects[i].github_link + ">" + objects[i].github + "</a><br>" +
                  "<strong>Can drink?: </strong>" + objects[i].can_drink + "<br>" +
                  "<strong>Is ultra-wise?: </strong>" + objects[i].ultra_wise + "<br>";
                  
    //Put HTML into list item

    list.innerHTML = person;
    
    //Append list item into div tags

    document.getElementById("all_students").appendChild(list);
  }
  
}

//Functions

function openSend(method, path) {
  fish.open(method, ip+path);
  fish.send();  
}

function seeSpecificStudent() {
  var studentID = document.getElementById("seeSpecificStudentForm");
  var req = new XMLHttpRequest;
  req.open("post", "http://localhost:4567/student");

  req.send(new FormData(studentID));

  req.addEventListener("load", singleStudent, false);  
}

function seeAllStudents() {
  var request = new XMLHttpRequest;
  request.open("get", "http://localhost:4567/students");
  request.send();
  request.addEventListener("load", allStudents, false); 
}