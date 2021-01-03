const killerSlot = document.getElementById('killerSlot');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const fetchKiller = (bound) => {
    
    const promises = [];
    for (let i = 0; i <= 0; i++) {
        const url = 'https://dbd-stats.info/api/characters';
        promises.push(fetch(url).then((res) => res.json()));
    }
    console.log('lag', promises);
    Promise.all(promises).then((results) => {
        buildKiller(results);
    });
    
};

const buildKiller = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var sPerks = [];
        for (const element in item) {
            var sIndex = 0;
            var url = 'https://dbd-stats.info/data/Public/';
            if (item[element].role === "EPlayerRole::VE_Slasher") {
                sPerks.push([item[element].displayName, item[element].biography, url + item[element].iconPath]);
            }
        }
        console.log('lagging', sPerks);
        
        return displayKiller(sPerks[getRandomInt(sPerks.length)]);
    }
};

const displayKiller = (disPerks) => {
    killerSlot.innerHTML = '';
    var lag = '<li class="list-group-item list-group-item-warning"><h2 class="text-center">' +
    disPerks[0] + '</h2>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + disPerks[2] +'"></div>' + '<div>' + disPerks[1].replace(/<(.|\n)*?>/g, '') + '</div><br>' + '</li>';
    killerSlot.innerHTML += lag;
};

fetchKiller();