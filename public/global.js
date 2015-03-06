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
    var br = document.createElement("br"); //<br>
    var br2 = document.createElement("br"); //<br>    var br2 = document.createElement("br"); //<br>
    var br3 = document.createElement("br"); //<br>
    var br4 = document.createElement("br"); //<br>
    var aTag = document.createElement('a');
    var list = document.createElement("li"); //<li></li>
    var span = document.createElement("span"); //<span></span>
    var p = document.createElement("p"); //<p></p>
    
    // Create lines of text
    
    
    
    var person = '<strong>Name:</strong>' + objects[i].name + '<br>' + 
                  "<strong>Age:</strong> " + objects[i].age + '<br>' + 
              
                  
    list.innerHTML = person;
    
    
    
    
    
    // Could refactor to put the action in place of the variable in append call, but then gets very hard to read.
    
    var studentName = document.createTextNode("Name: " + objects[i].name); 
    var studentAge = document.createTextNode("Age: " + objects[i].age);
    var studentGithub = document.createTextNode("Github: ");
    var studentGithubLink = document.createTextNode("Github link: " + objects[i].github_link);
    var studentCanDrink = document.createTextNode("Can drink?: " + objects[i].can_drink);
    var studentIsWise = document.createTextNode("Is ultra-wise?: " + objects[i].ultra_wise);
    
    //Create formatting
    
    aTag.setAttribute('href', objects[i].github_link);
    aTag.innerHTML = objects[i].github;
    
    list.appendChild(span.appendChild(studentName));
    list.appendChild(br);
    list.appendChild(span.appendChild(studentAge));
    list.appendChild(br2);
    list.appendChild(span.appendChild(studentGithub));
    list.appendChild(aTag); //github  name and link
    list.appendChild(br3);
    list.appendChild(span.appendChild(studentCanDrink));
    list.appendChild(br4);
    list.appendChild(span.appendChild(studentIsWise));
    list.appendChild(p);
    
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