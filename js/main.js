function Elementype(name, icon, animation){
    this.name = name;
    this.icon = icon;
    this.animation = animation;
    }

    let normal = new Elementype("Normal","./assets/img/normalicon", "none");
    let fire = new Elementype("Fuego", "./assets/img/fireicon", "none");
    let water = new Elementype("Agua", "./assets/img/watericon", "none");
    let grass = new Elementype("Planta", "./assets/img/grassicon", "none");
    let electric = new Elementype("Electrico", "./assets/img/electricicon", "none");
    let ice = new Elementype("Hielo", "./assets/img/iceicon", "none");
    let fighting = new Elementype("Lucha", "./assets/img/fightingicon", "none");
    let poison = new Elementype("Veneno", "./assets/img/fireicon", "none");
    let ground = new Elementype("Tierra", "./assets/img/groundicon", "none");
    let flying = new Elementype("Volador", "./assets/img/flyingicon", "none");
    let psychic = new Elementype("Psiquico", "./assets/img/psychicicon", "none");
    let bug = new Elementype("Bicho", "./assets/img/bugicon", "none");
    let rock = new Elementype("Roca", "./assets/img/rockicon", "none");
    let ghost = new Elementype("Fantasma", "./assets/img/fireicon", "none");
    let dragon = new Elementype("Dragon", "./assets/img/dragonicon", "none");
    let dark = new Elementype("Siniestro", "./assets/img/darkicon", "none");
    let steel = new Elementype("Acero", "./assets/img/steelicon", "none");
    let fairy = new Elementype("Hada", "./assets/img/fairyicon", "none");
    let none = new Elementype("", "No hay logo xd", "none");


// Crear ataques
function Movment(category, name, power, presition, type, effect, pp) {
    this.category = category;
    this.name = name;
    this.power = power;
    this.presition = presition;
    this.type = type;
    this.effect = effect;
    this.pp = pp;
}

// Ataques
let airSlash = new Movment("Special", "AirSlash", 75, 95, flying, "flinch", 15);
let flamethrower = new Movment("Special", "Flamethrower", 90, 100, fire, "burn", 15);
let fireFang = new Movment("Physical", "FireFang", 65, 95, fire, "flinch-burn", 15);
let hyperBeam = new Movment("Special", "HyperBeam", 150, 0, fire, "loseturn", 5); //0% de acertar porque de momento solo se usa contra un fantasma
let spiritShackle = new Movment("Physical", "SpiritShackle", 80, 100, ghost, "noswitch", 10);
let earthquake = new Movment("Physical", "Earthquake", 100, 100, ground, "", 16); //movs
let flareBlitz = new Movment("Physical", "FlareBlitz", 120, 100, fire, "burn", 24);
let bodyPress = new Movment("Physical", "BodyPress", 80, 100, fighting, "", 16);
let dragonDance = new Movment("stat", "dragonDance", 0, 100, dragon, "", 32);
let liquidation = new Movment("Physical", "Liquidation", 85, 100, water, "", 16);
let crunch = new Movment("Physical", "Crunch", 80, 100, dark, "", 24);
let swordsDance = new Movment("Stat", "SwordsDance", 0, 100, normal, "", 32);
let doubleEdge = new Movment("Physical", "DoubleEdge", 120, 100, normal, "", 24); 
let triAttack = new Movment("Special", "TriAttack", 80, 100, normal, "", 16); 
let shadowBall = new Movment("Special", "ShadowBall", 80, 100, ghost, "", 24); 
let discharge = new Movment("Special", "Discharge", 80, 100, electric, "", 24); 
let iceBeam = new Movment("Special", "iceBeam", 90, 100, ice, "freeze", 16);
let firePunch = new Movment("Physical", "FirePunch", 75, 100, fire, "burn", 24);  
let wildCharge = new Movment("Physical", "WildCharge", 90, 100, electric, "", 24); //tiene recoil de 1/4
let icePunch = new Movment("Physical", "IcePunch", 75, 100, ice, "freeze", 24);
let glare = new Movment("Stat", "Glare", 0, 100, normal, "", 48);
let leafStorm = new Movment("Special", "LeafStorm", 130, 90, grass, "", 8);
let darkPulse = new Movment("Special", "darkPulse", 80, 100, dark, "flinch", 24); 
let gunkShot = new Movment("Physical", "GunkShot ", 120, 80, poison, "posion", 8);
let waterShuriken = new Movment("Special", "WaterShuriken", 15, 100, water, "", 34);
let poltergeist = new Movment("Physical", "Poltergeist", 110, 90, ghost, "", 8);
let leafBlade = new Movment("Physical", "LeafBlade", 90, 100, grass, "", 24);
let shadowSneak = new Movment("Physical", "ShadowSneak", 40, 100, ghost, "", 48);
let lowKick = new Movment("Physical", "LowKick", 80, 100, fighting, "noswitch", 10);  

//falta por poner valores correctos xd    
let protect = new Movment("Physical", "SpiritShackle", 80, 100, ghost, "noswitch", 10);
let roost = new Movment("Physical", "SpiritShackle", 80, 100, ghost, "noswitch", 10); 
let facade = new Movment("Physical", "SpiritShackle", 80, 100, ghost, "noswitch", 10);
let hiddenPowerfire = new Movment("Physical", "SpiritShackle", 80, 100, ghost, "noswitch", 10); 
let substitute = new Movment("Physical", "SpiritShackle", 80, 100, ghost, "noswitch", 10);



// Crear objetos pokemon
function Pokemon(pokedex, name, alive, stat, type1, type2, ability, lvl, hp, atk, def, satk, sdef, spd, mov1, mov2, mov3, mov4, obj, imgUrl) {
    this.pokedex = pokedex;
    this.name = name;
    this.alive = alive;
    this.stat = stat;
    this.type1 = type1;
    this.type2 = type2;
    this.ability = ability;
    this.lvl = lvl;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.satk = satk;
    this.sdef = sdef;
    this.spd = spd;
    this.mov1 = mov1;
    this.mov2 = mov2;
    this.mov3 = mov3;
    this.mov4 = mov4;
    this.obj = obj;
    this.imgUrl = imgUrl;
}

// Pokemon jugables
let galarianDarmanitan = new Pokemon(000, "Darmanitan (Galar)", true, "ok", ice, none, "GorillaTactics", 100, 351, 379, 146, 86, 146, 317, earthquake, bodyPress, icePunch, flareBlitz, "none", "./assets/img/darmanitan-galar.gif");
let charizard = new Pokemon(006, "Charizard", true, "ok", fire, flying, "Blaze", 100, 297, 183, 192, 317, 207, 328, airSlash, flamethrower, fireFang, hyperBeam, "none", "./assets/img/charizard.gif");
let feraligatr = new Pokemon(160, "Feraligatr", true, "ok", water, none, "SheerForce", 100, 312, 309, 236, 174, 202, 280, dragonDance, liquidation, icePunch, crunch, "none", "./assets/img/feraligatr.gif");
let blaziken = new Pokemon(257, "Blaziken", true, "ok", fire, fighting, "SpeedBoost", 100, 301, 372, 177, 230, 176, 259, flareBlitz, lowKick, swordsDance, protect, "none", "./assets/img/blaziken-f.gif");
let salamance = new Pokemon(373, "Salamance", true, "ok", dragon, flying, "Intimidate", 100, 342, 405, 196, 230, 196, 289, dragonDance, doubleEdge, roost, facade, "none", "./assets/img/salamence.gif");
let electivire = new Pokemon(466, "Electivire", true, "ok", electric, none, "MotorDrive", 100, 291, 345, 171, 226, 185, 317, firePunch, wildCharge, earthquake, icePunch, "none", "./assets/img/electivire.gif");
let porygonz = new Pokemon(474, "Porygon-Z", true, "ok", normal, none, "Adaptability", 100, 311, 148, 177, 369, 186, 306, triAttack, shadowBall, discharge, iceBeam, "none", "./assets/img/porygon-z.gif");
let serperior = new Pokemon(497, "Serperior", true, "ok", grass, none, "Contrary", 100, 305, 167, 226, 236, 226, 357, leafStorm, hiddenPowerfire, substitute, glare, "none", "./assets/img/serperior.gif");
let greninja = new Pokemon(658, "Greninja", true, "ok", water, dark, "Protean", 100, 285, 231, 170, 301, 160, 377, iceBeam, darkPulse, gunkShot, waterShuriken, "none", "./assets/img/greninja.gif");
let decidueye = new Pokemon(724, "Decidueye", true, "ok", grass, ghost, "Overgrow", 100, 297, 313, 186, 212, 237, 262, poltergeist, leafBlade, spiritShackle, shadowSneak, "none", "./assets/img/decidueye.gif");



//pokemon almacenados en un array
const pokemonList = [
    galarianDarmanitan,
    charizard,
    feraligatr,
    blaziken,
    salamance,
    porygonz,
    electivire,
    serperior,
    greninja,
    decidueye,
]

//almaceno unicamente los nombres de los pokemon con su numero de la pokedex
let namesAndPokedex = "";

pokemonList.forEach((num) => {
    namesAndPokedex = namesAndPokedex + num.name + " " + num.pokedex + "\n";
})
console.log(namesAndPokedex);


// Funcion aleatoria, recibe el menor numero y el mayor
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Creando la tabla de tipos
function typesChart (movType, enemyType){
    let multip = 0;

            // Ataques poco eficaces
    if (movType == "Normal" && enemyType == "Roca" || movType == "Normal" && enemyType == "Acero" || 
        movType == "Fuego" && enemyType == "Fuego" || movType == "Fuego" && enemyType == "Agua" || movType == "Fuego" && enemyType == "Roca" || movType == "Fuego" && enemyType == "Dragon" ||
        movType == "Agua" && enemyType == "Agua" || movType == "Agua" && enemyType == "Planta" || movType == "Agua" && enemyType == "Dragon" ||
        movType == "Planta" && enemyType == "Fuego" || movType == "Planta" && enemyType == "Planta" || movType == "Planta" && enemyType == "Veneno" || movType == "Planta" && enemyType == "Volador" || movType == "Planta" && enemyType == "Bicho" || movType == "Planta" && enemyType == "Dragon" || movType == "Planta" && enemyType == "Acero" ||
        movType == "Electrico" && enemyType == "Planta" || movType == "Electrico" && enemyType == "Electrico" || movType == "Electrico" && enemyType == "Dragon" ||
        movType == "Hielo" && enemyType == "Fuego" || movType == "Hielo" && enemyType == "Agua" || movType == "Hielo" && enemyType == "Hielo" || movType == "Hielo" && enemyType == "Acero" ||
        movType == "Lucha" && enemyType == "Veneno" || movType == "Lucha" && enemyType == "Volador" || movType == "Lucha" && enemyType == "Psiquico" || movType == "Lucha" && enemyType == "Bicho" || movType == "Lucha" && enemyType == "Hada" ||
        movType == "Veneno" && enemyType == "Veneno" || movType == "Veneno" && enemyType == "Tierra" || movType == "Veneno" && enemyType == "Roca" || movType == "Veneno" && enemyType == "Fantasma" ||
        movType == "Tierra" && enemyType == "Planta" || movType == "Tierra" && enemyType == "Bicho" ||
        movType == "Volador" && enemyType == "Electrico" || movType == "Volador" && enemyType == "Acero" || movType == "Volador" && enemyType == "Roca" ||
        movType == "Psiquico" && enemyType == "Psiquico" || movType == "Psiquico" && enemyType == "Acero" ||
        movType == "Bicho" && enemyType == "Fuego" || movType == "Bicho" && enemyType == "Lucha" || movType == "Bicho" && enemyType == "Veneno" || movType == "Bicho" && enemyType == "Volador" || movType == "Bicho" && enemyType == "Fantasma" || movType == "Bicho" && enemyType == "Acero" || movType == "Bicho" && enemyType == "Hada" ||
        movType == "Roca" && enemyType == "Lucha" || movType == "Roca" && enemyType == "Tierra" || movType == "Roca" && enemyType == "Acero" ||
        movType == "Fantasma" && enemyType == "Siniestro" ||
        movType == "Dragon" && enemyType == "Acero" ||
        movType == "Siniestro" && enemyType == "Lucha" || movType == "Siniestro" && enemyType == "Siniestro" || movType == "Siniestro" && enemyType == "Hada" ||
        movType == "Acero" && enemyType == "Fuego" || movType == "Acero" && enemyType == "Agua" || movType == "Acero" && enemyType == "Agua" || movType == "Acero" && enemyType == "Electrico" || movType == "Acero" && enemyType == "Acero" ||
        movType == "Hada" && enemyType == "Fuego" || movType == "Hada" && enemyType == "Veneno" || movType == "Hada" && enemyType == "Acero"
    ) {
        multip = .5;
    }
            // Ataques nada eficaces
    else if (movType == "Normal" && enemyType == "Fantasma" ||
        movType == "Electrico" && enemyType == "Planta" ||
        movType == "Lucha" && enemyType == "Fantasma" ||
        movType == "Veneno" && enemyType == "Acero" ||
        movType == "Tierra" && enemyType == "Volador" ||
        movType == "Psiquico" && enemyType == "Siniestro" ||
        movType == "Fantasma" && enemyType == "Normal" ||
        movType == "Dragon" && enemyType == "Hada"
    ) {
        multip = 0;
    }
    else if(movType == "Fuego" && enemyType == "Planta" || movType == "Fuego" && enemyType == "Hielo" || movType == "Fuego" && enemyType == "Bicho" || movType == "Fuego" && enemyType == "Acero" ||
        movType == "Agua" && enemyType == "Fuego" || movType == "Agua" && enemyType == "Tierra" || movType == "Agua" && enemyType == "Roca" ||
        movType == "Planta" && enemyType == "Tierra" || movType == "Planta" && enemyType == "Agua" || movType == "Planta" && enemyType == "Roca" || 
        movType == "Electrico" && enemyType == "Agua" || movType == "Electrico" && enemyType == "Volador" ||
        movType == "Hielo" && enemyType == "Planta" || movType == "Hielo" && enemyType == "Tierra" || movType == "Hielo" && enemyType == "Volador" || movType == "Hielo" && enemyType == "Dragon" ||
        movType == "Lucha" && enemyType == "Normal" || movType == "Lucha" && enemyType == "Hielo" || movType == "Lucha" && enemyType == "Roca" || movType == "Lucha" && enemyType == "Siniestro" || movType == "Lucha" && enemyType == "Acero" ||
        movType == "Veneno" && enemyType == "Planta" || movType == "Veneno" && enemyType == "Hada" ||
        movType == "Tierra" && enemyType == "Fuego" || movType == "Tierra" && enemyType == "Electrico" || movType == "Tierra" && enemyType == "Veneno" || movType == "Tierra" && enemyType == "Roca" || movType == "Tierra" && enemyType == "Acero" ||
        movType == "Volador" && enemyType == "Planta" || movType == "Volador" && enemyType == "Lucha" || movType == "Volador" && enemyType == "Bicho" ||
        movType == "Psiquico" && enemyType == "Lucha" || movType == "Psiquico" && enemyType == "Veneno" || 
        movType == "Bicho" && enemyType == "Planta" || movType == "Bicho" && enemyType == "Psiquico" || movType == "Bicho" && enemyType == "Siniestro" ||
        movType == "Roca" && enemyType == "Fuego" || movType == "Roca" && enemyType == "Hielo" || movType == "Roca" && enemyType == "Volador" || movType == "Roca" && enemyType == "Bicho" ||
        movType == "Fantasma" && enemyType == "Psiquico" || movType == "Fantasma" && enemyType == "Fantasma" ||
        movType == "Dragon" && enemyType == "Dragon" ||
        movType == "Siniestro" && enemyType == "Psiquico" || movType == "Siniestro" && enemyType == "Fantasma" ||
        movType == "Acero" && enemyType == "Hielo" || movType == "Acero" && enemyType == "Roca" || movType == "Acero" && enemyType == "Hada" ||
        movType == "Hada" && enemyType == "Lucha" || movType == "Hada" && enemyType == "Dragon" || movType == "Hada" && enemyType == "Siniestro"

    ){
        console.log("efectivisimo")
        multip = 2;
    }
    else {
        multip = 1;
    }
    return multip;
}

// Calcular danio
function damage(lvl, atk, def, mov, stat, stab, atype1, atype2, presition, etype1, etype2, attacking, movChoosed) {
    console.log("Este es el movChoosed" + movChoosed.name);
    setTimeout(() => {
        let fightConsole = document.getElementById('console');
        document.getElementById('battleButtons').innerHTML = "";
        document.getElementById('console').innerHTML = "";
        fightConsole.innerHTML += `
            <h6 class="card-text texto console-text">${attacking.name} ha usado ${movChoosed.name}</H6>
        `
    }, 5);

    let damage = ((((lvl * 2 / 5) + 2) * mov * atk / 50) / def);
    let accuracy = getRandomIntInclusive(0, 100);

    if (accuracy <= presition) {

        //Checar si el pokemon atacante esta quemado
        if (stat == "burned" && atk == Jugador1.atk) {
            damage = damage * .5 + 2;
        }
        else {
            damage = damage * 1 + 2;
        }

        // Calcular critico y numero random
        let randomnum = getRandomIntInclusive(0, 100);
        let rnd = getRandomIntInclusive(85, 100);

        // Aplicar Critico y numero random
        if (randomnum <= 6.25) {
            damage = damage * 2 * rnd / 100;
            console.log("Golpe Critico!");
        }
        else {
            damage = damage * 1 * rnd / 100;
        }

        //Stab, ventajas y desventajas (Falta agregar funcion para ventajas y desventajas)
        if (stab == atype1 || stab == atype2) {
            damage = damage * 1.5;
        }
        else {
            damage = damage * 1;
        }
        console.log(stab.name)
        let damageType1 = typesChart(stab.name, etype1.name);
        let damageType2 = typesChart(stab.name, etype2.name);
        let typeTotal = damageType1 * damageType2;
        console.log(damageType1);
        console.log(damageType2);

        damage = damage * typeTotal ;
        console.log(typeTotal);
        setTimeout(() => {
            if(typeTotal>1){
                    let fightConsole = document.getElementById('console');
                    document.getElementById('battleButtons').innerHTML = "";
                    document.getElementById('console').innerHTML = "";
                    fightConsole.innerHTML += `
                        <h6 class="card-text texto console-text">Es super efectivo</H6>
                    `
                    console.log("El danio esa: " + damage);
            }
            else if(typeTotal<1){
                    let fightConsole = document.getElementById('console');
                    document.getElementById('battleButtons').innerHTML = "";
                    document.getElementById('console').innerHTML = "";
                    fightConsole.innerHTML += `
                        <h6 class="card-text texto console-text">Es poco efectivo</H6>
                    `
                    console.log("El danio esa: " + damage);
            }
            else if(typeTotal==0){
                    let fightConsole = document.getElementById('console');
                    document.getElementById('battleButtons').innerHTML = "";
                    document.getElementById('console').innerHTML = "";
                    fightConsole.innerHTML += `
                        <h6 class="card-text texto console-text">No ha tenido efecto</H6>
                    `
                    console.log("El danio esa: " + damage);
            }

        }, 2000);
        console.log("El danio es: " + damage);
    }
    else {
        damage = 0;
        setTimeout(() => {
            let fightConsole = document.getElementById('console');
            document.getElementById('battleButtons').innerHTML = "";
            document.getElementById('console').innerHTML = "";
            fightConsole.innerHTML += `
                <h6 class="card-text texto console-text">El ataque ha fallado</H6>
            `
        }, 2000);
        console.log("El ataque ha fallado");
    }

    return damage;
}



// // Comienza la batalla pokemon!
// do {
//     if (Jugador1.spd > Npc1.spd) { // Si la velocidad del jugador es mayor a la del CPU
//         // Turno Jugador

//         if (Jugador1.alive == true && Npc1.alive == true) {
//             ataque = parseInt(prompt("Ingresa un numero para usar uno de tus ataques: \n1.-Air Slash \n2.-Lanza Llamas \n3.-Colmillo Igneo \n4.-Hiperrayo "));
//             switch (ataque) {
//                 case 1: // airSlash
//                     Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, Jugador1.mov1.power, Jugador1.stat, Jugador1.mov1.type, Jugador1.type1, Jugador1.type2, Jugador1.mov1.presition);
//                     break;
//                 case 2: // flamethrower
//                     Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, Jugador1.mov2.power, Jugador1.stat, Jugador1.mov2.type, Jugador1.type1, Jugador1.type2, Jugador1.mov2.presition);
//                     break;
//                 case 3: // "Fuego" fang
//                     Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.atk, Npc1.def, Jugador1.mov3.power, Jugador1.stat, Jugador1.mov3.type, Jugador1.type1, Jugador1.type2, "Fuego"Fang.mov3.presition);
//                     break;
//                 case 4: // Hyper beam
//                     Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, Jugador1.mov4.power, Jugador1.stat, Jugador1.mov4.type, Jugador1.type1, Jugador1.type2, Jugador1.mov4.presition);
//                     break;
//                 default:
//                     ataque = 0;
//                     break;
//             }
//             if (Jugador1.hp <= 0) {
//                 Jugador1.alive = false;
//             }
//             if (Npc1.hp <= 0) {
//                 Npc1.alive = false;
//             }
//         }

//         // Turno CPU
//         if (Jugador1.alive == true && Npc1.alive == true) {
//             Jugador1.hp = Jugador1.hp - danio(Npc1.lvl, Npc1.satk, Jugador1.sdef, SpiritShackle.power, Npc1.stat, SpiritShackle.type, Npc1.type1, Npc1.type2, SpiritShackle.presition);
//             if (Jugador1.hp <= 0) {
//                 Jugador1.alive = false;
//             }
//             if (Npc1.hp <= 0) {
//                 Npc1.alive = false;
//             }
//         }
//     }
//     else {
//         // De momento decidueye no es mas rapido que charizard
//     }

//     if (Jugador1.hp <= 0) {
//         Jugador1.alive = false;
//         Jugador1.hp = 0;
//     }
//     if (Npc1.hp <= 0) {
//         Npc1.alive = false;
//         Npc1.hp = 0;
//     }
//     alert("El hp restante de tu pokemon es: " + Jugador1.hp + " / " + Charizard.hp + "\n\nEl hp restante del pokemon enemigo es " + Npc1.hp + " / " + Decidueye.hp);
// } while (Jugador1.alive == true && Npc1.alive == true);

// if (Jugador1.hp <= 0) {
//     alert("La CPU ha ganado");
// }
// else if (Npc1.hp <= 0) {
//     alert("Has ganado!");
// }

            // Aqui comienza el dom

let pokemonContainer = document.getElementById("elegirPokemon");
let buttons = document.getElementsByClassName('boton');
let deleteButton = document.getElementsByClassName('boton-quitar');
let teamContainer = document.getElementById('equipo');
let savedTeam = [];
let battleContainer = document.getElementById("batalla");
let readyToStart = false;
let pokeConsole = document.getElementById('console');

// Checar si hay un equipo guardado en el local storage
if (localStorage.getItem('equipo')) {
    savedTeam = JSON.parse(localStorage.getItem('equipo'));
    console.log("si hay equipo");
}

// crear las cards
function createCards(){
    pokemonContainer.innerHTML = "" ;
    if(readyToStart==false){
        pokemonContainer.innerHTML = `
            <h2 class="col-12">Lista de Pokemon</h2>
        `
        for (const creature of pokemonList) {
            let pokemonCard = document.createElement('div');
            pokemonCard.className = 'card fonditos d-flex flex-column p-2 bd-highlight justify-content-evenly align-items-center'
            pokemonCard.innerHTML = `
                        <h4 class="card-title texto">${creature.pokedex} ${creature.name}</h4>
                        <h5 class="card-text texto">${creature.type1.name} ${creature.type2.name}</h5>
                        <h6 class="card-text texto">Tiene los movimientos: ${creature.mov1.name} ${creature.mov2.name} ${creature.mov3.name} ${creature.mov4.name}</h6>
                        <img class="pokemon-img" src=${creature.imgUrl}>
                        <button class="boton btn btn-secondary" id=${creature.pokedex}>Agregar al equipo</button>
                    `
            pokemonContainer.append(pokemonCard);
        }
    }
}
createCards();

// cargar el equipo guardado (si es que hay)
function loadTeam() {
    document.getElementById('equipo').innerHTML = "";
    if(readyToStart==false) {    
        teamContainer.innerHTML += `
            <h2 class="col-12">Tu equipo actual</h2>
        `
        for (const creature of savedTeam) {
            console.log(creature.name);
            teamContainer.innerHTML += `
                <div class="miembro-equipo card fonditos d-flex flex-column p-2 bd-highlight justify-content-evenly align-items-center"}>
                    <h4 class="card-title texto">${creature.pokedex} ${creature.name}</h4>
                    <h5 class="card-text texto">${creature.type1.name} ${creature.type2.name}</h5>
                    <h6 class="card-text texto">Tiene los movimientos: ${creature.mov1.name} ${creature.mov2.name} ${creature.mov3.name} ${creature.mov4.name}</h6>
                    <img class="pokemon-img" src=${creature.imgUrl}>
                    <button class="boton-quitar btn btn-secondary" id=${(creature.pokedex)+1000}>Quitar del equipo</button>
                </div>
            `

            for (const button of deleteButton) {
                button.onclick = (e) => {
                    loadTeam();
                    console.log("entre a borrar");
                    let deleteId = e.target.id - 1000;
                    console.log(deleteId);
                    for (let index = 0; index < savedTeam.length; index++) {
                        if(deleteId == savedTeam[index].pokedex){
                            savedTeam.splice(index, 1);
                        }
                    }
                    localStorage.setItem('equipo', JSON.stringify(savedTeam));
                    loadTeam();
                    letsBattle();
                }
            }
        }
    }
    
}
loadTeam();

// guardar pokemon dentro del equipo
for (const button of buttons) {
    button.onclick = (e) => {
        loadTeam();
        letsBattle();
        if(savedTeam.length<6){
            let inOrNot = savedTeam.some((el) => el.pokedex == e.target.id);
            console.log(inOrNot);
            if(!inOrNot){
                let searchedPokemon = pokemonList.find(creature => creature.pokedex == e.target.id);
                console.log(searchedPokemon);
                // Almacenar los pokemon dentro de tu equipo y crear un archivo JSON para guardarlos en el local storage 
                savedTeam.push(searchedPokemon);
                console.log(savedTeam);
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Ya en el equipo',
                    text: 'Ese pokemon ya estaba en tu equipo',
                    color: '#fff',
                    background: '#1466c3'
                })
            }
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Equipo completo',
                text: 'Tu equipo solo puede tener 6 pokemon',
                color: '#fff',
                background: '#1466c3'
            })
        }
        localStorage.setItem('equipo', JSON.stringify(savedTeam));
        loadTeam();
        letsBattle();
    }
    
}

// Crear boton para empezar el combate 
function letsBattle(){
    document.getElementById('batalla').innerHTML = "";
    if (savedTeam.length>5 && readyToStart == false) {
        battleContainer.innerHTML += `
            <button class="btn btn-secondary col-4" id="start" href="pages/batalla.html">Empezar el combate</button>
        `
        let startBattle = document.getElementById('start');
            startBattle.onclick = () => {
                readyToStart = true;
                loadTeam();
                createCards();
                ownTeamBattle();
                letsBattle();
            }
    }
    else{
        readyToStart = false;
    }
}
letsBattle();


let enemyContainer = document.getElementById("enemy");
let ownContainer = document.getElementById('own');

let playerTeam = savedTeam;
let npcTeam = savedTeam;
console.log(`${playerTeam} ${npcTeam}`);

let playerCurrentPokemon = 0;
let npcCurrentPokemon = 3;

function battleOrder(attacking, defending, movChoosed, delay){
    console.log("el tipo es " + movChoosed.type.name);
    console.log("el movechoosed es " + movChoosed.name);
    if(movChoosed.category == 'Physical'){
        setTimeout(() => {
            defending.hp = defending.hp - damage(attacking.lvl, attacking.atk, defending.def, movChoosed.power, attacking.stat, movChoosed.type, attacking.type1, attacking.type2, movChoosed.presition, defending.type1, defending.type2, attacking, movChoosed);
            console.log(defending.hp);
        }, delay);
    }
    else{
        setTimeout(() => {
            defending.hp = defending.hp - damage(attacking.lvl, attacking.satk, defending.def, movChoosed.power, attacking.stat, movChoosed.type, attacking.type1, attacking.type2, movChoosed.presition, defending.type1, defending.type2, attacking, movChoosed);
            console.log(defending.hp);
        }, delay);
    }
}

// Detectar si derrotaron al pokemon y cambiar de pokemon debilitado (current = playerCurrentPokemon, player = playerTeam)
function aliveOrNot(player, current){
    console.log(`el current es ${current}`);
    let index = 0
    if(player[current].hp <= 0 && player.length>0){
        player[current].hp = 0 ;
        player[current].alive = false;
        setTimeout(() => {
            document.getElementById('console').innerHTML = "";
            document.getElementById('console').innerHTML += `
                <h6 class="card-text texto console-text">${player[current].name} se ha debilitado</H6>
            `
        }, 0);
        
        for (index = 0; index < player.length; index++) {
            console.log("vivo el pana"+ player[index].alive);
            if (player[index].alive == true){
                setTimeout(() => {
                    document.getElementById('console').innerHTML = "";
                    document.getElementById('console').innerHTML += `
                        <h6 class="card-text texto console-text">${player[index].name} yo te elijo!</H6>
                    `
                    console.log(`current es ${current} e index es ${index}`);
                    
                }, 2);
                break;
            }
        }
    }
    return index;
}
let fightConsole = document.getElementById('console');

// function reloadBattleButtons (){
//     ownContainer.innerHTML += `
//         <div id="bottomContainer" class="row d-flex bd-highlight justify-content-between flex-row align-items-center flex-nowrap">
//                 <div id="console" class=" col-6 d-flex justify-content-center align-items-center">
//                     <h6 class="card-text texto console-text">Selecciona una accion</H6>
//                 </div>
//                 <div id="battleButtons" class="col-6 d-flex bd-highlight justify-content-between align-items-center flex-row flex-wrap">
//                     <button class="btn btn-secondary battle-buttons" id="fightButton">Pelear</button>
//                     <button class="btn btn-secondary battle-buttons" id="chooseButton">Pokemon</button>
//                     <button class="btn btn-secondary battle-buttons" id="runButton">Huir</button>
//                     <button class="btn btn-secondary battle-buttons" id="itemButton">Item</button>
//                 </div>
//             </div>
//     `
// }

// Colapsar todos los elementos y mostrar la batalla pokemon
function ownTeamBattle(){
    if(readyToStart==true){
        let playerTeam = savedTeam;
        let npcTeam = savedTeam;
        letsBattle();
        ownContainer.innerHTML = "";
        ownContainer.innerHTML += `
        <div id="bothPokemon" class="row col-12 d-flex flex-row bd-highlight justify-content-evenly align-items-center">
            <div class="col-6 d-flex bd-highlight justify-content-evenly align-items-center flex-column">
                <h5 class="texto">${playerTeam[playerCurrentPokemon].hp} HP</h5>
                <h5 class="texto">${playerTeam[playerCurrentPokemon].name}</h5>
                <img class="pokemon-img own-pokemon" src=${playerTeam[playerCurrentPokemon].imgUrl}>
            </div>
            <div class="col-6 d-flex bd-highlight justify-content-evenly align-items-center flex-column">
                <h5 class="texto">${npcTeam[npcCurrentPokemon].hp} HP</h5>
                <h5 class="texto">${npcTeam[npcCurrentPokemon].name}</h5>
                <img class="pokemon-img" src=${npcTeam[npcCurrentPokemon].imgUrl}>
            </div>
        </div>
        <div id="bottomContainer" class="row d-flex bd-highlight justify-content-between flex-row align-items-center flex-nowrap">
            <div id="console" class=" col-6 d-flex justify-content-center align-items-center">
                <h6 class="card-text texto console-text">Selecciona una accion</H6>
            </div>
            <div id="battleButtons" class="col-6 d-flex bd-highlight justify-content-between align-items-center flex-row flex-wrap">
                <button class="btn btn-secondary battle-buttons" id="fightButton">Pelear</button>
                <button class="btn btn-secondary battle-buttons" id="chooseButton">Pokemon</button>
                <button class="btn btn-secondary battle-buttons" id="runButton">Huir</button>
                <button class="btn btn-secondary battle-buttons" id="itemButton">Item</button>
            </div>
            
        </div>
        `
        let battleButtonsContainer = document.getElementById('battleButtons');
        let fightChoosed = document.getElementById('fightButton');
        let runChoosed = document.getElementById('runButton');

        fightChoosed.onclick = () => {
            document.getElementById('battleButtons').innerHTML = "";
            battleButtonsContainer.innerHTML += `
                <button class="btn btn-secondary fight-buttons" id="mov1">${playerTeam[playerCurrentPokemon].mov1.name} <br> ${playerTeam[playerCurrentPokemon].mov1.category} | precisión: ${playerTeam[playerCurrentPokemon].mov1.presition} <br> Poder: ${playerTeam[playerCurrentPokemon].mov1.power} | pp: ${playerTeam[playerCurrentPokemon].mov1.pp} </button>
                <button class="btn btn-secondary fight-buttons" id="mov2">${playerTeam[playerCurrentPokemon].mov2.name} <br> ${playerTeam[playerCurrentPokemon].mov2.category} | precisión: ${playerTeam[playerCurrentPokemon].mov2.presition} <br> Poder: ${playerTeam[playerCurrentPokemon].mov2.power} | pp: ${playerTeam[playerCurrentPokemon].mov2.pp} </button>
                <button class="btn btn-secondary fight-buttons" id="mov3">${playerTeam[playerCurrentPokemon].mov3.name} <br> ${playerTeam[playerCurrentPokemon].mov3.category} | precisión: ${playerTeam[playerCurrentPokemon].mov3.presition} <br> Poder: ${playerTeam[playerCurrentPokemon].mov3.power} | pp: ${playerTeam[playerCurrentPokemon].mov3.pp} </button>
                <button class="btn btn-secondary fight-buttons" id="mov4">${playerTeam[playerCurrentPokemon].mov4.name} <br> ${playerTeam[playerCurrentPokemon].mov4.category} | precisión: ${playerTeam[playerCurrentPokemon].mov4.presition} <br> Poder: ${playerTeam[playerCurrentPokemon].mov4.power} | pp: ${playerTeam[playerCurrentPokemon].mov4.pp} </button>
            `
            let mov1 = document.getElementById('mov1');
            let mov2 = document.getElementById('mov2');
            let mov3 = document.getElementById('mov3');
            let mov4 = document.getElementById('mov4');
            mov1.onclick = () => {
                //Si el jugador tiene mayor velocidad que el enemigo
                if(playerTeam[playerCurrentPokemon].spd > npcTeam[npcCurrentPokemon].spd){
                    battleOrder(playerTeam[playerCurrentPokemon], npcTeam[npcCurrentPokemon], playerTeam[playerCurrentPokemon].mov1, 1000);
                    setTimeout(() => {
                        npcCurrentPokemon = aliveOrNot(npcTeam, npcCurrentPokemon);
                    }, 4000);
                    setTimeout(() => {
                        battleOrder(npcTeam[npcCurrentPokemon], playerTeam[playerCurrentPokemon], npcTeam[npcCurrentPokemon].mov1, 4000);
                    }, 6000);
                    
                }
                else{
                    battleOrder(npcTeam[npcCurrentPokemon], playerTeam[playerCurrentPokemon], npcTeam[npcCurrentPokemon].mov1, 1000);
                    setTimeout(() => {
                        if(playerTeam[playerCurrentPokemon].hp <= 0){
                            playerCurrentPokemon = aliveOrNot(playerTeam, playerCurrentPokemon);
                        }
                    }, 2000);
                    setTimeout(() => {
                        battleOrder(playerTeam[playerCurrentPokemon], npcTeam[npcCurrentPokemon], playerTeam[playerCurrentPokemon].mov1, 500);
                    }, 3000);
                    setTimeout(() => {
                        if(npcTeam[npcCurrentPokemon].hp <= 0){
                            setTimeout(() => {
                                console.log(`nonononono npcCurrent ${npcCurrentPokemon}`);
                            }, 10);
                            npcCurrentPokemon = aliveOrNot(npcTeam, npcCurrentPokemon) ;
                            
                        }
                    }, 7000);
                }
                setTimeout(() => {
                    console.log(`el pokemon actual es ${npcTeam[npcCurrentPokemon].name}  current ${npcCurrentPokemon}`);
                }, 12000);
                setTimeout(() => {
                    readyToStart = false;
                    ownTeamBattle();
                    readyToStart = true;
                    ownTeamBattle();
                    console.log("Soy inteligente jeje");
                }, 13000);
                
            }
        }
        runChoosed.onclick = () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Seguro que quieres abandonar?',
                text: "Se perdera el progreso del combate",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, quiero huir',
                cancelButtonText: 'No, continuar el combate',
                reverseButtons: true,
                color: '#fff',
                background: '#1466c3'
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Has huido',
                        'Volviste al menu',
                        'success'
                    )
                    location.reload();
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'No has huido',
                        'Continua el combate',
                        'error'
                    )
                    
                }
            })
        }
    }
    else{
        console.log("No me active (la batalla) jeje");
    }
    
}

                                                                                                        // category, name, power, presition, type, effect, pp