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
var GDarmanitan = new Pokemon(000, "Darmanitan (Galar)", true, "ok", "ice", "none", "GorillaTactics", 100, 351, 379, 146, 86, 146, 317, Earthquake, BodyPress, IcePunch, FlareBlitz, "none", "../assets/img/darmanitan-galar.gif");
var Charizard = new Pokemon(006, "Charizard", true, "ok", "fire", "flying", "Blaze", 100, 297, 183, 192, 317, 207, 328, AirSlash, Flamethrower, FireFang, HyperBeam, "none", "../assets/img/charizard.gif");
var Feraligatr = new Pokemon(160, "Feraligatr", true, "ok", "water", "none", "SheerForce", 100, 312, 309, 236, 174, 202, 280, DragonDance, Liquidation, IcePunch, Crunch, "none", "../assets/img/feraligatr.gif");
var Blaziken = new Pokemon(257, "Blaziken", true, "ok", "fire", "fighting", "SpeedBoost", 100, 301, 372, 177, 230, 176, 259, FlareBlitz, LowKick, SwordsDance, Protect, "none", "../assets/img/blaziken-f.gif");
var Salamance = new Pokemon(373, "Salamance", true, "ok", "dragon", "flying", "Intimidate", 100, 342, 405, 196, 230, 196, 289, DragonDance, DoubleEdge, Roost, Facade, "none", "../assets/img/salamence.gif");
var Electivire = new Pokemon(466, "Electivire", true, "ok", "electric", "none", "MotorDrive", 100, 291, 345, 171, 226, 185, 317, FirePunch, WildCharge, Earthquake, IcePunch, "none", "../assets/img/electivire.gif");
var Porygonz = new Pokemon(474, "Porygon-Z", true, "ok", "normal", "none", "Adaptability", 100, 311, 148, 177, 369, 186, 306, TriAttack, ShadowBall, Discharge, IceBeam, "none", "../assets/img/porygon-z.gif");
var Serperior = new Pokemon(497, "Serperior", true, "ok", "grass", "none", "Contrary", 100, 305, 167, 226, 236, 226, 357, LeafStorm, HiddenPowerFire, Substitute, Glare, "none", "../assets/img/serperior.gif");
var Greninja = new Pokemon(658, "Greninja", true, "ok", "water", "dark", "Protean", 100, 285, 231, 170, 301, 160, 377, IceBeam, DarkPulse, GunkShot, WaterShuriken, "none", "../assets/img/greninja.gif");
var Decidueye = new Pokemon(724, "Decidueye", true, "ok", "grass", "ghost", "Overgrow", 100, 297, 313, 186, 212, 237, 262, Poltergeist, LeafBlade, SpiritShackle, ShadowSneak, "none", "../assets/img/decidueye.gif");

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



if (localStorage.getItem('equipo')) {
    savedTeam = JSON.parse(localStorage.getItem('equipo'));
    console.log("si hay equipo");
}

let enemyContainer = document.getElementById("enemy");
let ownContainer = document.getElementById('own');
function ownTeamBattle(){

    ownContainer.innerHTML += `
        <div id="bothPokemon" class="row col-12 d-flex bd-highlight justify-content-evenly align-items-center">
            <img class="pokemon-img own-pokemon" src=${Charizard.imgUrl}>
            <img class="pokemon-img" src=${Greninja.imgUrl}>
        </div>
        <div id="bottomContainer" class="row d-flex bd-highlight justify-content-evenly flex-row align-items-center flex-nowrap">
            <div id="console" class="d-flex justify-content-center align-items-center">
                <h6 class="card-text texto console-text">Selecciona una accion</H6>
            </div>
            <div id="battleButtons" class="d-flex bd-highlight justify-content-between align-items-center flex-row flex-wrap">
                <button class="btn btn-secondary battle-buttons">Pelear</button>
                <button class="btn btn-secondary battle-buttons">Pokemon</button>
                <button class="btn btn-secondary battle-buttons">Huir</button>
                <button class="btn btn-secondary battle-buttons">Item</button>
            </div>
            
        </div>
        `
    }
    ownTeamBattle();