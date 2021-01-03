const killerSlot = document.getElementById('killerSlot');
var killer;

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

const fetchKiller = (bound) => {
    killer = [];
    const characters = [];
    
    const url = 'https://dbd-stats.info/api/characters';
    
    characters.push(fetch(url).then((res) => res.json()));
    
    Promise.all(characters).then((results) => {
        buildKiller(results);
    });

};


const buildKiller = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var killers = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if (item[element].role === "EPlayerRole::VE_Slasher") {
                killers.push([item[element].displayName, item[element].biography, url + item[element].iconPath, item[element].defaultItem]);
            }
        }
        var index = getRandomInt(killers.length);
        killer = killers[index];
        return displayKiller(killer);
    }
};

const displayKiller = (killer) => {
    killerSlot.innerHTML = '';
    var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
    killer[0] + '</h2>' + '<img style="width: 20%; height: 20%;" src="' + killer[2] +'">' + '<div>' + killer[1].replace(/<(.|\n)*?>/g, '') + '</div></div></li>';
    killerSlot.innerHTML += lag;
};

fetchKiller();
