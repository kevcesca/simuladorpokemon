alert("Choose your pokemon");

// Funcion aleatoria
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Crear objetos pokemon
function Pokemon(alive, stat, type1, type2, ability, lvl, hp, atk, def, satk, sdef, spd, mov1, mov2, mov3, mov4, obj){
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
function Player(alive, stat, type1, type2, ability, lvl, hp, atk, def, satk, sdef, spd, mov1, mov2, mov3, mov4, obj){
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
function Movimiento(power, presition, type, effect, pp){
    this.power = power;
    this.presition = presition;
    this.type = type;
    this.effect = effect;
    this.pp = pp;
}

// Ataques
var AirSlash = new Movimiento(75, 95, "flying", "flinch", 15);
var Flamethrower = new Movimiento(90, 100, "fire", "burn", 15);
var FireFang = new Movimiento(65, 95, "fire", "flinch-burn", 15);
var HyperBeam = new Movimiento(150, 0, "fire", "loseturn", 5); //0% de acertar porque de momento solo se usa contra un fantasma
var SpiritShackle = new Movimiento(80, 100, "ghost", "noswitch", 10);

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
var Charizard = new Pokemon(true, "ok", "fire", "flying", "blaze", 50, 266, 84, 78, 109, 85, 100, "Air-Slash", "Flamethrower", "Fire-Fang", "Hyper-Beam", "none");
var Decidueye = new Pokemon(true, "ok", "grass", "ghost", "overgrow", 50, 220, 107, 75, 100, 100, 70, "Spirit-Shackle", "Spirit-Shackle", "Spirit-Shackle", "Spirit-Shackle", "none");

//jugadores
var Jugador1 = new Player(Charizard.alive, Charizard.stat, Charizard.type1, Charizard.type2, Charizard.ability, Charizard.lvl, Charizard.hp, Charizard.atk, Charizard.def, Charizard.satk, Charizard.sdef, Charizard.spd, Charizard.mov1, Charizard.mov2, Charizard.mov3, Charizard.mov4, Charizard.obj);
var Npc1 = new Player(Decidueye.alive, Decidueye.stat, Decidueye.type1, Decidueye.type2, Decidueye.ability, Charizard.lvl, Decidueye.hp, Decidueye.atk, Decidueye.def, Decidueye.satk, Decidueye.sdef, Decidueye.spd, Decidueye.mov1, Decidueye.mov2, Decidueye.mov3, Decidueye.mov4, Decidueye.obj);

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
                    Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, AirSlash.power, Jugador1.stat, AirSlash.type, Jugador1.type1, Jugador1.type2, AirSlash.presition);
                    break;
                case 2: // flamethrower
                    Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, Flamethrower.power, Jugador1.stat, Flamethrower.type, Jugador1.type1, Jugador1.type2, Flamethrower.presition);
                    break;
                case 3: // Fire fang
                    Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.atk, Npc1.def, FireFang.power, Jugador1.stat, FireFang.type, Jugador1.type1, Jugador1.type2, FireFang.presition);
                    break;
                case 4: // Hyper beam
                    Npc1.hp = Npc1.hp - danio(Jugador1.lvl, Jugador1.satk, Npc1.sdef, HyperBeam.power, Jugador1.stat, HyperBeam.type, Jugador1.type1, Jugador1.type2, HyperBeam.presition);
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
