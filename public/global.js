var fish = new XMLHttpRequest();
var ip = "httP://localhost:4567/";

function openSend(method, path) {
  fish.open(method, ip+path);
  fish.send(method, ip+path);
  return fish;
}