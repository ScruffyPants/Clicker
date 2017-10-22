var year = 0;
var week = 0;

var people = {woodcutters:0, miners:0, troops:0, unemployed:0};
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

var populationGrowth = {
	smallHouse:2,
	largeHouse:4
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
		increasePopulation(clickedId);
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

function increasePopulation(clickedId){
	for(var key in populationGrowth){
		if (clickedId == key){
			people.unemployed+=populationGrowth[key];
		}
	}
}

function gameCounter(){
  week++;
  document.getElementById("week").innerHTML = week;
  setTimeout(function(){ gameCounter(); },1000);
}

function startGame(){
  gameCounter();
}
