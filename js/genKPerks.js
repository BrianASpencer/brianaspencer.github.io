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

const fetchKPerks = (bound) => {
    
    const promises = [];
    for (let i = 0; i <= 0; i++) {
        const url = 'https://dbd-stats.info/api/perks/';
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
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

const displayKillerPerks = (disPerks) => {
    kill.innerHTML = '';
    var i = 0;
    for (i = 0; i < 4; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><h2 class="text-center">' +
        disPerks[i][0] + '</h2>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + disPerks[i][2] +'"></div>' + '<div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div><br>' + '</li>';
        kill.innerHTML += lag;
    }
};

fetchKPerks();
