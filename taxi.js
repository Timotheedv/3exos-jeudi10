let musique = ["Anissa", "m2", "m3", "m4", "m5"];

class personnage {
  constructor(name, vie) {
    this.name = name;
    this.vie = vie;
  }
}

let paul = new personnage("Paul", 10);
console.log(paul.vie);

for (let index = 0; index < 30; index++) {
  let algo = Math.floor(Math.random() * musique.length);
  let alea = musique[algo];

  if (alea == "Anissa") {
    console.log(alea);
    paul.vie = paul.vie - 1;
    console.log(paul.vie);
  } else {
    console.log(alea);
  }

  if (paul.vie <= 0) {
    console.log("EXPLOSION");
    break;
  }
}

if (paul.vie > 0) {
  console.log((paul.name = " est arrivé à destination sans AVC "));
}
