var resources = {
	wood:100,
	stone:100,
	food:100,
	metal:0,
	weapons:0,
	woodcutters:0,
	miners:0,
	troops:0,
	unemployed:2,
	smallHouse:1,
	largeHouse:0,
	woodcuttersHut:0,
	quarry:0,
	mine:0,
	camp:0,
	farm:0,
	population:new Array(),
	farmers:0
};

var year = 1;
var month = 1;
var week = 0;

var occupation = {
	woodcutters:[["wood", 3],["food", -1]],
	miners:[["stone", 3], ["food", -1]],
	farmers:[["food", 3], ["stone", -1], ["wood", -1]],
	troops:[["food", -1], ["stone", -1], ["wood", -1]]
};

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
	troops:[["camp", 1], ["unemployed", 1]],
	farmers:[["farm", 1], ["unemployed", 1]]
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
		resources[clickedId]++;
		for(i = 0; i < requirements[clickedId].length; i++){
			resources[requirements[clickedId][i][0]]-= requirements[clickedId][i][1];
			document.getElementById(requirements[clickedId][i][0]).innerHTML = resources[requirements[clickedId][i][0]];
		}
		//increasePopulation(clickedId);
	}
  Update();
}

function Update(){
  for(var key in resources){
    if(document.getElementById(key))
      document.getElementById(key).innerHTML = resources[key].constructor === Array ? resources[key].length : resources[key];
  }
	/*
  for(var key in people){
    if(document.getElementById(key))
      document.getElementById(key).innerHTML = people[key];
  }
  for(var key in houses){
    if(document.getElementById(key))
      document.getElementById(key).innerHTML = houses[key];
  }
	*/
}

function increasePopulation(clickedId){
	for(var key in populationGrowth){
		if (clickedId == key){
			resources.population+=populationGrowth[key];
			resources.unemployed+=populationGrowth[key];
		}
	}
}

function resourseChange(){
	for(var key in occupation){
		for(var key2 in occupation[key]){
			if (resources[key] > 0){
				resources[occupation[key][key2][0]] += (occupation[key][key2][1] * resources[key]);
			}
		}
	}
	Update();
}

function checkForNewResidents(){
	var freeSpace = (resources.smallHouse * 2) + (resources.largeHouse * 4);
	//console.log("freeSpace = "+freeSpace+" Population = "+resources.population);
	if(resources.population.length < freeSpace){
		var newcomers = Math.floor(Math.random() * (freeSpace-resources.population.length));
		for(var i = 0; i<newcomers; i++)
			resources.population[resources.population.length] = new Person();
		resources.unemployed += newcomers;
		console.log(newcomers + " new citizens");
	}
	else
		console.log("No free space in town");

}

function gameCounter(){
  week++;
	if(week%4 == 0){
		month++;
		if(month == 13){
			month = 1;
			year++;
			checkForNewResidents();
			document.getElementById("year").innerHTML = year;
		}
		document.getElementById("month").innerHTML = month;
	}
  document.getElementById("week").innerHTML = week;
  setTimeout(function(){ gameCounter(); },1000);
  resourseChange();
}

function startGame(){
	resources.population[0] = new Person();
	resources.population[1] = new Person();
  gameCounter();
}
