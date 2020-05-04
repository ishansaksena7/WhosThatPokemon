//Challenge 1
function ageInDays()
{
var birthYear = prompt('What year were you born');
var ageInDayz = (2020-birthYear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' +  ageInDayz + ' days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}
//Challenge 2
const i=Math.floor(Math.random() * 100); 
function generateCat()
{
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src= `https://pokeres.bastionbot.org/images/pokemon/${i}.png`;
    div.appendChild(image);
    return i;

}

function WhosThatPokemon()
{
var answer = prompt('Whos that Pokemon?');
var h1 = document.createElement('h1');
{
if( i==1 && answer=='Bulbasaur'|| i==2 && answer=='Ivysaur'|| i==3 && answer=='Venusaur'|| i==4 && answer=='Charmander'|| i==5 && answer=='Charmeleon'|| i==6 && answer=='Charizard'|| i==7 && answer=='Squirtle'|| i==8 && answer=='Wartortle'|| i==9 && answer=='Blastoise'|| i==10 && answer=='Caterpie'|| i==11 && answer=='Metapod'|| i==12 && answer=='Butterfree'|| i==13 && answer=='Weedle'|| i==14 && answer=='Kakuna'|| i==15 && answer=='Beedrill'|| i==16 && answer=='Pidgey'|| i==17 && answer=='Pidgeotto'|| i==18 && answer=='Pidgeot'|| i==19 && answer=='Rattata'|| i==20 && answer=='Raticate'|| i==21 && answer=='Spearow'|| i==22 && answer=='Fearow'|| i==23 && answer=='Ekans'|| i==24 && answer=='Arbok'|| i==25 && answer=='Pikachu'|| i==26 && answer=='Raichu'|| i==27 && answer=='Sandshrew'|| i==28 && answer=='Sandslash'|| i==29 && answer=='Nidoran♀'|| i==30 && answer=='Nidorina'|| i==31 && answer=='Nidoqueen'|| i==32 && answer=='Nidoran♂'|| i==33 && answer=='Nidorino'|| i==34 && answer=='Nidoking'|| i==35 && answer=='Clefairy'|| i==36 && answer=='Clefable'|| i==37 && answer=='Vulpix'|| i==38 && answer=='Ninetales'|| i==39 && answer=='Jigglypuff'|| i==40 && answer=='Wigglytuff'|| i==41 && answer=='Zubat'|| i==42 && answer=='Golbat'|| i==43 && answer=='Oddish'|| i==44 && answer=='Gloom'|| i==45 && answer=='Vileplume'|| i==46 && answer=='Paras'|| i==47 && answer=='Parasect'|| i==48 && answer=='Venonat'|| i==49 && answer=='Venomoth'|| i==50 && answer=='Diglett'|| i==51 && answer=='Dugtrio'|| i==52 && answer=='Meowth'|| i==53 && answer=='Persian'|| i==54 && answer=='Psyduck'|| i==55 && answer=='Golduck'|| i==56 && answer=='Mankey'|| i==57 && answer=='Primeape'|| i==58 && answer=='Growlithe'|| i==59 && answer=='Arcanine'|| i==60 && answer=='Poliwag'|| i==61 && answer=='Poliwhirl'|| i==62 && answer=='Poliwrath'|| i==63 && answer=='Abra'|| i==64 && answer=='Kadabra'|| i==65 && answer=='Alakazam'|| i==66 && answer=='Machop'|| i==67 && answer=='Machoke'|| i==68 && answer=='Machamp'|| i==69 && answer=='Bellsprout'|| i==70 && answer=='Weepinbell'|| i==71 && answer=='Victreebel'|| i==72 && answer=='Tentacool'|| i==73 && answer=='Tentacruel'|| i==74 && answer=='Geodude'|| i==75 && answer=='Graveler'|| i==76 && answer=='Golem'|| i==77 && answer=='Ponyta'|| i==78 && answer=='Rapidash'|| i==79 && answer=='Slowpoke'|| i==80 && answer=='Slowbro'|| i==81 && answer=='Magnemite'|| i==82 && answer=='Magneton'|| i==83 && answer=='Farfetch’d'|| i==84 && answer=='Doduo'|| i==85 && answer=='Dodrio'|| i==86 && answer=='Seel'|| i==87 && answer=='Dewgong'|| i==88 && answer=='Grimer'|| i==89 && answer=='Muk'|| i==90 && answer=='Shellder'|| i==91 && answer=='Cloyster'|| i==92 && answer=='Gastly'|| i==93 && answer=='Haunter'|| i==94 && answer=='Gengar'|| i==95 && answer=='Onix'|| i==96 && answer=='Drowzee'|| i==97 && answer=='Hypno'|| i==98 && answer=='Krabby'|| i==99 && answer=='Kingler'|| i==100 && answer=='Voltorb'|| i==101 && answer=='Electrode'|| i==102 && answer=='Exeggcute'|| i==103 && answer=='Exeggutor'|| i==104 && answer=='Cubone'|| i==105 && answer=='Marowak'|| i==106 && answer=='Hitmonlee'|| i==107 && answer=='Hitmonchan'|| i==108 && answer=='Lickitung'|| i==109 && answer=='Koffing'|| i==110 && answer=='Weezing'|| i==111 && answer=='Rhyhorn'|| i==112 && answer=='Rhydon'|| i==113 && answer=='Chansey'|| i==114 && answer=='Tangela'|| i==115 && answer=='Kangaskhan'|| i==116 && answer=='Horsea'|| i==117 && answer=='Seadra'|| i==118 && answer=='Goldeen'|| i==119 && answer=='Seaking'|| i==120 && answer=='Staryu'|| i==121 && answer=='Starmie'|| i==122 && answer=='Mr. Mime'|| i==123 && answer=='Scyther'|| i==124 && answer=='Jynx'|| i==125 && answer=='Electabuzz'|| i==126 && answer=='Magmar'|| i==127 && answer=='Pinsir'|| i==128 && answer=='Tauros'|| i==129 && answer=='Magikarp'|| i==130 && answer=='Gyarados'|| i==131 && answer=='Lapras'|| i==132 && answer=='Ditto'|| i==133 && answer=='Eevee'|| i==134 && answer=='Vaporeon'|| i==135 && answer=='Jolteon'|| i==136 && answer=='Flareon'|| i==137 && answer=='Porygon'|| i==138 && answer=='Omanyte'|| i==139 && answer=='Omastar'|| i==140 && answer=='Kabuto'|| i==141 && answer=='Kabutops'|| i==142 && answer=='Aerodactyl'|| i==143 && answer=='Snorlax'|| i==144 && answer=='Articuno'|| i==145 && answer=='Zapdos'|| i==146 && answer=='Moltres'|| i==147 && answer=='Dratini'|| i==148 && answer=='Dragonair'|| i==149 && answer=='Dragonite'|| i==150 && answer=='Mewtwo'|| i==151 && answer=='Mew')
{
var textAnswer = document.createTextNode('Correct!');
}
else
{
    var textAnswer = document.createTextNode('Wrong!'); 
}


}
h1.setAttribute('id','WhosThatPokemon');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result-2').appendChild(h1);
}