var hits = 0;
var miss = 0;
var shots = 20;

var shots = document.createElement("div");
shots.id = "shots";
document.getElementById("fullpage").appendChild(shots);

var hit = document.createElement("h1");
hit.id = "hit";
hit.innerHTML = "HITS: " + hits;
document.getElementById("shots").appendChild(hit);

var misss = document.createElement("h1");
misss.id = "miss";
misss.innerHTML = "MISS: " + miss;
document.getElementById("shots").appendChild(misss);

var duck = document.createElement("img");
duck.src = "duck.gif";
duck.id = "duck";
document.getElementById("fullpage").appendChild(duck);

