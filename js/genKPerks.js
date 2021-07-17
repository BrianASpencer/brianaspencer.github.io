//const kill = document.getElementById('kPerks');

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
        disPerks[i][0] + '</h2>' + '<div class="text-center"> <img class="ui centered fluid image" src="' + disPerks[i][2] +'"></div>' + '<div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div><br>' + '</li>';
        kill.innerHTML += lag;
    }
};

function displayKillerPerks() {
    //letsgokp();
    //kill.innerHTML = '';
    var sIndeces = getIndeces(4, killerPerks.length);
    var perks = [killerPerks[sIndeces[0]], killerPerks[sIndeces[1]], killerPerks[sIndeces[2]], killerPerks[sIndeces[3]]];
    var lag = '<li class="list-group-item list-group-item-danger"><div class="ui two column centered grid">';
    var i = 0;
    for (i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            lag += '<div class="row">';
        }
        lag += '<div class="eight wide column"><h3 class="text-center">' +
        perks[i].name + '</h3>' + '<img class="ui centered small image" src="' + perks[i].image +'"></div>';
        if (i % 2 == 1) {
            lag += '</div>';
        }
    }
    //lag += '</li>';
    lag +='</li></div></div>';
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