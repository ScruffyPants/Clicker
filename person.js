class Person{
  constructor(){
    this.firstName = "Vardenis";
    this.lastName = "Pavardenis";
    this.age = 20;
    this.occupation = "none";
  }

  setOccupation(occupation){
    this.occupation = occupation;
  }

  generateName(){
    var nameArray = JSON.parse(nameList);
    //console.log(nameArray.names.lenght);
  }

  printInfo(){
    console.log(this.firstName);
  }
}
