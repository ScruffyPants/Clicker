var woodCounter = 0;
var stoneCounter = 0;
var foodCounter = 0;
var metalCounter = 0;
var troopsCounter = 0;

var counter = new Array(6).fill(0);

var people = {woodcutters:0, miners:0, troops:0};
var resources = {wood:0, stone:0, food:0, metal:0, weapons:0};

function clicked(clickedId){

  //document.getElementById("info").innerHTML = ++counter;

  resources[clickedId]++;
  document.getElementById("info").innerHTML = resources[clickedId];

  console.log('press');
  return "test";
}
