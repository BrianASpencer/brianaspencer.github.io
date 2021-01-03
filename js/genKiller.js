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
    Promise.all(promises).then((results) => {
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
                killers.push([item[element].displayName, item[element].biography, url + item[element].iconPath]);
            }
        }
        
        return displayKiller(killers[getRandomInt(killers.length)]);
    }
};

const displayKiller = (killer) => {
    killerSlot.innerHTML = '';
    var lag = '<li class="list-group-item list-group-item-danger"><h2>' +
    killer[0] + '</h2>' + '<img style="width: 20%; height: 20%;" src="' + killer[2] +'">' + '<div>' + killer[1].replace(/<(.|\n)*?>/g, '') + '</div>' + '</li>';
    killerSlot.innerHTML += lag;
};

fetchKiller();
