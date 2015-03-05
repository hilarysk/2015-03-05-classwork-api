var fish = new XMLHttpRequest();
var ip = "httP://localhost:4567/";

function openSend(method, path) {
  fish.open(method, ip+path);
  fish.send();
  return fish;
  
}

// fish.openSend("post","students")
//
// fish.addEventListener("load", function(eventObject) {alert(this.response); console.log(eventObject);});

// loop through this.response and have the (for example) where div id=key, put value. Or something like that. 