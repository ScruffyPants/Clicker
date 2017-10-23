class Person{
  constructor(){
    this.firstName = namelist[Math.floor(Math.random() * namelist.length)];
    this.lastName = "Pavardenis";
    this.age = 20;
    this.occupation = "none";
  }

  setOccupation(occupation){
    this.occupation = occupation;
  }

  generateName(){
    this.firstName = namelist[Math.floor(Math.random() * namelist.length)];
    console.log(this.firstName);
  }

  printInfo(){
    console.log(this.firstName);
  }
}
var namelist = ["Merek","Carac","Ulric","Tybalt","Borin","Sadon","Terrowin","Rowan",
            "Forthwind","Althalos","Fendrel","Brom","Hadrian","Lord Crewe",
            "Walter De Bolbec","Lord Montagu","Oliver Cromwell","Justice McKinnon",
            "Sir Clifton Writingham","Walter deGrey","Roger de Mowbray","Joseph Rowntree",
            "Geoffrey Chaucer","Francis Drake","Simon de Montfort","Lord Cornwallis",
            "Edmund Cartwright","Charles the Bald","Benedict","Gregory","Peter","Henry",
            "Frederick","Walter","Thomas","Arthur","Bryce","Donald","Leofrick",
            "Lief","Barda","Rulf","Robin","Gavin","Terrin","Terryn","Ronald","Jarin",
            "Cassius","Leo","Cedric","Gavin","Peyton","Josef","Janshai","Doran",
            "Asher","Quinn","Zane","Xalvador","Favian","Destrian","Dain","Lord Falk",
            "Berinon","Tristan","Gorvenal","Millicent","Ayleth","Anastas","Alianor",
            "Cedany","Peronell","Thea","Jacquelyn","Gloriana","Arabella","Elizabeth",
            "Hildegard","Brunhild","Adelaide","Alice","Beatrix","Cristiana","Eleanor",
            "Emeline","Isabel","Juliana","Margaret","Matilda","Mirabelle","Rose",
            "Helena","Guinevere","Isolde","Maerwynn","Muriel","Winifred","Godiva",
            "Catrain","Angmar","Gussalen","Jasmine","Josselyn","Maria","Victoria",
            "Gwendolynn","Enndolynn","Janet","Luanda","Krea","Rainydayas","Atheena",
            "Dimia","Aleida","Ariana","Alexia","Katelyn","Katrina","Loreena","Kaylein",
            "Seraphina","Duraina","Ryia","Farfelee","Benevolence","Brangian","Elspeth"
            ];
