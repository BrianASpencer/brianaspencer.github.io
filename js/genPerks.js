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
    surv.innerHTML = '';
    var i = 0;
    for (i = 0; i < 4; i++) {
        var lag = '<li class="list-group-item list-group-item-primary"><h2 class="text-center">' +
        disPerks[i][0] + '</h2><br>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + disPerks[i][2] +'"></div>' + '<div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div><br>' + '</li>';
        surv.innerHTML += lag;
    }
};

const displayKillerPerks = (disPerks) => {
    kill.innerHTML = '';
    var i = 0;
    for (i = 0; i < 4; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><h2 class="text-center">' +
        disPerks[i][0] + '</h2><br>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + disPerks[i][2] +'"></div>' + '<div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div><br>' + '</li>';
        kill.innerHTML += lag;
    }
};

fetchPerks();