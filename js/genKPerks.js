//const kill = document.getElementById('kPerks');
const killerPerks = [
	{
		name: "Deathbound",
		image: "../../images/DbD/perks/deathbound.png"
	},
	{
		name: "Iron Maiden",
		image: "../../images/DbD/perks/ironMaiden.png"
	},
	{
		name: "Hex: Ruin",
		image: "../../images/DbD/perks/ruin.png"
	},
	{
		name: "Dead Man’s Switch	",
		image: "../../images/DbD/perks/deadManSwitch.png"
	},
	{
		name: "Dark Devotion",
		image: "../../images/DbD/perks/darkDevotion.png"
	},
	{
		name: "Monitor & Abuse",
		image: "../../images/DbD/perks/monitorAndAbuse.png"
	},
	{
		name: "Overwhelming Presence",
		image: "../../images/DbD/perks/overwhelmingPresence.png"
	},
	{
		name: "Agitation",
		image: "../../images/DbD/perks/agitation.png"
	},
	{
		name: "Tinkerer",
		image: "../../images/DbD/perks/tinkerer.png"
	},
	{
		name: "Fire Up",
		image: "../../images/DbD/perks/fireUp.png"
	},
	{
		name: "Blood Warden",
		image: "../../images/DbD/perks/bloodWarden.png"
	},
	{
		name: "Unrelenting",
		image: "../../images/DbD/perks/unrelenting.png"
	},
	{
		name: "Iron Grasp",
		image: "../../images/DbD/perks/ironGrasp.png"
	},
	{
		name: "Monstrous Shrine",
		image: "../../images/DbD/perks/monstrousShrine.png"
	},
	{
		name: "Sloppy Butcher",
		image: "../../images/DbD/perks/sloppyButcher.png"
	},
	{
		name: "Nemesis",
		image: "../../images/DbD/perks/nemesis.png"
	},
	{
		name: "Hex: Thrill of the Hunt",
		image: "../../images/DbD/perks/thrillOfTheHunt.png"
	},
	{
		name: "Bloodhound",
		image: "../../images/DbD/perks/bloodhound.png"
	},
	{
		name: "Shadowborn",
		image: "../../images/DbD/perks/shadowborn.png"
	},
	{
		name: "Forced Penance",
		image: "../../images/DbD/perks/forcedPenance.png"
	},
	{
		name: "Insidious",
		image: "../../images/DbD/perks/insidious.png"
	},
	{
		name: "Rancor",
		image: "../../images/DbD/perks/hatred.png"
	},
	{
		name: "Franklin's Demise",
		image: "../../images/DbD/perks/franklinsLoss.png"
	},
	{
		name: "Hex: The Third Seal",
		image: "../../images/DbD/perks/theThirdSeal.png"
	},
	{
		name: "Overcharge",
		image: "../../images/DbD/perks/generatorOvercharge.png"
	},
	{
		name: "Remember Me",
		image: "../../images/DbD/perks/rememberMe.png"
	},
	{
		name: "Infectious Fright",
		image: "../../images/DbD/perks/infectiousFright.png"
	},
	{
		name: "Bamboozle",
		image: "../../images/DbD/perks/bamboozle.png"
	},
	{
		name: "Cruel Limits",
		image: "../../images/DbD/perks/cruelConfinement.png"
	},
	{
		name: "Distressing",
		image: "../../images/DbD/perks/distressing.png"
	},
	{
		name: "Beast of Prey",
		image: "../../images/DbD/perks/BeastOfPrey.png"
	},
	{
		name: "Gearhead",
		image: "../../images/DbD/perks/gearHead.png"
	},
	{
		name: "Spies from the Shadows",
		image: "../../images/DbD/perks/spiesFromTheShadows.png"
	},
	{
		name: "Blood Echo",
		image: "../../images/DbD/perks/bloodEcho.png"
	},
	{
		name: "Hangman's Trick",
		image: "../../images/DbD/perks/hangmansTrick.png"
	},
	{
		name: "Play with your food",
		image: "../../images/DbD/perks/playWithYourFood.png"
	},
	{
		name: "Hex: Haunted Ground",
		image: "../../images/DbD/perks/hauntedGround.png"
	},
	{
		name: "Hex: Retribution",
		image: "../../images/DbD/perks/hexRetribution.png"
	},
	{
		name: "Thrilling Tremors",
		image: "../../images/DbD/perks/thrillingTremors.png"
	},
	{
		name: "Stridor",
		image: "../../images/DbD/perks/stridor.png"
	},
	{
		name: "Deerstalker",
		image: "../../images/DbD/perks/deerstalker.png"
	},
	{
		name: "Pop Goes the Weasel",
		image: "../../images/DbD/perks/popGoesTheWeasel.png"
	},
	{
		name: "Save the best for last",
		image: "../../images/DbD/perks/saveTheBestForLast.png"
	},
	{
		name: "Bitter Murmur",
		image: "../../images/DbD/perks/bitterMurmur.png"
	},
	{
		name: "Hex: Huntress Lullaby",
		image: "../../images/DbD/perks/HuntressLullaby.png"
	},
	{
		name: "Unnerving Presence",
		image: "../../images/DbD/perks/unnervingPresence.png"
	},
	{
		name: "Predator",
		image: "../../images/DbD/perks/predator.png"
	},
	{
		name: "I'm All Ears",
		image: "../../images/DbD/perks/imAllEars.png"
	},
	{
		name: "Surge",
		image: "../../images/DbD/perks/surge.png"
	},
	{
		name: "A Nurse's Calling",
		image: "../../images/DbD/perks/aNursesCalling.png"
	},
	{
		name: "Zanshin Tactics",
		image: "../../images/DbD/perks/zanshinTactics.png"
	},
	{
		name: "Enduring",
		image: "../../images/DbD/perks/enduring.png"
	},
	{
		name: "Mindbreaker",
		image: "../../images/DbD/perks/mindBreaker.png"
	},
	{
		name: "Surveillance",
		image: "../../images/DbD/perks/surveillance.png"
	},
	{
		name: "Furtive Chase",
		image: "../../images/DbD/perks/furtiveChase.png"
	},
	{
		name: "Mad Grit",
		image: "../../images/DbD/perks/madGrit.png"
	},
	{
		name: "Knock Out",
		image: "../../images/DbD/perks/knockOut.png"
	},
	{
		name: "Trail of Torment",
		image: "../../images/DbD/perks/trailOfTorment.png"
	},
	{
		name: "Brutal Strength",
		image: "../../images/DbD/perks/brutalStrength.png"
	},
	{
		name: "Thanatophobia",
		image: "../../images/DbD/perks/thatanophobia.png"
	},
	{
		name: "Coulrophobia",
		image: "../../images/DbD/perks/coulrophobia.png"
	},
	{
		name: "Whispers",
		image: "../../images/DbD/perks/whispers.png"
	},
	{
		name: "Barbecue & Chili",
		image: "../../images/DbD/perks/BBQAndChili.png"
	},
	{
		name: "Discordance",
		image: "../../images/DbD/perks/discordance.png"
	},
	{
		name: "Spirit Fury",
		image: "../../images/DbD/perks/spiritFury.png"
	},
	{
		name: "Corrupt Intervention",
		image: "../../images/DbD/perks/corruptIntervention.png"
	},
	{
		name: "Make your Choice",
		image: "../../images/DbD/perks/makeYourChoice.png"
	},
	{
		name: "Dying Light",
		image: "../../images/DbD/perks/dyingLight.png"
	},
	{
		name: "Territorial Imperative",
		image: "../../images/DbD/perks/TerritorialImperative.png"
	},
    {
		name: "Dragon's Grip",
		image: "../../images/DbD/perks/dragonsGrip.png"
	},
    {
		name: "Hex: Blood Favor",
		image: "../../images/DbD/perks/hexBloodFavor.png"
	},
    {
		name: "Hex: Undying",
		image: "../../images/DbD/perks/hexUndying.png"
	},
    {
		name: "Hoarder",
		image: "../../images/DbD/perks/hoarder.png"
	},
    {
		name: "Oppression",
		image: "../../images/DbD/perks/Oppression.png"
	},
    {
		name: "Coup de Grâce",
		image: "../../images/DbD/perks/coupDeGrace.png"
	}
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getIndeces(length, arrLength) {
    var arr = [];
    while(arr.length < length){
        var r = Math.floor(Math.random() * arrLength);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

const fetchKPerks = (bound) => {
    
    const killerPerks = [];
    const url = 'https://dbd-stats.info/api/perks/';
    killerPerks.push(fetch(url).then((res) => res.json()));
    
    Promise.all(killerPerks).then((results) => {
        buildKPerks(results);
    });
    
};

const buildKPerks = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var kPerks = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if ((item[element].type === "EInventoryItemType::SlasherPerk") && item[element].bloodWeb) {
                kPerks.push([item[element].displayName, item[element].perkDefaultDescription, url + item[element].iconPathList[0]]);
            }
        }
        
        var kIndeces = getIndeces(4, kPerks.length);
        return displayKillerPerks([kPerks[kIndeces[0]], kPerks[kIndeces[1]], kPerks[kIndeces[2]], kPerks[kIndeces[3]]]);
    }
};

const displayKillerPerks_old = (disPerks) => {
    kill.innerHTML = '';
    var i = 0;
    for (i = 0; i < 4; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><h2 class="text-center">' +
        disPerks[i][0] + '</h2>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + disPerks[i][2] +'"></div>' + '<div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div><br>' + '</li>';
        kill.innerHTML += lag;
    }
};

function displayKillerPerks() {
    //letsgokp();
    //kill.innerHTML = '';
    var sIndeces = getIndeces(4, killerPerks.length);
    var perks = [killerPerks[sIndeces[0]], killerPerks[sIndeces[1]], killerPerks[sIndeces[2]], killerPerks[sIndeces[3]]];
    var lag = '<li class="list-group-item list-group-item-danger">';
    var i = 0;
    for (i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            lag += '<div class="row">';
        }
        lag += '<div class="column" style="width:50%"><h3 class="text-center">' +
        perks[i].name + '</h3>' + '<div class="text-center"> <img class="img-fluid" style="height: auto; width: 35%;" src="' + perks[i].image +'"></div></div>';
        if (i % 2 == 1) {
            lag += '</div>';
        }
    }
    //lag += '</li>';
    lag +='</li></div></li>';
    return lag;
    //kill.innerHTML += lag;
}

function letsgokp() {
    var i = 0;
    var arr = ['name: ', 'image: '];
    var a = 'const killerPerks = [\n';
    for(i = 0; i < killerPerks.length; i++) {
        var j = 0;
        var add;
        a += '\t{\n';
        for (j = 0; j < arr.length; j++) {
            var index = killerPerks[i].image.lastIndexOf('_')+1;
            index = '../../images/DbD/perks/' + killerPerks[i].image.substr(index);
            if (j == arr.length-1) { 
                a += '\t\t' + arr[j];
                add = '"' + index + '"';
                a += add + '\n';
            } else {
                a += '\t\t' + arr[j];
                add = '"' + killerPerks[i].name + '"';
                a += add + ',\n';
            }
        }
        if (i == killerPerks.length-1) {
            a += '\t}\n';
        } else {
            a += '\t},\n'
        }
    }
    a += '];';
    console.log(a);
}

displayKillerPerks();