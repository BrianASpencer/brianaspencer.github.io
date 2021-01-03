const maps = document.getElementById('maps');
const surv = document.getElementById('sPerks');
const kill = document.getElementById('kPerks');

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

const fetchMaps = (bound) => {
    const allMaps = [
        "Mother's Dwelling",
        "Shelter Woods",
        "Azarov's Resting Place",
        "Blood Lodge",
        "Torment Creek",
        "Lampkin Lane",
        "Grim Pantry",
        "Gas Heaven",
        "Wretched Shop",
        "The Pale Rose",
        "Ironworks of Misery",
        "Suffocation Pit",
        "Rotten Fields",
        "Groaning Storehouse",
        "Fractured Cowshed",
        "The Temple of Purgation",
        "Family Residence",
        "Sanctum of Wrath",
        "Mount Ormond Resort",
        "The Thompson House",
        "Treatment Theatre",
        "Badham Preschool V",
        "Wreckers' Yard",
        "Badham Preschool I",
        "Badham Preschool II",
        "Badham Preschool III",
        "The Game",
        "Father Campbell's Chapel",
        "Badham Preschool IV",
        "Rancid Abattoir",
        "Dead Dawg Saloon",
        "Coal Tower"
    ];
    
    const promises = [];
    //https://bridge.buddyweb.fr/api/dbd/perks/{id}
    for (let i = 0; i <= 0; i++) {
        const url = 'https://dbd-stats.info/api/perks/';
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        buildPerks(results);
    });
    
    var indeces = getIndeces(2, allMaps.length);
    
    return displayMaps([allMaps[indeces[0]], allMaps[indeces[1]]]);
};

const buildPerks = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        //do displayName, icon, defaultperkdescription
        //surv.innerHTML += '<li class="list-group-item list-group-item-warning">' + perks[element].displayName + '</li>';
        //kill.innerHTML += '<li class="list-group-item list-group-item-warning">' + perks[element].displayName + '</li>';
        var kPerks = [];
        var sPerks = [];
        for (const element in item) {
            var sIndex = 0;
            var kIndex = 0;
            var url = 'https://dbd-stats.info/data/Public/';
            if (item[element].type === "EInventoryItemType::CamperPerk") {
                sPerks.push([item[element].displayName, item[element].perkDefaultDescription, url + item[element].iconPathList[0]]);
            } else {
                kPerks.push([item[element].displayName, item[element].perkDefaultDescription, url + item[element].iconPathList[0]]);
            }
        }
        
        var sIndeces = getIndeces(4, sPerks.length);
        var kIndeces = getIndeces(4, kPerks.length);
        return displaySurvPerks([sPerks[sIndeces[0]], sPerks[sIndeces[1]], sPerks[sIndeces[2]], sPerks[sIndeces[3]]]), 
            displayKillerPerks([kPerks[kIndeces[0]], kPerks[kIndeces[1]], kPerks[sIndeces[2]], kPerks[sIndeces[3]]]);
    }
};

const displaySurvPerks = (disPerks) => {
    var i = 0;
    for (i = 0; i < 4; i++) {
        var lag = '<li class="list-group-item list-group-item-primary"><h2 class="text-center">' +
        disPerks[i][0] + '</h2><br><div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div><br>' + '<div class="text-center"> <img src="' + disPerks[i][2] +'"></div></li>';
        surv.innerHTML += lag;
    }
};

const displayKillerPerks = (disPerks) => {
    var i = 0;
    for (i = 0; i < 4; i++) {
        console.log(disPerks[i]);
        var lag = '<li class="list-group-item list-group-item-danger"><h2 class="text-center">' +
        disPerks[i][0] + '</h2><br><div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div><br>' + '<div class="text-center"> <img src="' + disPerks[i][2] +'"></div></li>';
        kill.innerHTML += lag;
    }
};


const displayMaps = (allMaps) => {
    const map_1 = '<li class="list-group-item list-group-item-warning">'+allMaps[0]+'</li>';
    const map_2 = '<li class="list-group-item list-group-item-warning">'+allMaps[1]+'</li>';
    maps.innerHTML = map_1 + map_2;
};

fetchMaps();
