// Crear ataques
function Movimiento(category, name, power, presition, type, effect, pp) {
    this.category = category;
    this.name = name;
    this.power = power;
    this.presition = presition;
    this.type = type;
    this.effect = effect;
    this.pp = pp;
}

// Ataques
var AirSlash = new Movimiento("Special", "AirSlash", 75, 95, "flying", "flinch", 15);
var Flamethrower = new Movimiento("Special", "Flamethrower", 90, 100, "fire", "burn", 15);
var FireFang = new Movimiento("Physical", "FireFang", 65, 95, "fire", "flinch-burn", 15);
var HyperBeam = new Movimiento("Special", "HyperBeam", 150, 0, "fire", "loseturn", 5); //0% de acertar porque de momento solo se usa contra un fantasma
var SpiritShackle = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);

//falta por poner valores correctos xd
var Earthquake = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var BodyPress = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var FlareBlitz = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var DragonDance = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var Liquidation = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var Crunch = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var FlareBlitz = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var LowKick = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var SwordsDance = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var Protect = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var DragonDance = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var DoubleEdge = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var Roost = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var Facade = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var TriAttack = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var ShadowBall = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var Discharge = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var IceBeam = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var FirePunch = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var WildCharge = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var IcePunch = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var LeafStorm = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var HiddenPowerFire = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var Substitute = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var Glare = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var IceBeam = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var DarkPulse = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var GunkShot = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var WaterShuriken = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var Poltergeist = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var LeafBlade = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var SpiritShackle = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);
var ShadowSneak = new Movimiento("Physical", "SpiritShackle", 80, 100, "ghost", "noswitch", 10);

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
var GDarmanitan = new Pokemon(000, "Darmanitan (Galar)", true, "ok", "ice", "none", "GorillaTactics", 100, 351, 379, 146, 86, 146, 317, Earthquake, BodyPress, IcePunch, FlareBlitz, "none", "./assets/img/darmanitan-galar.gif");
var Charizard = new Pokemon(006, "Charizard", true, "ok", "fire", "flying", "Blaze", 100, 297, 183, 192, 317, 207, 328, AirSlash, Flamethrower, FireFang, HyperBeam, "none", "./assets/img/charizard.gif");
var Feraligatr = new Pokemon(160, "Feraligatr", true, "ok", "water", "none", "SheerForce", 100, 312, 309, 236, 174, 202, 280, DragonDance, Liquidation, IcePunch, Crunch, "none", "./assets/img/feraligatr.gif");
var Blaziken = new Pokemon(257, "Blaziken", true, "ok", "fire", "fighting", "SpeedBoost", 100, 301, 372, 177, 230, 176, 259, FlareBlitz, LowKick, SwordsDance, Protect, "none", "./assets/img/blaziken-f.gif");
var Salamance = new Pokemon(373, "Salamance", true, "ok", "dragon", "flying", "Intimidate", 100, 342, 405, 196, 230, 196, 289, DragonDance, DoubleEdge, Roost, Facade, "none", "./assets/img/salamence.gif");
var Electivire = new Pokemon(466, "Electivire", true, "ok", "electric", "none", "MotorDrive", 100, 291, 345, 171, 226, 185, 317, FirePunch, WildCharge, Earthquake, IcePunch, "none", "./assets/img/electivire.gif");
var Porygonz = new Pokemon(474, "Porygon-Z", true, "ok", "normal", "none", "Adaptability", 100, 311, 148, 177, 369, 186, 306, TriAttack, ShadowBall, Discharge, IceBeam, "none", "./assets/img/porygon-z.gif");
var Serperior = new Pokemon(497, "Serperior", true, "ok", "grass", "none", "Contrary", 100, 305, 167, 226, 236, 226, 357, LeafStorm, HiddenPowerFire, Substitute, Glare, "none", "./assets/img/serperior.gif");
var Greninja = new Pokemon(658, "Greninja", true, "ok", "water", "dark", "Protean", 100, 285, 231, 170, 301, 160, 377, IceBeam, DarkPulse, GunkShot, WaterShuriken, "none", "./assets/img/greninja.gif");
var Decidueye = new Pokemon(724, "Decidueye", true, "ok", "grass", "ghost", "Overgrow", 100, 297, 313, 186, 212, 237, 262, Poltergeist, LeafBlade, SpiritShackle, ShadowSneak, "none", "./assets/img/decidueye.gif");

//pokemon almacenados en un array
const pokemonList = [
    GDarmanitan,
    Charizard,
    Feraligatr,
    Blaziken,
    Salamance,
    Porygonz,
    Electivire,
    Serperior,
    Greninja,
    Decidueye,
]

//almaceno unicamente los nombres de los pokemon con su numero de la pokedex
var namesAndPokedex = ""
pokemonList.forEach((num) => {
    namesAndPokedex = namesAndPokedex + num.name + " " + num.pokedex + "\n";
})
console.log(namesAndPokedex);

function Movment(name, icon, animation){
this.name = name;
this.icon = icon;
this.animation = animation;
}
var Normal = new Movment("Normal","./assets/img/normalicon", "none");
var Fire = new Movment("Fuego", "./assets/img/fireicon", "none");
var Water = new Movment("Agua", "./assets/img/watericon", "none");
var Grass = new Movment("Planta", "./assets/img/grassicon", "none");
var Electric = new Movment("Electrico", "./assets/img/electricicon", "none");
var Ice = new Movment("Hielo", "./assets/img/iceicon", "none");
var Fighting = new Movment("Lucha", "./assets/img/fightingicon", "none");
var Poison = new Movment("Veneno", "./assets/img/fireicon", "none");
var Ground = new Movment("Tierra", "./assets/img/groundicon", "none");
var Flying = new Movment("Volador", "./assets/img/flyingicon", "none");
var Psychic = new Movment("Psiquico", "./assets/img/psychicicon", "none");
var Bug = new Movment("Insecto", "./assets/img/bugicon", "none");
var Rock = new Movment("Roca", "./assets/img/rockicon", "none");
var Ghost = new Movment("Fantasma", "./assets/img/fireicon", "none");
var Dragon = new Movment("Dragon", "./assets/img/dragonicon", "none");
var Dark = new Movment("Siniestro", "./assets/img/darkicon", "none");
var Steel = new Movment("Acero", "./assets/img/steelicon", "none");
var Fairy = new Movment("Hada", "./assets/img/fairyicon", "none");



// Crear objeto jugador y a futuro poder cambiar de pokemon
function Player(pokedex, name, alive, stat, type1, type2, ability, lvl, hp, atk, def, satk, sdef, spd, mov1, mov2, mov3, mov4, obj) {
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
}

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
    if (movType == Normal && enemyType == Rock || movType == Normal && enemyType == Steel || 
        movType == Fire && enemyType == Fire || movType == Fire && enemyType == Water || movType == Fire && enemyType == Rock || movType == Fire && enemyType == Dragon ||
        movType == Water && enemyType == Water || movType == Water && enemyType == Grass || movType == Water && enemyType == Dragon ||
        movType == Grass && enemyType == Fire || movType == Grass && enemyType == Grass || movType == Grass && enemyType == Poison || movType == Grass && enemyType == Flying || movType == Grass && enemyType == Bug || movType == Grass && enemyType == Dragon || movType == Grass && enemyType == Steel ||
        movType == Electric && enemyType == Grass || movType == Electric && enemyType == Electric || movType == Electric && enemyType == Dragon ||
        movType == Ice && enemyType == Fire || movType == Ice && enemyType == Water || movType == Ice && enemyType == Ice || movType == Ice && enemyType == Steel ||
        movType == Fighting && enemyType == Poison || movType == Fighting && enemyType == Flying || movType == Fighting && enemyType == Psychic || movType == Fighting && enemyType == Bug || movType == Fighting && enemyType == Fairy ||
        movType == Poison && enemyType == Poison || movType == Poison && enemyType == Ground || movType == Poison && enemyType == Rock || movType == Poison && enemyType == Ghost ||
        movType == Ground && enemyType == Grass || movType == Ground && enemyType == Bug ||
        movType == Flying && enemyType == Electric || movType == Flying && enemyType == Steel || movType == Flying && enemyType == Rock ||
        movType == Psychic && enemyType == Psychic || movType == Psychic && enemyType == Steel ||
        movType == Bug && enemyType == Fire || movType == Bug && enemyType == Fighting || movType == Bug && enemyType == Poison || movType == Bug && enemyType == Flying || movType == Bug && enemyType == Ghost || movType == Bug && enemyType == Steel || movType == Bug && enemyType == Fairy ||
        movType == Rock && enemyType == Fighting || movType == Rock && enemyType == Ground || movType == Rock && enemyType == Steel ||
        movType == Ghost && enemyType == Dark ||
        movType == Dragon && enemyType == Steel ||
        movType == Dark && enemyType == Fighting || movType == Dark && enemyType == Dark || movType == Dark && enemyType == Fairy ||
        movType == Steel && enemyType == Fire || movType == Steel && enemyType == Water || movType == Steel && enemyType == Water || movType == Steel && enemyType == Electric || movType == Steel && enemyType == Steel ||
        movType == Fairy && enemyType == Fire || movType == Fairy && enemyType == Poison || movType == Fairy && enemyType == Steel
    ) {
        multip = .5;
        document.getElementById('console').innerHTML = "";
        pokeConsole.innerHTML +=`
        <h6 class="card-text texto console-text">Es poco efectivo</H6>
        `
        return multip;
    }
            // Ataques nada eficaces
    else if (movType == Normal && enemyType == Ghost ||
        movType == Electric && enemyType == Grass ||
        movType == Fighting && enemyType == Ghost ||
        movType == Poison && enemyType == Steel ||
        movType == Ground && enemyType == Flying ||
        movType == Psychic && enemyType == Dark ||
        movType == Ghost && enemyType == Normal ||
        movType == Dragon && enemyType == Fairy
    ) {
        multip = 0;
        document.getElementById('console').innerHTML = "";
        pokeConsole.innerHTML += `
        <h6 class="card-text texto console-text">El movimiento no afecta al rival</H6>
        `
        return multip;
    }
    else if(movType == Fire && enemyType == Grass || movType == Fire && enemyType == Ice || movType == Fire && enemyType == Bug || movType == Fire && enemyType == Steel ||
        movType == Water && enemyType == Fire || movType == Water && enemyType == Ground || movType == Water && enemyType == Rock ||
        movType == Grass && enemyType == Ground || movType == Grass && enemyType == Water || movType == Grass && enemyType == Rock || 
        movType == Electric && enemyType == Water || movType == Electric && enemyType == Flying ||
        movType == Ice && enemyType == Grass || movType == Ice && enemyType == Ground || movType == Ice && enemyType == Flying || movType == Ice && enemyType == Dragon ||
        movType == Fighting && enemyType == Normal || movType == Fighting && enemyType == Ice || movType == Fighting && enemyType == Rock || movType == Fighting && enemyType == Dark || movType == Fighting && enemyType == Steel ||
        movType == Poison && enemyType == Grass || movType == Poison && enemyType == Fairy ||
        movType == Ground && enemyType == Fire || movType == Ground && enemyType == Electric || movType == Ground && enemyType == Poison || movType == Ground && enemyType == Rock || movType == Ground && enemyType == Steel ||
        movType == Flying && enemyType == Grass || movType == Flying && enemyType == Fighting || movType == Flying && enemyType == Bug ||
        movType == Psychic && enemyType == Fighting || movType == Psychic && enemyType == Poison || 
        movType == Bug && enemyType == Grass || movType == Bug && enemyType == Psychic || movType == Bug && enemyType == Dark ||
        movType == Rock && enemyType == Fire || movType == Rock && enemyType == Ice || movType == Rock && enemyType == Flying || movType == Rock && enemyType == Bug ||
        movType == Ghost && enemyType == Psychic || movType == Ghost && enemyType == Ghost ||
        movType == Dragon && enemyType == Dragon ||
        movType == Dark && enemyType == Psychic || movType == Dark && enemyType == Ghost ||
        movType == Steel && enemyType == Ice || movType == Steel && enemyType == Rock || movType == Steel && enemyType == Fairy ||
        movType == Fairy && enemyType == Fighting || movType == Fairy && enemyType == Dragon || movType == Fairy && enemyType == Dark

    ){
        multip = 2;
        document.getElementById('console').innerHTML = "";
        pokeConsole.innerHTML += `
        <h6 class="card-text texto console-text">Es super efectivo</H6>
        `
        return multip;
    }
    else {
        multip = 1;
        return multip;
    }

}

// Calcular danio
function danio(lvl, atk, def, mov, stat, stab, atype1, atype2, presition) {
    let danio = ((((lvl * 2 / 5) + 2) * mov * atk / 50) / def);
    let acertar = getRandomIntInclusive(0, 100);

    if (acertar <= presition) {

        //Checar si el pokemon atacante esta quemado
        if (stat == "burned" && atk == Jugador1.atk) {
            danio = danio * .5 + 2;
        }
        else {
            danio = danio * 1 + 2;
        }

        // Calcular critico y numero random
        let randomnum = getRandomIntInclusive(0, 100);
        let rnd = getRandomIntInclusive(85, 100);

        // Aplicar Critico y numero random
        if (randomnum <= 6.25) {
            danio = danio * 2 * rnd / 100;
            console.log("Golpe Critico!");
        }
        else {
            danio = danio * 1 * rnd / 100;
        }

        //Stab, ventajas y desventajas (Falta agregar funcion para ventajas y desventajas)
        if (stab == atype1 || stab == atype2) {
            danio = danio * 1.5;
        }
        else {
            danio = danio * 1;
        }

        alert("El danio es: " + danio)
        console.log("El danio es: " + danio);
    }
    else {
        danio = 0;
        alert("El ataque ha fallado");
        console.log("El ataque ha fallado");
    }


    return danio;
}


// // Comienza la batalla pokemon!
// do {
//     if (Jugador1.spd > Npc1.spd) { // Si la velocidad del jugador es mayor a la del CPU
//         // Turno Jugador

//         if (Jugador1.alive == true && Npc1.alive == true) {
//             ataque = parseInt(prompt("Ingresa un numero para usar uno de tus ataques: \n1.-Air Slash \n2.-Lanza Llamas \n3.-Colmillo Igneo \n4.-Hiperrayo "));
//             switch (ataque) {
//                 case 1: // airslash
//                     Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, Jugador1.mov1.power, Jugador1.stat, Jugador1.mov1.type, Jugador1.type1, Jugador1.type2, Jugador1.mov1.presition);
//                     break;
//                 case 2: // flamethrower
//                     Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, Jugador1.mov2.power, Jugador1.stat, Jugador1.mov2.type, Jugador1.type1, Jugador1.type2, Jugador1.mov2.presition);
//                     break;
//                 case 3: // Fire fang
//                     Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.atk, Npc1.def, Jugador1.mov3.power, Jugador1.stat, Jugador1.mov3.type, Jugador1.type1, Jugador1.type2, FireFang.mov3.presition);
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
                        <h5 class="card-text texto">${creature.type1} ${creature.type2}</h5>
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
                    <h5 class="card-text texto">${creature.type1} ${creature.type2}</h5>
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
let playerCurrentPokemon = 4;



// Colapsar todos los elementos y mostrar la batalla pokemon
function ownTeamBattle(){

    if(readyToStart==true){
        ownContainer.innerHTML += `
        <div id="bothPokemon" class="row col-12 d-flex flex-row bd-highlight justify-content-evenly align-items-center">
            <div class="col-6 d-flex bd-highlight justify-content-evenly align-items-center flex-column">
                <h5 class="texto">${playerTeam[playerCurrentPokemon].hp} HP</h5>
                <img class="pokemon-img own-pokemon" src=${playerTeam[playerCurrentPokemon].imgUrl}>
            </div>
            <div class="col-6 d-flex bd-highlight justify-content-evenly align-items-center flex-column">
                <h5 class="texto">${npcTeam[2].hp} HP</h5>
                <img class="pokemon-img" src=${npcTeam[2].imgUrl}>
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

        fightChoosed.onclick = () => {
            document.getElementById('battleButtons').innerHTML = "";
            battleButtonsContainer.innerHTML += `
                <button class="btn btn-secondary fight-buttons" id="mov1">${playerTeam[playerCurrentPokemon].mov1.name} <br> ${playerTeam[playerCurrentPokemon].mov1.category} | precisión: ${playerTeam[playerCurrentPokemon].mov1.presition} <br> Poder: ${playerTeam[playerCurrentPokemon].mov1.power} | pp: ${playerTeam[playerCurrentPokemon].mov1.pp} </button>
                <button class="btn btn-secondary fight-buttons" id="mov2">${playerTeam[playerCurrentPokemon].mov2.name} <br> ${playerTeam[playerCurrentPokemon].mov2.category} | precisión: ${playerTeam[playerCurrentPokemon].mov2.presition} <br> Poder: ${playerTeam[playerCurrentPokemon].mov2.power} | pp: ${playerTeam[playerCurrentPokemon].mov2.pp} </button>
                <button class="btn btn-secondary fight-buttons" id="mov3">${playerTeam[playerCurrentPokemon].mov3.name} <br> ${playerTeam[playerCurrentPokemon].mov3.category} | precisión: ${playerTeam[playerCurrentPokemon].mov3.presition} <br> Poder: ${playerTeam[playerCurrentPokemon].mov3.power} | pp: ${playerTeam[playerCurrentPokemon].mov3.pp} </button>
                <button class="btn btn-secondary fight-buttons" id="mov4">${playerTeam[playerCurrentPokemon].mov4.name} <br> ${playerTeam[playerCurrentPokemon].mov4.category} | precisión: ${playerTeam[playerCurrentPokemon].mov4.presition} <br> Poder: ${playerTeam[playerCurrentPokemon].mov4.power} | pp: ${playerTeam[playerCurrentPokemon].mov4.pp} </button>
            `
        }
    }
    else{
        console.log("No me active (la batalla) jeje");
    }
}

                                                                                                        // category, name, power, presition, type, effect, pp