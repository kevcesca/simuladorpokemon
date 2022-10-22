alert("Choose your pokemon");

// Funcion aleatoria, recibe el menor numero y el mayor
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Crear objetos pokemon
function Pokemon(pokedex, name, alive, stat, type1, type2, ability, lvl, hp, atk, def, satk, sdef, spd, mov1, mov2, mov3, mov4, obj){
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

// Crear objeto jugador y a futuro poder cambiar de pokemon
function Player(pokedex, name, alive, stat, type1, type2, ability, lvl, hp, atk, def, satk, sdef, spd, mov1, mov2, mov3, mov4, obj){
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

// Crear ataques
function Movimiento(category, name, power, presition, type, effect, pp){
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

// Calcular danio
function danio(lvl, atk, def, mov, stat, stab, type1, type2, presition){
    let danio = ((((lvl * 2 / 5 ) + 2) * mov * atk / 50) / def);
    let acertar = getRandomIntInclusive(0, 100);

    if(acertar <= presition){

        //Checar si el pokemon atacante esta quemado
        if (stat=="burned" && atk == Jugador1.atk ){
            danio = danio * .5 + 2;
        }
        else{
            danio = danio * 1 + 2;
        }

        // Calcular critico y numero random
        let randomnum = getRandomIntInclusive(0, 100);
        let rnd = getRandomIntInclusive(85, 100);

        // Aplicar Critico y numero random
        if(randomnum <= 6.25){
            danio = danio * 2 * rnd / 100 ;
            console.log("Golpe Critico!");
        }
        else{
            danio = danio * 1 * rnd / 100 ;
        }

        //Stab, ventajas y desventajas (Falta agregar funcion para ventajas y desventajas)
        if(stab == type1 || stab == type2){
            danio = danio * 1.5;
        }
        else{
            danio = danio * 1 ;
        }
        alert("El danio es: " + danio)
        console.log("El danio es: " + danio);
    }
    else
    {
        danio = 0;
        alert("El ataque ha fallado");
        console.log("El ataque ha fallado");
    }

    
    return danio;
}

// Pokemon jugables
var GDarmanitan = new Pokemon(000, "Darmanitan (Galar)", true, "ok", "ice", "none", "GorillaTactics", 100, 351, 379, 146, 86, 146, 317, Earthquake, BodyPress, IcePunch, FlareBlitz, "none");
var Charizard = new Pokemon(006, "Charizard", true, "ok", "fire", "flying", "Blaze", 100, 297, 183, 192, 317, 207, 328, AirSlash, Flamethrower, FireFang,  HyperBeam, "none");
var Feraligatr = new Pokemon(160, "Feraligatr", true, "ok", "water", "none", "SheerForce", 100, 312, 309, 236, 174, 202, 280, DragonDance, Liquidation, IcePunch, Crunch, "none");
var Blaziken = new Pokemon(257, "Blaziken", true, "ok", "fire", "fighting", "SpeedBoost", 100, 301, 372, 177, 230, 176, 259, FlareBlitz, LowKick, SwordsDance, Protect, "none");
var Salamance = new Pokemon(373, "Salamance", true, "ok", "dragon", "flying", "Intimidate", 100, 342, 405, 196, 230, 196, 289, DragonDance, DoubleEdge, Roost, Facade, "none");
var Porygonz = new Pokemon(474, "Porygon-Z", true, "ok", "normal", "none", "Adaptability", 100, 311, 148, 177, 369, 186, 306, TriAttack, ShadowBall, Discharge,  IceBeam, "none");
var Electivire = new Pokemon(466, "Electivire", true, "ok", "electric", "none", "MotorDrive", 100, 291, 345, 171, 226, 185, 317, FirePunch, WildCharge, Earthquake,  IcePunch, "none");
var Serperior = new Pokemon(497, "Serperior", true, "ok", "grass", "none", "Contrary", 100, 305, 167, 226, 236, 226, 357, LeafStorm, HiddenPowerFire, Substitute,  Glare, "none");
var Greninja = new Pokemon(658, "Greninja", true, "ok", "water", "dark", "Protean", 100, 285, 231, 170, 301, 160, 377, IceBeam, DarkPulse, GunkShot,  WaterShuriken, "none");
var Decidueye = new Pokemon(724, "Decidueye", true, "ok", "grass", "ghost", "Overgrow", 100, 297, 313, 186, 212, 237, 262, Poltergeist, LeafBlade, SpiritShackle, ShadowSneak, "none");


//jugadores
var Jugador1 = new Player(Charizard.name, Charizard.alive, Charizard.stat, Charizard.type1, Charizard.type2, Charizard.ability, Charizard.lvl, Charizard.hp, Charizard.atk, Charizard.def, Charizard.satk, Charizard.sdef, Charizard.spd, Charizard.mov1, Charizard.mov2, Charizard.mov3, Charizard.mov4, Charizard.obj);
var Npc1 = new Player(Decidueye.name, Decidueye.alive, Decidueye.stat, Decidueye.type1, Decidueye.type2, Decidueye.ability, Charizard.lvl, Decidueye.hp, Decidueye.atk, Decidueye.def, Decidueye.satk, Decidueye.sdef, Decidueye.spd, Decidueye.mov1, Decidueye.mov2, Decidueye.mov3, Decidueye.mov4, Decidueye.obj);

console.log(Jugador1);
console.log(Npc1);

// Comienza la batalla pokemon!
do {
    if(Jugador1.spd > Npc1.spd){ // Si la velocidad del jugador es mayor a la del CPU
        // Turno Jugador

        if(Jugador1.alive == true && Npc1.alive == true){
            ataque = parseInt(prompt("Ingresa un numero para usar uno de tus ataques: \n1.-Air Slash \n2.-Lanza Llamas \n3.-Colmillo Igneo \n4.-Hiperrayo "));
            switch (ataque) {
                case 1: // airslash
                    Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, Jugador1.mov1.power, Jugador1.stat, Jugador1.mov1.type, Jugador1.type1, Jugador1.type2, Jugador1.mov1.presition);
                    break;
                case 2: // flamethrower
                    Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, Jugador1.mov2.power, Jugador1.stat, Jugador1.mov2.type, Jugador1.type1, Jugador1.type2, Jugador1.mov2.presition);
                    break;
                case 3: // Fire fang
                    Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.atk, Npc1.def, Jugador1.mov3.power, Jugador1.stat, Jugador1.mov3.type, Jugador1.type1, Jugador1.type2, FireFang.mov3.presition);
                    break;
                case 4: // Hyper beam
                    Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, Jugador1.mov4.power, Jugador1.stat, Jugador1.mov4.type, Jugador1.type1, Jugador1.type2, Jugador1.mov4.presition);
                    break;
                default:
                    ataque = 0;
                    break;
            }
            if(Jugador1.hp <= 0){
                Jugador1.alive = false;
            }
            if(Npc1.hp <= 0){
                Npc1.alive = false;
            }
        }

        // Turno CPU
        if(Jugador1.alive == true && Npc1.alive == true) {
            Jugador1.hp = Jugador1.hp - danio(Npc1.lvl, Npc1.satk, Jugador1.sdef, SpiritShackle.power, Npc1.stat, SpiritShackle.type, Npc1.type1, Npc1.type2, SpiritShackle.presition);
            if(Jugador1.hp <= 0){
                Jugador1.alive = false;
            }
            if(Npc1.hp <= 0){
                Npc1.alive = false;
            }
        }
    }
    else{   
        // De momento decidueye no es mas rapido que charizard
    }

    if(Jugador1.hp <= 0){
        Jugador1.alive = false;
        Jugador1.hp = 0;
    }
    if(Npc1.hp <= 0){
        Npc1.alive = false;
        Npc1.hp = 0;
    }
    alert("El hp restante de tu pokemon es: "+ Jugador1.hp + " / " + Charizard.hp + "\n\nEl hp restante del pokemon enemigo es "+ Npc1.hp + " / " + Decidueye.hp );
} while (Jugador1.alive == true && Npc1.alive == true);

if(Jugador1.hp <= 0){
    alert("La CPU ha ganado");
}
else if (Npc1.hp<=0) {
    alert("Has ganado!");
} 
