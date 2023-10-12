class Perso {
    constructor(name, vie, caracteristiques, mort, degats, combot){
        this.name = name;
        this.vie = vie;
        this.caracteristiques = caracteristiques;
        this.mort = mort;
        this.degats = degats;
        this.combot = combot;

    }



attaquer(survivor){
    let action = "";

    if (Math.random() < this.mort){
        action = console.log(this.name + " a tué" + survivor.name)
    }else if(Math.random() < this.degats){
        action = console.log(survivor.name + " a infligé  10 points " + " à " + this.name);

    }else{
        action = console.log(survivor.name + " a infligé 15 points de dégats à " + this.name + " , mais " + this.name + " est mort ")
        this.vie = 0;

    }

    return action;
}}

let jason = new Perso ("Jason", 100, "le tueur", 0.3, 0.5,0.2);


let caracteristiques = [
    { name: "nerd", mort: 0.4, degats: 0.3, combot: 0.2 },
    { name: "sportif", mort: 0.3, degats: 0.4, combot: 0.1 },
    { name: "blonde", mort: 0.2, degats: 0.3, combot: 0.2 },
    { name: "costaud", mort: 0.3, degats: 0.3, combot: 0.2 },
    { name: "timide", mort: 0.5, degats: 0.2, combot: 0.1 }
  ];

  let survivors = [];
    for(let i = 0; i < 5; i++) {
        let aleatoire = "Survivor" + (i + 1);
        let caractereX = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
        let survivor = new Perso(aleatoire, 50, caractereX.name, caractereX.mort, caractereX.degats, caractereX.combot);
        survivors.push(survivor);
    }

    while(jason.vie > 0 && survivors.length > 0) {
        let survivantAleatoire = survivors[Math.floor(Math.random() * survivors.length)];
  let action = jason.attaquer(survivantAleatoire);

//   if (action.includes("a tué")) {
//     survivors = survivors.filter(survivor => survivor !== survivantAleatoire);
//   }

  console.log(action);
}

if (jason.vie <= 0) {
  console.log("Les survivants ont gagné, mais RIP à tous les survivants.");
} else {
  console.log("Jason a tué tous les survivants.");
}


    