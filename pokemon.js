class Student {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }
  isLucky() {
    let random = Math.random();

    if (random <= this.luck) {
        return true
    } else {
        return false
    }
  }

  attackPokemon(cible) {
    let degats = this.attack - cible.defense;

    cible.hp = cible.hp - degats
    
    console.log(cible.name + ", a " + cible.hp + "de vie");
  }
}

let florizarre = new Student("Florizarre", 82, 79, 80, 0.6);
let roucarnage = new Student("Roucarnage", 80, 75, 83, 0.7);

console.log("Debut du combat")

while (florizarre.hp > 0 && roucarnage.hp > 0) {
        
//   if (degats > 0) {
//     console.log(" Stats de " + this.name + ", a " + this.hp + "de vie");
//   } else {
//     console.log("Votre pokemon est mort");
//   }
//   if (random < this.luck) {
//     console.log(attackPokemon());
//   } else {
//     break;
//   }
console.log("Tour de florizarre")
if(florizarre.isLucky()){
    florizarre.attackPokemon(roucarnage)
} else {
    console.log("Florizarre a raté son coup")
}

console.log("Tour de roucarnage")
if(roucarnage.isLucky()){
    roucarnage.attackPokemon(florizarre)
} else {
    console.log("Roucarnage a raté son coup")
}
}

if(florizarre.hp < 0){
    console.log(  "Florizarre a perdu le combat avec " + florizarre.hp + " de vie")
}else if(florizarre.hp > 0){
    console.log("Roucarnage a gagné le combat avec " + roucarnage.hp + " de vie")
}

