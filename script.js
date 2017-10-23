var resources = {
	wood:[0, 0], 
	stone:[0, 0] ,
	food:[0, 0] ,
	metal:[0, 0] ,
	weapons:[0, 0],
	woodcutters:[0, "wood"],
	miners:[0, "stone"],
	troops:[0, 0],
	unemployed:[0, 0],
	smallHouse:[0, 0],
	largeHouse:[0, 0],
	woodcuttersHut:[0, 0],
	quarry:[0, 0],
	mine:[0, 0],
	camp:[0, 0],
	farm:[0, 0],
	population:[0, 0]
};

var year = 0;
var week = 0;

var requirements = {
	smallHouse:[["wood", 3],["stone", 3]],
	largeHouse:[["wood", 5],["stone", 3]],
	woodcuttersHut:[["stone", 10]],
	quarry:[["wood", 10]],
	mine:[["wood", 4],["stone", 3]],
	camp:[["wood", 10],["stone", 7]],
	farm:[["wood", 4],["stone", 6]],
	woodcutters:[["woodcuttersHut", 1],["unemployed", 1]],
	miners:[["mine", 1],["unemployed", 1]],
	troops:[["camp", 1], ["unemployed", 1]]
};

var populationGrowth = {
	smallHouse:2,
	largeHouse:4
};


function clicked(clickedId){

  resources[clickedId][0]++;
  document.getElementById(clickedId).innerHTML = resources[clickedId][0];

  console.log('press');
  return "test";
}

function buy(clickedId){
	var flag = true;
	for(i = 0; i < requirements[clickedId].length; i++){
		var res = requirements[clickedId][i][0];
		if (requirements[clickedId][i][1] > resources[res][0]){
			flag = false;
			break;
		}
	}
	if (flag){
		resources[clickedId][0]++;
		for(i = 0; i < requirements[clickedId].length; i++){
			resources[requirements[clickedId][i][0]][0]-= requirements[clickedId][i][1];
			document.getElementById(requirements[clickedId][i][0]).innerHTML = resources[requirements[clickedId][i][0]][0];
		}
		increasePopulation(clickedId);
	}
  Update();
}

function Update(){
  for(var key in resources){
    if(document.getElementById(key))
      document.getElementById(key).innerHTML = resources[key][0];
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
			resources.population[0]+=populationGrowth[key];
			resources.unemployed[0]+=populationGrowth[key];
		}
	}
}

function increaseResources(){
	for(var key in resources)
		for(var key1 in resources){
			if (key == resources[key1][1])
				resources[key][0]+=resources[key1][0];
		}
	Update();
}

function gameCounter(){
  week++;
  document.getElementById("week").innerHTML = week;
  setTimeout(function(){ gameCounter(); },1000);
  increaseResources();
}

function startGame(){
  gameCounter();
}