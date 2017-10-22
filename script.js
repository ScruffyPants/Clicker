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
	smallHouse:[["wood", 3],["stone", 3]], 
	largeHouse:[["wood", 5],["stone", 3]], 
	woodcuttersHut:[["stone", 10]], 
	quarry:[["wood", 10]], 
	mine:[["wood", 4],["stone", 3]],
	camp:[["wood", 10],["stone", 7]]
};


function clicked(clickedId){

  resources[clickedId]++;
  document.getElementById(clickedId).innerHTML = resources[clickedId];

  console.log('press');
  return "test";
}

function buy(clickedId){
	var flag = true; 
	for(i = 0; i < requirements[clickedId].length; i++){
		var res = requirements[clickedId][i][0];
		if (requirements[clickedId][i][1] > resources[res]){
			flag = false;
			break;
		}
	}
	if (flag){
		houses[clickedId]++;
		for(i = 0; i < requirements[clickedId].length; i++){
			resources[requirements[clickedId][i][0]]-= requirements[clickedId][i][1];
			document.getElementById(requirements[clickedId][i][0]).innerHTML = resources[requirements[clickedId][i][0]];
		}

	}
}

