var woodCounter = 0;
var stoneCounter = 0;
var foodCounter = 0;
var metalCounter = 0;
var troopsCounter = 0;

var counter = new Array(6).fill(0);

var people = {woodcutters:0, miners:0, troops:0};
var resources = {wood:0, stone:0, food:0, metal:0, weapons:0};
var houses = {smallHouse:0, 
	largeHouse:0,
	woodcuttersHut:0,
	quarry:0,
	mine:0,
	camp:0
	};

var requirements = {
	smallHouse:[["wood", 50],["stone", 30]], 
	largeHouse:[["wood", 500],["stone", 300]], 
	woodcuttersHut:[["stone", 1000]], 
	quarry:[["wood", 1000]], 
	mine:[["wood", 4000],["stone", 3000]],
	camp:[["wood", 10000],["stone", 7000]]
};


function clicked(clickedId){

  resources[clickedId]++;
  document.getElementById(clickedId).innerHTML = resources[clickedId];

  console.log('press');
  return "test";
}

function buy(clickedId){
	for(i = 0; i < requirements[clickedId].length; i++){
		var res = requirements[clickedId][i];
		if (requirements[clickedId][i][0] >= resources[res]){
			houses[requirements[clickedId][i]]++;
			document.getElementById(clickedId).innerHTML = resources[clickedId];
		}
	}
}