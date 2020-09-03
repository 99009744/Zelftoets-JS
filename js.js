var hits = 0;
var shotmiss = 0;
var shots = 20;
var total;

var shots = document.createElement("div");
shots.id = "shots";
document.getElementById("fullpage").appendChild(shots);

var hit = document.createElement("h1");
hit.id = "hit";
hit.innerHTML = "HITS: " + hits;
document.getElementById("shots").appendChild(hit);

var miss = document.createElement("h1");
miss.id = "miss";
miss.innerHTML = "MISS: " + shotmiss;
document.getElementById("shots").appendChild(miss);

var duck = document.createElement("img");
duck.src = "duck.gif";
duck.id = "duck";
duck.onclick= duckhit;
document.getElementById("fullpage").appendChild(duck);

function duckhit(){
    hits++;
    hit.innerHTML = "HITS: " + hits;
    total = hits + shotmiss;
    console.log(total);
    if(total == 20){
        alert("Je kogels zijn op, je hebt " + hits + "x de eend geraakt en " + shotmiss + "x gemist");
        hits = 0;
        miss = 0;
    }
}
function missclick(){
    shotmiss++;
    miss.innerHTML = "MISS: " + shotmiss;
    console.log(shotmiss);
}