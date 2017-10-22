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
<<<<<<< HEAD
	smallHouse:[["wood", 3],["stone", 3]], 
	largeHouse:[["wood", 5],["stone", 3]], 
	woodcuttersHut:[["stone", 10]], 
	quarry:[["wood", 10]], 
	mine:[["wood", 4],["stone", 3]],
	camp:[["wood", 10],["stone", 7]]
=======
	smallHouse:[["wood", 3],["stone", 3]],
	largeHouse:[["wood", 500],["stone", 300]],
	woodcuttersHut:[["stone", 1000]],
	quarry:[["wood", 1000]],
	mine:[["wood", 4000],["stone", 3000]],
	camp:[["wood", 10000],["stone", 7000]]
>>>>>>> 5f99001be7a85f2ce39f2c58701de76caa5cb45e
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
		}
	}
  Update();
}

function Update(){
  for(var key in resources){
    if(document.getElementById(key))
      document.getElementById(key).innerHTML = resources[key];
  }
  for(var key in people){
    if(document.getElementById(key))
      document.getElementById(key).innerHTML = people[key];
  }
  for(var key in houses){
    if(document.getElementById(key))
      document.getElementById(key).innerHTML = houses[key];
  }
}
