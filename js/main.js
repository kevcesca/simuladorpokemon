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
var listadepokemon = ""
pokemonList.forEach((num) => {
    listadepokemon = listadepokemon + num.name + " " + num.pokedex + "\n";
})
console.log(listadepokemon);


// var choose = 0;
// let dentrono = false;
// let malaeleccion = false;
// const jugador1 = [];
// for (let index = 0; index < 6; index++) {
//     for (let j = 0; j < 50; j++) {
//         malaeleccion = false;
//         dentrono = false;
//         choose = parseInt(prompt("Ingresa el numero de pokedex del pokemon que quieres agregar a tu equipo \n" + listadepokemon));
//         // buscar el numero de pokedex dentro del equipo del jugador
//         malaeleccion = jugador1.some((el) => el.pokedex == choose);
//         // buscar el numero de pokedex en la lista de pokemon y regresar true o false
//         dentrono = pokemonList.some((el) => el.pokedex == choose);
//         if (malaeleccion == true || dentrono == false) {
//             alert("vuelve a introducir el pokemon que quieres");
//         }
//         else {
//             break;
//         }
//     }
//     jugador1[index] = pokemonList.find((el) => el.pokedex === choose)
//     console.log(jugador1[index]);
// }

// console.log(jugador1);


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

//jugadores
var Jugador1 = new Player(Charizard.name, Charizard.alive, Charizard.stat, Charizard.type1, Charizard.type2, Charizard.ability, Charizard.lvl, Charizard.hp, Charizard.atk, Charizard.def, Charizard.satk, Charizard.sdef, Charizard.spd, Charizard.mov1, Charizard.mov2, Charizard.mov3, Charizard.mov4, Charizard.obj);
var Npc1 = new Player(Decidueye.name, Decidueye.alive, Decidueye.stat, Decidueye.type1, Decidueye.type2, Decidueye.ability, Charizard.lvl, Decidueye.hp, Decidueye.atk, Decidueye.def, Decidueye.satk, Decidueye.sdef, Decidueye.spd, Decidueye.mov1, Decidueye.mov2, Decidueye.mov3, Decidueye.mov4, Decidueye.obj);

console.log(Jugador1);
console.log(Npc1);

// Funcion aleatoria, recibe el menor numero y el mayor
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Calcular danio
function danio(lvl, atk, def, mov, stat, stab, type1, type2, presition) {
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
        if (stab == type1 || stab == type2) {
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

let contenedorPokemon = document.getElementById("elegirPokemon");
// crear las cards
contenedorPokemon.innerHTML = ''
for (const especie of pokemonList) {
    let tarjetaPokemon = document.createElement('div');
    tarjetaPokemon.className = 'card fonditos d-flex flex-column p-2 bd-highlight justify-content-evenly align-items-center'
    tarjetaPokemon.innerHTML = `
                <h4 class="card-title texto">${especie.pokedex} ${especie.name}</h4>
                <h5 class="card-text texto">${especie.type1} ${especie.type2}</h5>
                <h6 class="card-text texto">Tiene los movimientos: ${especie.mov1.name} ${especie.mov2.name} ${especie.mov3.name} ${especie.mov4.name}</h6>
                <img class="pokemon-img" src=${especie.imgUrl}>
                <button class="boton btn btn-secondary" id=${especie.pokedex}>Agregar al equipo</button>
            `
    contenedorPokemon.append(tarjetaPokemon);
}

let botones = document.getElementsByClassName('boton');
let botonesQuitar = document.getElementsByClassName('boton-quitar');
let equipo = document.getElementById('equipo');

let equipoGuardado = [];

// Checar si hay un equipo guardado en el local storage
if (localStorage.getItem('equipo')) {
    equipoGuardado = JSON.parse(localStorage.getItem('equipo'));
    console.log("si hay equipo");
}



// cargar el equipo guardado (si es que hay)
function renderizarEquipo() {
    document.getElementById('equipo').innerHTML = "";
    for (const especie of equipoGuardado) {
        console.log(especie.name);
        equipo.innerHTML += `
            <div class="miembro-equipo card fonditos d-flex flex-column p-2 bd-highlight justify-content-evenly align-items-center"}>
                <h4 class="card-title texto">${especie.pokedex} ${especie.name}</h4>
                <h5 class="card-text texto">${especie.type1} ${especie.type2}</h5>
                <h6 class="card-text texto">Tiene los movimientos: ${especie.mov1.name} ${especie.mov2.name} ${especie.mov3.name} ${especie.mov4.name}</h6>
                <img class="pokemon-img" src=${especie.imgUrl}>
                <button class="boton-quitar btn btn-secondary" id=${(especie.pokedex)+1000}>Quitar del equipo</button>
            </div>
        `
    }
}
renderizarEquipo();

// guardar pokemon dentro del equipo
for (const boton of botones) {
    boton.onclick = (e) => {
        renderizarEquipo();
        if(equipoGuardado.length<6){
            let dentrono = equipoGuardado.some((el) => el.pokedex == e.target.id);
            console.log(dentrono);
            if(!dentrono){
                let pokemonBuscado = pokemonList.find(especie => especie.pokedex == e.target.id);
                console.log(pokemonBuscado);
                // Almacenar los pokemon dentro de tu equipo y crear un archivo JSON para guardarlos en el local storage 
                equipoGuardado.push(pokemonBuscado);
                console.log(equipoGuardado);
            }
            else{
                alert("El pokemon ya esta en tu equipo");
            }
        }
        else{
            alert("Tu equipo ya esta completo");
        }
        localStorage.setItem('equipo', JSON.stringify(equipoGuardado));
        // location.reload();
        renderizarEquipo();
    }
}

for (const boton of botonesQuitar) {
    boton.onclick = (e) => {
        renderizarEquipo();
        console.log("entre a borrar");
        let idQuitar = e.target.id - 1000;
        console.log(idQuitar);
        for (let index = 0; index < equipoGuardado.length; index++) {
            if(idQuitar == equipoGuardado[index].pokedex){
                equipoGuardado.splice(index, 1);
            }
        }
        localStorage.setItem('equipo', JSON.stringify(equipoGuardado));
        renderizarEquipo();
    }
}