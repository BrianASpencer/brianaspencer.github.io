const surv = document.getElementById('sPerks');
const survivorPerks = [
	{
		name: "Babysitter",
		image: "../../images/DbD/perks/babySitter.png"
	},
	{
		name: "Open-Handed",
		image: "../../images/DbD/perks/openHanded.png"
	},
	{
		name: "Quick & Quiet",
		image: "../../images/DbD/perks/quickAndQuiet.png"
	},
	{
		name: "Soul Guard",
		image: "../../images/DbD/perks/soulGuard.png"
	},
	{
		name: "Technician",
		image: "../../images/DbD/perks/technician.png"
	},
	{
		name: "For the People",
		image: "../../images/DbD/perks/forThePeople.png"
	},
	{
		name: "Plunderer's Instinct",
		image: "../../images/DbD/perks/plunderersInstinct.png"
	},
	{
		name: "Empathy",
		image: "../../images/DbD/perks/empathy.png"
	},
	{
		name: "Prove Thyself",
		image: "../../images/DbD/perks/proveThyself.png"
	},
	{
		name: "Sprint Burst",
		image: "../../images/DbD/perks/sprintBurst.png"
	},
	{
		name: "Spine Chill",
		image: "../../images/DbD/perks/spineChill.png"
	},
	{
		name: "Deja Vu",
		image: "../../images/DbD/perks/dejaVu.png"
	},
	{
		name: "Botany Knowledge",
		image: "../../images/DbD/perks/botanyKnowledge.png"
	},
	{
		name: "Any Means Necessary",
		image: "../../images/DbD/perks/anyMeansNecessary.png"
	},
	{
		name: "We'll make it",
		image: "../../images/DbD/perks/wellMakeIt.png"
	},
	{
		name: "Lightweight",
		image: "../../images/DbD/perks/lightweight.png"
	},
	{
		name: "Pharmacy",
		image: "../../images/DbD/perks/pharmacy.png"
	},
	{
		name: "Kindred",
		image: "../../images/DbD/perks/kindred.png"
	},
	{
		name: "Second Wind",
		image: "../../images/DbD/perks/secondWind.png"
	},
	{
		name: "Vigil",
		image: "../../images/DbD/perks/vigil.png"
	},
	{
		name: "Balanced Landing",
		image: "../../images/DbD/perks/balancedLanding.png"
	},
	{
		name: "Dark Sense",
		image: "../../images/DbD/perks/darkSense.png"
	},
	{
		name: "Breakdown",
		image: "../../images/DbD/perks/breakdown.png"
	},
	{
		name: "Lithe",
		image: "../../images/DbD/perks/lithe.png"
	},
	{
		name: "Diversion",
		image: "../../images/DbD/perks/diversion.png"
	},
	{
		name: "Dance With Me",
		image: "../../images/DbD/perks/danceWithMe.png"
	},
	{
		name: "Borrowed Time",
		image: "../../images/DbD/perks/borrowedTime.png"
	},
	{
		name: "Dead Hard",
		image: "../../images/DbD/perks/DeadHard.png"
	},
	{
		name: "Saboteur",
		image: "../../images/DbD/perks/saboteur.png"
	},
	{
		name: "Detective's Hunch",
		image: "../../images/DbD/perks/detectivesHunch.png"
	},
	{
		name: "Alert",
		image: "../../images/DbD/perks/alert.png"
	},
	{
		name: "Calm Spirit",
		image: "../../images/DbD/perks/calmSpirit.png"
	},
	{
		name: "Resilience",
		image: "../../images/DbD/perks/resilience.png"
	},
	{
		name: "Boil Over",
		image: "../../images/DbD/perks/boilOver.png"
	},
	{
		name: "Sole Survivor",
		image: "../../images/DbD/perks/soleSurvivor.png"
	},
	{
		name: "Lucky Break",
		image: "../../images/DbD/perks/luckyBreak.png"
	},
	{
		name: "Buckle Up",
		image: "../../images/DbD/perks/buckleUp.png"
	},
	{
		name: "Self-Care",
		image: "../../images/DbD/perks/selfCare.png"
	},
	{
		name: "Windows of Opportunity",
		image: "../../images/DbD/perks/windowsOfOpportunity.png"
	},
	{
		name: "Deliverance",
		image: "../../images/DbD/perks/deliverance.png"
	},
	{
		name: "Small Game",
		image: "../../images/DbD/perks/smallGame.png"
	},
	{
		name: "Mettle of Man",
		image: "../../images/DbD/perks/mettleOfMan.png"
	},
	{
		name: "Tenacity",
		image: "../../images/DbD/perks/tenacity.png"
	},
	{
		name: "Repressed Alliance ",
		image: "../../images/DbD/perks/repressedAlliance.png"
	},
	{
		name: "Poised",
		image: "../../images/DbD/perks/poised.png"
	},
	{
		name: "Iron Will",
		image: "../../images/DbD/perks/ironWill.png"
	},
	{
		name: "Camaraderie",
		image: "../../images/DbD/perks/camaraderie.png"
	},
	{
		name: "Breakout",
		image: "../../images/DbD/perks/breakout.png"
	},
	{
		name: "No One Left Behind",
		image: "../../images/DbD/perks/noOneLeftBehind.png"
	},
	{
		name: "Left Behind",
		image: "../../images/DbD/perks/leftBehind.png"
	},
	{
		name: "This Is Not Happening",
		image: "../../images/DbD/perks/thisIsNotHappening.png"
	},
	{
		name: "Better Together",
		image: "../../images/DbD/perks/betterTogether.png"
	},
	{
		name: "Decisive Strike",
		image: "../../images/DbD/perks/decisiveStrike.png"
	},
	{
		name: "Stake Out",
		image: "../../images/DbD/perks/stakeOut.png"
	},
	{
		name: "Blood Pact",
		image: "../../images/DbD/perks/bloodPact.png"
	},
	{
		name: "Head On",
		image: "../../images/DbD/perks/headOn.png"
	},
	{
		name: "Autodidact",
		image: "../../images/DbD/perks/autodidact.png"
	},
	{
		name: "Red Herring",
		image: "../../images/DbD/perks/redHerring.png"
	},
	{
		name: "Up the Ante",
		image: "../../images/DbD/perks/upTheAnte.png"
	},
	{
		name: "Adrenaline",
		image: "../../images/DbD/perks/adrenaline.png"
	},
	{
		name: "Unbreakable",
		image: "../../images/DbD/perks/unbreakable.png"
	},
	{
		name: "Distortion",
		image: "../../images/DbD/perks/distortion.png"
	},
	{
		name: "Inner Strength",
		image: "../../images/DbD/perks/innerStrength.png"
	},
	{
		name: "We're Gonna Live Forever",
		image: "../../images/DbD/perks/WereGonnaLiveForever.png"
	},
	{
		name: "Premonition",
		image: "../../images/DbD/perks/premonition.png"
	},
	{
		name: "Flip-Flop",
		image: "../../images/DbD/perks/flipFlop.png"
	},
	{
		name: "Ace in the Hole",
		image: "../../images/DbD/perks/aceInTheHole.png"
	},
	{
		name: "Leader",
		image: "../../images/DbD/perks/leader.png"
	},
	{
		name: "Hope",
		image: "../../images/DbD/perks/hope.png"
	},
	{
		name: "Solidarity",
		image: "../../images/DbD/perks/solidarity.png"
	},
	{
		name: "Urban Evasion",
		image: "../../images/DbD/perks/urbanEvasion.png"
	},
	{
		name: "Aftercare",
		image: "../../images/DbD/perks/aftercare.png"
	},
	{
		name: "No Mither",
		image: "../../images/DbD/perks/NoMither.png"
	},
	{
		name: "Wake Up!",
		image: "../../images/DbD/perks/wakeUp.png"
	},
	{
		name: "Slippery Meat",
		image: "../../images/DbD/perks/slipperyMeat.png"
	},
	{
		name: "Fixated",
		image: "../../images/DbD/perks/fixated.png"
	},
	{
		name: "Streetwise",
		image: "../../images/DbD/perks/streetwise.png"
	},
	{
		name: "Bond",
		image: "../../images/DbD/perks/bond.png"
	},
	{
		name: "Off the Record",
		image: "../../images/DbD/perks/offTheRecord.png"
	},
    {
		name: "Appraisal",
		image: "../../images/DbD/perks/appraisal.png"
	},
    {
		name: "Deception",
		image: "../../images/DbD/perks/deception.png"
	},
    {
		name: "Power Struggle",
		image: "../../images/DbD/perks/powerStruggle.png"
	},
    {
		name: "Visionary",
		image: "../../images/DbD/perks/visionary.png"
	},
    {
		name: "Desperate Measures",
		image: "../../images/DbD/perks/desperateMeasures.png"
	},
    {
		name: "Built To Last",
		image: "../../images/DbD/perks/builtToLast.png"
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

const fetchPerks = (bound) => {
    
    const promises = [];
    for (let i = 0; i <= 0; i++) {
        const url = 'https://dbd-stats.info/api/perks/';
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        buildPerks(results);
    });
};

const buildPerks = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var sPerks = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if ((item[element].type === "EInventoryItemType::CamperPerk") && item[element].bloodWeb) {
                sPerks.push([item[element].displayName, item[element].perkDefaultDescription, url + item[element].iconPathList[0]]);
            }
        }
        doSomething(sPerks);
        var sIndeces = getIndeces(4, sPerks.length);
        return displaySurvPerks([sPerks[sIndeces[0]], sPerks[sIndeces[1]], sPerks[sIndeces[2]], sPerks[sIndeces[3]]]);
    }
};

const displaySurvPerks_Old = (disPerks) => {
    surv.innerHTML = '';
    var i = 0;
    for (i = 0; i < 4; i++) {
       var lag = '<li class="list-group-item list-group-item-primary"><h2 class="text-center">' +
        disPerks[i][0] + '</h2>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + disPerks[i][2] +'"></div>' + '<div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div>' + '</li>';
        surv.innerHTML += lag;
    }
};

function displaySurvPerks() {
    //letsgosp();
    surv.innerHTML = '';
    var indeces = getIndeces(4, survivorPerks.length);
    var perks = [survivorPerks[indeces[0]], survivorPerks[indeces[1]], survivorPerks[indeces[2]], survivorPerks[indeces[3]]];
    var lag = '<li class="list-group-item list-group-item-primary">';
    var i = 0;
    for (i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            lag += '<div class="row text-center">';
        }
        lag += '<div class="column" style="width:48%"><h3 class="text-center">' +
        perks[i].name + '</h3>' + '<img class="img-fluid" style="width: 50%;" src="' + perks[i].image +'"></div>';
        if (i % 2 == 1) {
            lag += '</div>';
        }
    }
    lag += '</li>';
    surv.innerHTML += lag;
}

function letsgosp() {
    var i = 0;
    var arr = ['name: ', 'image: '];
    var a = 'const survivorPerks = [\n';
    for(i = 0; i < survivorPerks.length; i++) {
        var j = 0;
        var add;
        a += '\t{\n';
        for (j = 0; j < arr.length; j++) {
            var index = survivorPerks[i].image.lastIndexOf('_')+1;
            index = '../../images/DbD/perks/' + survivorPerks[i].image.substr(index);
            if (j == arr.length-1) { 
                a += '\t\t' + arr[j];
                add = '"' + index + '"';
                a += add + '\n';
            } else {
                a += '\t\t' + arr[j];
                add = '"' + survivorPerks[i].name + '"';
                a += add + ',\n';
            }
        }
        if (i == survivorPerks.length-1) {
            a += '\t}\n';
        } else {
            a += '\t},\n'
        }
    }
    a += '];';
    console.log(a);
}

displaySurvPerks();