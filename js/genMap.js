const maps = document.getElementById('maps');

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
    
    const promises = [];
    for (let i = 0; i <= 0; i++) {
        const url = 'https://dbd-stats.info/api/maps';
        promises.push(fetch(url).then((res) => res.json()));
    }
    
    Promise.all(promises).then((results) => {
        buildMaps(results);
    });
    
};

const buildMaps = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var maps = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if (item[element].hookMaxCount > -1) {
                maps.push([item[element].name, url + item[element].thumbnailPath]);
            }
        }
        
        var indeces = getIndeces(2, maps.length);
        
        return displayMaps([maps[indeces[0]], maps[indeces[1]]]);
    }
};

const displayMaps = (mapList) => {
    maps.innerHTML = '';
    var i = 0;
    for (i = 0; i < 2; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
        mapList[i][0] + '</h2>' + '<img style="width: 30%; height: 30%;" src="' + mapList[i][1] +'"></div>' + '</li>';
        maps.innerHTML += lag;
    }
};

fetchMaps();
