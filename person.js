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

  printInfo(){
    console.log(this.firstName);
  }
}
